// _runtime/00761__INTERNAL_captureMetric.js
import _mod699 from "metro/00699__.js";
import CONSOLE_LEVELS from "00700_CONSOLE_LEVELS.js";
import _mod701 from "metro/00701__.js";
import browserPerformanceTimeOrigin from "00714_browserPerformanceTimeOrigin.js";
import _getSpanForScope from "00720__getSpanForScope.js";
import _mod724 from "metro/00724__.js";
import applyScopeDataToEvent from "00747_applyScopeDataToEvent.js";
import _getTraceInfoFromScope from "00757__getTraceInfoFromScope.js";
import _slicedToArray2 from "metro/00759__slicedToArray.js";
import _mod762 from "metro/00762__.js";
import _slicedToArray from "metro/00032__slicedToArray.js";

const f82049 = () => {
  const weakMap = new WeakMap();
  return weakMap;
};
function _INTERNAL_captureSerializedMetric(getOptions, arg1) {
  const obj = _mod701;
  const globalSingleton = obj.getGlobalSingleton("clientToMetricBufferMap", f82049);
  const obj3 = _mod701;
  const globalSingleton1 = obj3.getGlobalSingleton("clientToMetricBufferMap", f82049);
  const value = globalSingleton1.get(getOptions);
  if (undefined === value) {
    const items = [arg1];
    const result = globalSingleton.set(getOptions, items);
  } else if (value.length >= 1000) {
    _INTERNAL_flushMetricsBuffer(getOptions, value);
    const items1 = [arg1];
    const result1 = globalSingleton.set(getOptions, items1);
  } else {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(items2, value, 0)] = arg1;
    const result2 = globalSingleton.set(getOptions, items2);
  }
}
function _INTERNAL_flushMetricsBuffer(getOptions, value) {
  let _metadata;
  let tunnel;
  let items = value;
  if (value == null) {
    const obj = _mod701;
    const globalSingleton = obj.getGlobalSingleton("clientToMetricBufferMap", f82049);
    items = globalSingleton.get(getOptions);
  }
  if (items == null) {
    items = [];
  }
  if (0 !== items.length) {
    const options = getOptions.getOptions();
    ({ _metadata, tunnel } = options);
    const obj3 = _mod762;
    const metricEnvelope = obj3.createMetricEnvelope(items, _metadata, tunnel, getOptions.getDsn());
    const obj4 = _mod701;
    const globalSingleton1 = obj4.getGlobalSingleton("clientToMetricBufferMap", f82049);
    const result = globalSingleton1.set(getOptions, []);
    getOptions.emit("flushMetrics");
    getOptions.sendEnvelope(metricEnvelope);
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _INTERNAL_captureMetric = function _INTERNAL_captureMetric(attributes, scope) {
  let _experiments;
  let beforeSendMetric;
  let enableMetrics;
  let environment;
  let name;
  let obj7;
  let release;
  let tmp17Result6;
  let user;
  let version;
  scope = undefined;
  if (scope != null) {
    scope = scope.scope;
  }
  if (scope == null) {
    const obj = _mod724;
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
    const obj2 = _mod724;
    client = obj2.getClient();
  }
  if (client) {
    const options = client.getOptions();
    ({ _experiments, enableMetrics, beforeSendMetric } = options);
    if (enableMetrics == null) {
      let enableMetrics1;
      if (_experiments != null) {
        enableMetrics1 = _experiments.enableMetrics;
      }
      if (enableMetrics1 != null) {
        if (!enableMetrics1) {
          if (_mod699.DEBUG_BUILD) {
            const debug2 = CONSOLE_LEVELS.debug;
            debug2.warn("metrics option not enabled, metric will not be captured.");
          }
        }
      }
    }
    const getCombinedScopeData = applyScopeDataToEvent.getCombinedScopeData;
    applyScopeDataToEvent;
    const obj3 = _mod724;
    const combinedScopeData = getCombinedScopeData(obj3.getIsolationScope(), scope);
    ({ user, attributes } = combinedScopeData);
    const options1 = client.getOptions();
    ({ release, environment } = options1);
    const obj4 = {};
    const merged = Object.assign(attributes.attributes);
    const id = user.id;
    let tmp24 = !id;
    if (id) {
      tmp24 = "user.id" in obj4;
    }
    if (!tmp24) {
      obj4["user.id"] = id;
    }
    const email = user.email;
    let tmp25 = !email;
    if (email) {
      tmp25 = "user.email" in obj4;
    }
    if (!tmp25) {
      obj4["user.email"] = email;
    }
    const username = user.username;
    let tmp26 = !username;
    if (username) {
      tmp26 = "user.name" in obj4;
    }
    if (!tmp26) {
      obj4["user.name"] = username;
    }
    let flag = !release;
    if (release) {
      flag = false;
    }
    if (!flag) {
      obj4["sentry.release"] = release;
    }
    let flag2 = !environment;
    if (environment) {
      flag2 = false;
    }
    if (!flag2) {
      obj4["sentry.environment"] = environment;
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
      obj4["sentry.sdk.name"] = name;
    }
    let flag4 = !version;
    if (version) {
      flag4 = false;
    }
    if (!flag4) {
      obj4["sentry.sdk.version"] = version;
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
      obj4["sentry.replay_id"] = replayId;
    }
    if (replayId) {
      let recordingMode;
      if (integrationByName != null) {
        recordingMode = integrationByName.getRecordingMode();
      }
      replayId = "buffer" === recordingMode;
    }
    if (replayId) {
      if (!false) {
        obj4["sentry._internal.replay_is_buffering"] = true;
      }
    }
    const obj5 = { attributes: obj4 };
    const merged1 = Object.assign(attributes);
    client.emit("processMetric", obj5);
    if (!beforeSendMetric) {
      let beforeSendMetric1;
      if (_experiments != null) {
        beforeSendMetric1 = _experiments.beforeSendMetric;
      }
      beforeSendMetric = beforeSendMetric1;
    }
    let beforeSendMetricResult = obj5;
    if (beforeSendMetric) {
      beforeSendMetricResult = beforeSendMetric(obj5);
    }
    if (beforeSendMetricResult) {
      let str10;
      const tmp17Result = _getTraceInfoFromScope;
      const tmp38 = _slicedToArray(tmp17Result._getTraceInfoFromScope(client, scope), 2)[1];
      const tmp17Result5 = _getSpanForScope;
      const _getSpanForScopeResult = tmp17Result5._getSpanForScope(scope);
      if (_getSpanForScopeResult) {
        str10 = _getSpanForScopeResult.spanContext().traceId;
      } else if (tmp38 != null) {
        str10 = tmp38.trace_id;
      }
      let spanId;
      if (_getSpanForScopeResult) {
        spanId = _getSpanForScopeResult.spanContext().spanId;
      }
      const obj6 = {
        timestamp: tmp17Result6.timestampInSeconds(),
        trace_id: str10,
        span_id: spanId,
        name: null,
        type: null,
        unit: null,
        value: null,
        attributes: obj7,
      };
      tmp17Result6 = browserPerformanceTimeOrigin;
      if (str10 == null) {
        str10 = "";
      }
      ({ name: obj11.name, type: obj11.type, unit: obj11.unit, value: obj11.value } = beforeSendMetricResult);
      obj7 = {};
      const tmp17Result7 = _slicedToArray2;
      const merged2 = Object.assign(tmp17Result7.serializeAttributes(attributes));
      const tmp17Result8 = _slicedToArray2;
      const merged3 = Object.assign(
        tmp17Result8.serializeAttributes(beforeSendMetricResult.attributes, "skip-undefined"),
      );
      if (_mod699.DEBUG_BUILD) {
        const debug4 = CONSOLE_LEVELS.debug;
        debug4.log("[Metric]", obj6);
      }
      prop(client, obj6);
      client.emit("afterCaptureMetric", beforeSendMetricResult);
    } else if (_mod699.DEBUG_BUILD) {
      const debug3 = CONSOLE_LEVELS.debug;
      debug3.log("`beforeSendMetric` returned `null`, will not send metric.");
    }
  } else if (_mod699.DEBUG_BUILD) {
    const debug = CONSOLE_LEVELS.debug;
    debug.warn("No client available to capture metric.");
  }
};
export { _INTERNAL_captureSerializedMetric };
export { _INTERNAL_flushMetricsBuffer };
export const _INTERNAL_getMetricBuffer = function _INTERNAL_getMetricBuffer(arg0) {
  const obj = _mod701;
  const globalSingleton = obj.getGlobalSingleton("clientToMetricBufferMap", f82049);
  return globalSingleton.get(arg0);
};
