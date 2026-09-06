// _runtime/00745__INTERNAL_captureSerializedLog.js
import _mod688 from "metro/00688__.js";
import _mod690 from "metro/00690__.js";
import _mod713 from "metro/00713__.js";
import _mod749 from "metro/00749__.js";
import _slicedToArray from "metro/00032__.js";

function _INTERNAL_captureSerializedLog(getOptions, arg1) {
  const globalSingleton = _mod690.getGlobalSingleton("clientToLogBufferMap", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  const globalSingleton1 = _mod690.getGlobalSingleton("clientToLogBufferMap", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  value = globalSingleton1.get(getOptions);
  if (undefined === value) {
    const items = [arg1];
    const result = globalSingleton.set(getOptions, items);
  } else if (value.length >= 100) {
    _INTERNAL_flushLogsBuffer(getOptions, value);
    const items1 = [arg1];
    const result1 = globalSingleton.set(getOptions, items1);
  } else {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(value, 0)] = arg1;
    const result2 = globalSingleton.set(getOptions, items2);
  }
}
function _INTERNAL_flushLogsBuffer(getOptions, value) {
  let items = value;
  if (value == null) {
    const globalSingleton = _mod690.getGlobalSingleton("clientToLogBufferMap", () => {
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
    const obj3 = _mod749;
    ({ _metadata, tunnel } = options);
    const logEnvelope = obj3.createLogEnvelope(items, _metadata, tunnel, getOptions.getDsn());
    const globalSingleton1 = _mod690.getGlobalSingleton("clientToLogBufferMap", () => {
      const weakMap = new WeakMap();
      return weakMap;
    });
    const result = globalSingleton1.set(getOptions, []);
    getOptions.emit("flushLogs");
    getOptions.sendEnvelope(logEnvelope);
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _INTERNAL_captureLog = function _INTERNAL_captureLog(attributes, scope) {
  let currentScope = scope;
  if (scope === undefined) {
    let obj1 = _mod713;
    currentScope = obj1.getCurrentScope();
  }
  let tmp3 = arg2;
  if (arg2 === undefined) {
    tmp3 = _INTERNAL_captureSerializedLog;
  }
  let beforeSendLog;
  let obj;
  let client;
  if (currentScope != null) {
    client = currentScope.getClient();
  }
  if (client == null) {
    let obj2 = _mod713;
    client = obj2.getClient();
  }
  if (client) {
    const options = client.getOptions();
    ({ release, environment, enableLogs } = options);
    beforeSendLog = options.beforeSendLog;
    if (tmp11) {
      let tmp12Result = tmp12(746);
      const tmp17 = _slicedToArray(tmp12Result._getTraceInfoFromScope(client, currentScope), 2)[1];
      obj = {};
      const merged = Object.assign(attributes.attributes);
      tmp12Result = tmp12(736);
      const combinedScopeData = tmp12Result.getCombinedScopeData(tmp12(713).getIsolationScope(), currentScope);
      ({ id, email, username } = combinedScopeData.user);
      attributes = combinedScopeData.attributes;
      if (undefined === attributes) {
        attributes = {};
      }
      let tmp21 = !id;
      if (id) {
        tmp21 = obj["user.id"] && true;
        const tmp22 = obj["user.id"] && true;
      }
      if (!tmp21) {
        obj["user.id"] = id;
      }
      let tmp23 = !email;
      if (email) {
        tmp23 = obj["user.email"] && true;
        const tmp24 = obj["user.email"] && true;
      }
      if (!tmp23) {
        obj["user.email"] = email;
      }
      let tmp25 = !username;
      if (username) {
        tmp25 = obj["user.name"] && true;
        const tmp26 = obj["user.name"] && true;
      }
      if (!tmp25) {
        obj["user.name"] = username;
      }
      let tmp27 = !release;
      if (release) {
        tmp27 = obj["sentry.release"] && false;
        const tmp28 = obj["sentry.release"] && false;
      }
      if (!tmp27) {
        obj["sentry.release"] = release;
      }
      let tmp29 = !environment;
      if (environment) {
        tmp29 = obj["sentry.environment"] && false;
        const tmp30 = obj["sentry.environment"] && false;
      }
      if (!tmp29) {
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
      let tmp32 = !name;
      if (name) {
        tmp32 = obj["sentry.sdk.name"] && false;
        const tmp33 = obj["sentry.sdk.name"] && false;
      }
      if (!tmp32) {
        obj["sentry.sdk.name"] = name;
      }
      let tmp34 = !version;
      if (version) {
        tmp34 = obj["sentry.sdk.version"] && false;
        const tmp35 = obj["sentry.sdk.version"] && false;
      }
      if (!tmp34) {
        obj["sentry.sdk.version"] = version;
      }
      const integrationByName = client.getIntegrationByName("Replay");
      let replayId;
      if (integrationByName != null) {
        replayId = integrationByName.getReplayId(true);
      }
      let tmp37 = !replayId;
      if (replayId) {
        tmp37 = obj["sentry.replay_id"] && false;
        const tmp38 = obj["sentry.replay_id"] && false;
      }
      if (!tmp37) {
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
        if (!tmp40) {
          obj["sentry._internal.replay_is_buffering"] = true;
        }
        tmp40 = obj["sentry._internal.replay_is_buffering"] && false;
      }
      const message = attributes.message;
      const tmp12Result1 = tmp12(713);
      if (tmp12Result2.isParameterizedString(message)) {
        ({ __sentry_template_values__, __sentry_template_string__ } = message);
        if (undefined === __sentry_template_values__) {
          __sentry_template_values__ = [];
        }
        let length;
        if (__sentry_template_values__ != null) {
          length = __sentry_template_values__.length;
        }
        if (length) {
          obj["sentry.message.template"] = __sentry_template_string__;
        }
        const item = __sentry_template_values__.forEach((item, index) => {
          obj["sentry.message.parameter." + index] = item;
        });
      }
      tmp12Result2 = tmp12(692);
      const _getSpanForScopeResult = tmp12(709)._getSpanForScope(currentScope);
      let spanId;
      if (_getSpanForScopeResult != null) {
        spanId = _getSpanForScopeResult.spanContext().spanId;
      }
      let tmp44 = !spanId;
      if (spanId) {
        tmp44 = obj["sentry.trace.parent_span_id"] && false;
        const tmp45 = obj["sentry.trace.parent_span_id"] && false;
      }
      if (!tmp44) {
        obj["sentry.trace.parent_span_id"] = spanId;
      }
      obj = {};
      const merged1 = Object.assign(attributes);
      obj.attributes = obj;
      client.emit("beforeCaptureLog", obj);
      if (beforeSendLog) {
        obj = tmp12(689).consoleSandbox(() => beforeSendLog(obj));
        const tmp12Result4 = tmp12(689);
      }
      if (obj) {
        ({ level, attributes, message: message2 } = obj);
        if (undefined === attributes) {
          attributes = {};
        }
        let severityNumber = obj.severityNumber;
        obj1 = {
          timestamp: tmp12(703).timestampInSeconds(),
          level,
          body: message2,
          trace_id: null,
          severity_number: null,
          attributes: null,
        };
        let trace_id;
        if (tmp17 != null) {
          trace_id = tmp17.trace_id;
        }
        obj1.trace_id = trace_id;
        if (severityNumber == null) {
          severityNumber = tmp12(747).SEVERITY_TEXT_TO_SEVERITY_NUMBER[level];
        }
        obj1.severity_number = severityNumber;
        obj2 = {};
        const tmp12Result5 = tmp12(703);
        const merged2 = Object.assign(tmp12(748).serializeAttributes(attributes));
        const tmp12Result6 = tmp12(748);
        const merged3 = Object.assign(tmp12(748).serializeAttributes(attributes, true));
        obj1.attributes = obj2;
        tmp3(client, obj1);
        client.emit("afterCaptureLog", obj);
        const tmp12Result7 = tmp12(748);
      } else {
        client.recordDroppedEvent("before_send", "log_item", 1);
        if (tmp12(688).DEBUG_BUILD) {
          const debug3 = tmp12(689).debug;
          debug3.warn("beforeSendLog returned null, log will not be captured.");
        }
      }
      const tmp12Result3 = tmp12(709);
    } else if (tmp12(688).DEBUG_BUILD) {
      const debug2 = tmp12(689).debug;
      debug2.warn("logging option not enabled, log will not be captured.");
    }
    tmp11 = undefined !== enableLogs && enableLogs;
  } else {
    if (_mod688.DEBUG_BUILD) {
      const debug = tmp7(689).debug;
      debug.warn("No client available to capture log.");
    }
    tmp7 = require;
  }
};
export { _INTERNAL_captureSerializedLog };
export { _INTERNAL_flushLogsBuffer };
export const _INTERNAL_getLogBuffer = function _INTERNAL_getLogBuffer(arg0) {
  const globalSingleton = _mod690.getGlobalSingleton("clientToLogBufferMap", () => {
    const weakMap = new WeakMap();
    return weakMap;
  });
  return globalSingleton.get(arg0);
};
