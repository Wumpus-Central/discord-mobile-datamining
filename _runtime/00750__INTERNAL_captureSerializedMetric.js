// _runtime/00750__INTERNAL_captureSerializedMetric.js
import _mod688 from "metro/00688__.js";
import consoleSandbox from "00689_consoleSandbox.js";
import _mod690 from "metro/00690__.js";
import dateTimestampInSeconds from "00703_dateTimestampInSeconds.js";
import _getSpanForScope from "00709__getSpanForScope.js";
import _mod713 from "metro/00713__.js";
import mergeScopeData from "00736_mergeScopeData.js";
import _getTraceInfoFromScope from "00746__getTraceInfoFromScope.js";
import _mod748 from "metro/00748__.js";
import _mod751 from "metro/00751__.js";
import _slicedToArray from "metro/00032__.js";

function _INTERNAL_captureSerializedMetric(getOptions, arg1) {
  const globalSingleton = _mod690.getGlobalSingleton("clientToMetricBufferMap", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  const globalSingleton1 = _mod690.getGlobalSingleton("clientToMetricBufferMap", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  value = globalSingleton1.get(getOptions);
  if (undefined === value) {
    const items = [arg1];
    const result = globalSingleton.set(getOptions, items);
  } else if (value.length >= 1000) {
    _INTERNAL_flushMetricsBuffer(getOptions, value);
    const items1 = [arg1];
    const result1 = globalSingleton.set(getOptions, items1);
  } else {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(value, 0)] = arg1;
    const result2 = globalSingleton.set(getOptions, items2);
  }
}
function _INTERNAL_flushMetricsBuffer(getOptions, value) {
  let items = value;
  if (value == null) {
    const globalSingleton = _mod690.getGlobalSingleton("clientToMetricBufferMap", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    items = globalSingleton.get(getOptions);
  }
  if (items == null) {
    items = [];
  }
  if (0 !== items.length) {
    const options = getOptions.getOptions();
    const obj3 = _mod751;
    ({ _metadata, tunnel } = options);
    const metricEnvelope = obj3.createMetricEnvelope(items, _metadata, tunnel, getOptions.getDsn());
    const globalSingleton1 = _mod690.getGlobalSingleton("clientToMetricBufferMap", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    const result = globalSingleton1.set(getOptions, []);
    getOptions.emit("flushMetrics");
    getOptions.sendEnvelope(metricEnvelope);
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _INTERNAL_captureMetric = function _INTERNAL_captureMetric(attributes, scope) {
  scope = undefined;
  if (scope != null) {
    scope = scope.scope;
  }
  if (scope == null) {
    scope = _mod713.getCurrentScope();
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
    client = _mod713.getClient();
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
          if (_mod688.DEBUG_BUILD) {
            const debug2 = consoleSandbox.debug;
            debug2.warn("metrics option not enabled, metric will not be captured.");
          }
        }
      }
    }
    const obj3 = mergeScopeData;
    const combinedScopeData = obj3.getCombinedScopeData(_mod713.getIsolationScope(), scope);
    ({ user, attributes } = combinedScopeData);
    const options1 = client.getOptions();
    ({ release, environment } = options1);
    const obj5 = {};
    const merged = Object.assign(attributes.attributes);
    const id = user.id;
    let tmp23 = !id;
    if (id) {
      tmp23 = "user.id" in obj5;
    }
    if (!tmp23) {
      obj5["user.id"] = id;
    }
    const email = user.email;
    let tmp24 = !email;
    if (email) {
      tmp24 = "user.email" in obj5;
    }
    if (!tmp24) {
      obj5["user.email"] = email;
    }
    const username = user.username;
    let tmp25 = !username;
    if (username) {
      tmp25 = "user.name" in obj5;
    }
    if (!tmp25) {
      obj5["user.name"] = username;
    }
    let flag = !release;
    if (release) {
      flag = false;
    }
    if (!flag) {
      obj5["sentry.release"] = release;
    }
    let flag2 = !environment;
    if (environment) {
      flag2 = false;
    }
    if (!flag2) {
      obj5["sentry.environment"] = environment;
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
      obj5["sentry.sdk.name"] = name;
    }
    let flag4 = !version;
    if (version) {
      flag4 = false;
    }
    if (!flag4) {
      obj5["sentry.sdk.version"] = version;
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
      obj5["sentry.replay_id"] = replayId;
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
        obj5["sentry._internal.replay_is_buffering"] = true;
      }
    }
    const obj6 = {};
    const merged1 = Object.assign(attributes);
    obj6.attributes = obj5;
    client.emit("processMetric", obj6);
    if (!beforeSendMetric) {
      let beforeSendMetric1;
      if (_experiments != null) {
        beforeSendMetric1 = _experiments.beforeSendMetric;
      }
      beforeSendMetric = beforeSendMetric1;
    }
    let beforeSendMetricResult = obj6;
    if (beforeSendMetric) {
      beforeSendMetricResult = beforeSendMetric(obj6);
    }
    if (beforeSendMetricResult) {
      const tmp37 = _slicedToArray(_getTraceInfoFromScope._getTraceInfoFromScope(client, scope), 2)[1];
      const tmp17Result = _getTraceInfoFromScope;
      const _getSpanForScopeResult = _getSpanForScope._getSpanForScope(scope);
      if (_getSpanForScopeResult) {
        let str10 = _getSpanForScopeResult.spanContext().traceId;
      } else if (tmp37 != null) {
        str10 = tmp37.trace_id;
      }
      let spanId;
      if (_getSpanForScopeResult) {
        spanId = _getSpanForScopeResult.spanContext().spanId;
      }
      const obj7 = {
        timestamp: null,
        trace_id: null,
        span_id: null,
        name: null,
        type: null,
        unit: null,
        value: null,
        attributes: null,
      };
      const tmp17Result5 = _getSpanForScope;
      obj7.timestamp = dateTimestampInSeconds.timestampInSeconds();
      if (str10 == null) {
        str10 = "";
      }
      obj7.trace_id = str10;
      obj7.span_id = spanId;
      ({ name: obj12.name, type: obj12.type, unit: obj12.unit, value: obj12.value } = beforeSendMetricResult);
      const obj8 = {};
      const tmp17Result6 = dateTimestampInSeconds;
      const merged2 = Object.assign(_mod748.serializeAttributes(attributes));
      const tmp17Result7 = _mod748;
      const merged3 = Object.assign(_mod748.serializeAttributes(beforeSendMetricResult.attributes, "skip-undefined"));
      obj7.attributes = obj8;
      if (_mod688.DEBUG_BUILD) {
        const debug4 = consoleSandbox.debug;
        debug4.log("[Metric]", obj7);
      }
      prop(client, obj7);
      client.emit("afterCaptureMetric", beforeSendMetricResult);
      const tmp17Result8 = _mod748;
    } else if (_mod688.DEBUG_BUILD) {
      const debug3 = consoleSandbox.debug;
      debug3.log("`beforeSendMetric` returned `null`, will not send metric.");
    }
  } else if (_mod688.DEBUG_BUILD) {
    const debug = consoleSandbox.debug;
    debug.warn("No client available to capture metric.");
  }
};
export { _INTERNAL_captureSerializedMetric };
export { _INTERNAL_flushMetricsBuffer };
export const _INTERNAL_getMetricBuffer = function _INTERNAL_getMetricBuffer(arg0) {
  const globalSingleton = _mod690.getGlobalSingleton("clientToMetricBufferMap", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  return globalSingleton.get(arg0);
};
