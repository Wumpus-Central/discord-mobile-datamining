// _runtime/00885__INTERNAL_captureSerializedMetric.js
import __SENTRY_DEBUG__ from "metro/00823___SENTRY_DEBUG__.js";
import getGlobalSingleton from "00825_getGlobalSingleton.js";
import getClient from "00848_getClient.js";
import mergeScopeData from "00871_mergeScopeData.js";
import createMetricContainerEnvelopeItem from "00886_createMetricContainerEnvelopeItem.js";
import closure_2 from "metro/00032__slicedToArray.js";

function _INTERNAL_captureSerializedMetric(closure_0) {
  const globalSingleton = getGlobalSingleton.getGlobalSingleton("clientToMetricBufferMap", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  const obj = getGlobalSingleton;
  const globalSingleton1 = getGlobalSingleton.getGlobalSingleton("clientToMetricBufferMap", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  const value = globalSingleton1.get(closure_0);
  if (undefined === value) {
    const items = [arg1];
    const result = globalSingleton.set(closure_0, items);
  } else if (value.length >= 1000) {
    _INTERNAL_flushMetricsBuffer(closure_0, value);
    const items1 = [arg1];
    const result1 = globalSingleton.set(closure_0, items1);
  } else {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(value, 0)] = arg1;
    const result2 = globalSingleton.set(closure_0, items2);
  }
}
function _INTERNAL_flushMetricsBuffer(closure_0, value) {
  let items = value;
  if (value == null) {
    const globalSingleton = getGlobalSingleton.getGlobalSingleton("clientToMetricBufferMap", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    items = globalSingleton.get(closure_0);
    const obj = getGlobalSingleton;
  }
  if (items == null) {
    items = [];
  }
  if (0 !== items.length) {
    const options = closure_0.getOptions();
    const obj3 = createMetricContainerEnvelopeItem;
    ({ _metadata, tunnel } = options);
    const metricEnvelope = obj3.createMetricEnvelope(items, _metadata, tunnel, closure_0.getDsn());
    const globalSingleton1 = getGlobalSingleton.getGlobalSingleton("clientToMetricBufferMap", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    const result = globalSingleton1.set(closure_0, []);
    closure_0.emit("flushMetrics");
    closure_0.sendEnvelope(metricEnvelope);
    const obj4 = getGlobalSingleton;
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _INTERNAL_captureMetric = function _INTERNAL_captureMetric(attributes, scope) {
  scope = undefined;
  if (scope != null) {
    scope = scope.scope;
  }
  if (scope == null) {
    let obj = getClient;
    scope = obj.getCurrentScope();
  }
  let prop;
  if (scope != null) {
    prop = scope.captureSerializedMetric;
  }
  if (prop == null) {
    prop = _INTERNAL_captureSerializedMetric;
  }
  let client;
  if (scope != null) {
    client = scope.getClient();
  }
  if (client == null) {
    obj1 = getClient;
    client = obj1.getClient();
  }
  if (client) {
    const options = client.getOptions();
    ({ _experiments, enableMetrics, beforeSendMetric } = options);
    if (enableMetrics == null) {
      enableMetrics = undefined;
      if (_experiments != null) {
        enableMetrics = _experiments.enableMetrics;
      }
      if (enableMetrics != null) {
        if (!enableMetrics) {
          if (__SENTRY_DEBUG__.DEBUG_BUILD) {
            const debug2 = tmp13(824).debug;
            debug2.warn("metrics option not enabled, metric will not be captured.");
          }
          tmp13 = require;
        }
      }
    }
    let obj2 = mergeScopeData;
    const combinedScopeData = obj2.getCombinedScopeData(getClient.getIsolationScope(), scope);
    ({ user, attributes } = combinedScopeData);
    const options1 = client.getOptions();
    ({ release, environment } = options1);
    obj = {};
    const merged = Object.assign(attributes.attributes);
    const id = user.id;
    let tmp23 = !id;
    if (id) {
      tmp23 = "user.id" in obj;
    }
    if (!tmp23) {
      obj["user.id"] = id;
    }
    const email = user.email;
    let tmp24 = !email;
    if (email) {
      tmp24 = "user.email" in obj;
    }
    if (!tmp24) {
      obj["user.email"] = email;
    }
    const username = user.username;
    let tmp25 = !username;
    if (username) {
      tmp25 = "user.name" in obj;
    }
    if (!tmp25) {
      obj["user.name"] = username;
    }
    let flag = !release;
    if (release) {
      flag = false;
    }
    if (!flag) {
      obj["sentry.release"] = release;
    }
    let flag2 = !environment;
    if (environment) {
      flag2 = false;
    }
    if (!flag2) {
      obj["sentry.environment"] = environment;
    }
    const sdkMetadata = client.getSdkMetadata();
    let sdk;
    if (sdkMetadata != null) {
      sdk = sdkMetadata.sdk;
    }
    if (sdk == null) {
      sdk = {};
    }
    ({ name, version } = sdk);
    let flag3 = !name;
    if (name) {
      flag3 = false;
    }
    if (!flag3) {
      obj["sentry.sdk.name"] = name;
    }
    let flag4 = !version;
    if (version) {
      flag4 = false;
    }
    if (!flag4) {
      obj["sentry.sdk.version"] = version;
    }
    const integrationByName = client.getIntegrationByName("Replay");
    let replayId;
    if (integrationByName != null) {
      replayId = integrationByName.getReplayId(true);
    }
    let flag6 = !replayId;
    if (replayId) {
      flag6 = false;
    }
    if (!flag6) {
      obj["sentry.replay_id"] = replayId;
    }
    if (replayId) {
      let recordingMode;
      if (integrationByName != null) {
        recordingMode = integrationByName.getRecordingMode();
      }
      replayId = "buffer" === recordingMode;
    }
    if (replayId) {
      {
        obj["sentry._internal.replay_is_buffering"] = true;
      }
    }
    obj = {};
    const merged1 = Object.assign(attributes);
    obj.attributes = obj;
    client.emit("processMetric", obj);
    if (!beforeSendMetric) {
      beforeSendMetric = undefined;
      if (_experiments != null) {
        beforeSendMetric = _experiments.beforeSendMetric;
      }
    }
    let beforeSendMetricResult = obj;
    if (beforeSendMetric) {
      beforeSendMetricResult = beforeSendMetric(obj);
    }
    if (beforeSendMetricResult) {
      let tmp17Result = tmp17(881);
      const tmp37 = callback(tmp17Result._getTraceInfoFromScope(client, scope), 2)[1];
      tmp17Result = tmp17(844);
      const _getSpanForScopeResult = tmp17Result._getSpanForScope(scope);
      if (_getSpanForScopeResult) {
        let str10 = _getSpanForScopeResult.spanContext().traceId;
      } else if (tmp37 != null) {
        str10 = tmp37.trace_id;
      }
      let spanId;
      if (_getSpanForScopeResult) {
        spanId = _getSpanForScopeResult.spanContext().spanId;
      }
      obj1 = { timestamp: null, trace_id: null, span_id: null, name: null, type: null, unit: null, value: null, attributes: null };
      obj1[0] = tmp17(838).timestampInSeconds();
      if (str10 == null) {
        str10 = "";
      }
      obj1[1] = str10;
      obj1[2] = spanId;
      ({ name: obj12[3], type: obj12[4], unit: obj12[5], value: obj12[6] } = beforeSendMetricResult);
      obj2 = {};
      const tmp17Result1 = tmp17(838);
      const merged2 = Object.assign(tmp17(883).serializeAttributes(attributes));
      const tmp17Result2 = tmp17(883);
      const merged3 = Object.assign(tmp17(883).serializeAttributes(beforeSendMetricResult.attributes, "skip-undefined"));
      obj1[7] = obj2;
      if (tmp17(823).DEBUG_BUILD) {
        const debug4 = tmp17(824).debug;
        debug4.log("[Metric]", obj1);
      }
      prop(client, obj1);
      client.emit("afterCaptureMetric", beforeSendMetricResult);
      const tmp17Result3 = tmp17(883);
    } else if (tmp17(823).DEBUG_BUILD) {
      const debug3 = tmp17(824).debug;
      debug3.log("`beforeSendMetric` returned `null`, will not send metric.");
    }
    const obj4 = getClient;
  } else {
    if (__SENTRY_DEBUG__.DEBUG_BUILD) {
      const debug = tmp8(824).debug;
      debug.warn("No client available to capture metric.");
    }
    tmp8 = require;
  }
};
export { _INTERNAL_captureSerializedMetric };
export { _INTERNAL_flushMetricsBuffer };
export const _INTERNAL_getMetricBuffer = function _INTERNAL_getMetricBuffer(arg0) {
  const globalSingleton = getGlobalSingleton.getGlobalSingleton("clientToMetricBufferMap", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  return globalSingleton.get(arg0);
};