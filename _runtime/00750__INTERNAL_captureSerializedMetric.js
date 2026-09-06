// === Module 750: _INTERNAL_captureSerializedMetric ===

// Module 750 (_INTERNAL_captureSerializedMetric)
import _mod688 from "module_688" /* 688 */;
import consoleSandbox from "consoleSandbox" /* 689 */;
import _mod690 from "module_690" /* 690 */;
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 703 */;
import _getSpanForScope from "_getSpanForScope" /* 709 */;
import _mod713 from "module_713" /* 713 */;
import mergeScopeData from "mergeScopeData" /* 736 */;
import _getTraceInfoFromScope from "_getTraceInfoFromScope" /* 746 */;
import _mod748 from "module_748" /* 748 */;
import _mod751 from "module_751" /* 751 */;
import _slicedToArray from "module_32" /* 32 */;

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
    let obj = _mod713;
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
    let obj1 = _mod713;
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
          if (_mod688.DEBUG_BUILD) {
            const debug2 = consoleSandbox.debug;
            debug2.warn("metrics option not enabled, metric will not be captured.");
          }
        }
      }
    }
    let obj2 = mergeScopeData;
    const combinedScopeData = obj2.getCombinedScopeData(_mod713.getIsolationScope(), scope);
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
      let tmp17Result = _getTraceInfoFromScope;
      const tmp37 = _slicedToArray(tmp17Result._getTraceInfoFromScope(client, scope), 2)[1];
      tmp17Result = _getSpanForScope;
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
      obj1 = { timestamp: dateTimestampInSeconds.timestampInSeconds(), trace_id: null, span_id: null, name: null, type: null, unit: null, value: null, attributes: null };
      if (str10 == null) {
        str10 = "";
      }
      obj1.trace_id = str10;
      obj1.span_id = spanId;
      ({ name: obj12.name, type: obj12.type, unit: obj12.unit, value: obj12.value } = beforeSendMetricResult);
      obj2 = {};
      const tmp17Result1 = dateTimestampInSeconds;
      const merged2 = Object.assign(_mod748.serializeAttributes(attributes));
      const tmp17Result2 = _mod748;
      const merged3 = Object.assign(_mod748.serializeAttributes(beforeSendMetricResult.attributes, "skip-undefined"));
      obj1.attributes = obj2;
      if (_mod688.DEBUG_BUILD) {
        const debug4 = consoleSandbox.debug;
        debug4.log("[Metric]", obj1);
      }
      prop(client, obj1);
      client.emit("afterCaptureMetric", beforeSendMetricResult);
      const tmp17Result3 = _mod748;
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