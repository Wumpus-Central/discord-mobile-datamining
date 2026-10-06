// === Module 756: _INTERNAL_captureLog ===

// Module 756 (_INTERNAL_captureLog)
import _mod699 from "module_699" /* 699 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 700 */;
import _mod701 from "module_701" /* 701 */;
import _mod703 from "module_703" /* 703 */;
import browserPerformanceTimeOrigin from "browserPerformanceTimeOrigin" /* 714 */;
import _getSpanForScope from "_getSpanForScope" /* 720 */;
import _mod724 from "module_724" /* 724 */;
import applyScopeDataToEvent from "applyScopeDataToEvent" /* 747 */;
import _getTraceInfoFromScope from "_getTraceInfoFromScope" /* 757 */;
import SEVERITY_TEXT_TO_SEVERITY_NUMBER from "SEVERITY_TEXT_TO_SEVERITY_NUMBER" /* 758 */;
import _slicedToArray2 from "_slicedToArray" /* 759 */;
import _mod760 from "module_760" /* 760 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

const f82044 = () => {
  const weakMap = new WeakMap();
  return weakMap;
};
function _INTERNAL_captureSerializedLog(getOptions, arg1) {
  const obj = _mod701;
  const globalSingleton = obj.getGlobalSingleton("clientToLogBufferMap", f82044);
  const obj3 = _mod701;
  const globalSingleton1 = obj3.getGlobalSingleton("clientToLogBufferMap", f82044);
  const value = globalSingleton1.get(getOptions);
  if (undefined === value) {
    const items = [arg1];
    const result = globalSingleton.set(getOptions, items);
  } else if (value.length >= 100) {
    _INTERNAL_flushLogsBuffer(getOptions, value);
    const items1 = [arg1];
    const result1 = globalSingleton.set(getOptions, items1);
  } else {
    const items2 = [];
    items2[HermesBuiltin.arraySpread(items2, value, 0)] = arg1;
    const result2 = globalSingleton.set(getOptions, items2);
  }
}
function _INTERNAL_flushLogsBuffer(getOptions, value) {
  let _metadata;
  let tunnel;
  let items = value;
  if (value == null) {
    const obj = _mod701;
    const globalSingleton = obj.getGlobalSingleton("clientToLogBufferMap", f82044);
    items = globalSingleton.get(getOptions);
  }
  if (items == null) {
    items = [];
  }
  if (0 !== items.length) {
    const options = getOptions.getOptions();
    ({ _metadata, tunnel } = options);
    const obj3 = _mod760;
    const logEnvelope = obj3.createLogEnvelope(items, _metadata, tunnel, getOptions.getDsn());
    const obj4 = _mod701;
    const globalSingleton1 = obj4.getGlobalSingleton("clientToLogBufferMap", f82044);
    const result = globalSingleton1.set(getOptions, []);
    getOptions.emit("flushLogs");
    getOptions.sendEnvelope(logEnvelope);
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const _INTERNAL_captureLog = function _INTERNAL_captureLog(attributes) {
  let __sentry_template_string__;
  let __sentry_template_values__;
  let email;
  let enableLogs;
  let environment;
  let id;
  let level;
  let message2;
  let name;
  let obj6;
  let release;
  let tmp12Result14;
  let trace_id;
  let username;
  let version;
  let currentScope = scope;
  if (scope === undefined) {
    const obj2 = _mod724;
    currentScope = obj2.getCurrentScope();
  }
  let tmp3 = arg2;
  if (arg2 === undefined) {
    tmp3 = _INTERNAL_captureSerializedLog;
  }
  let beforeSendLog;
  let obj;
  let obj4;
  let client;
  if (currentScope != null) {
    client = currentScope.getClient();
  }
  if (client == null) {
    const obj3 = _mod724;
    client = obj3.getClient();
  }
  if (client) {
    const options = client.getOptions();
    ({ release, environment, enableLogs } = options);
    beforeSendLog = options.beforeSendLog;
    const tmp11 = undefined !== enableLogs && enableLogs;
    if (tmp11) {
      const tmp12Result = _getTraceInfoFromScope;
      const tmp17 = _slicedToArray(tmp12Result._getTraceInfoFromScope(client, currentScope), 2)[1];
      obj = {};
      const merged = Object.assign(attributes.attributes);
      const getCombinedScopeData = applyScopeDataToEvent.getCombinedScopeData;
      applyScopeDataToEvent;
      const tmp12Result10 = _mod724;
      const combinedScopeData = getCombinedScopeData(tmp12Result10.getIsolationScope(), currentScope);
      ({ id, email, username } = combinedScopeData.user);
      let attributes1 = combinedScopeData.attributes;
      if (undefined === attributes1) {
        attributes1 = {};
      }
      let tmp22 = !id;
      if (id) {
        tmp22 = obj["user.id"] && true;
      }
      if (!tmp22) {
        obj["user.id"] = id;
      }
      let tmp24 = !email;
      if (email) {
        tmp24 = obj["user.email"] && true;
      }
      if (!tmp24) {
        obj["user.email"] = email;
      }
      let tmp26 = !username;
      if (username) {
        tmp26 = obj["user.name"] && true;
      }
      if (!tmp26) {
        obj["user.name"] = username;
      }
      let tmp28 = !release;
      if (release) {
        tmp28 = obj["sentry.release"] && false;
      }
      if (!tmp28) {
        obj["sentry.release"] = release;
      }
      let tmp30 = !environment;
      if (environment) {
        tmp30 = obj["sentry.environment"] && false;
      }
      if (!tmp30) {
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
      let tmp33 = !name;
      if (name) {
        tmp33 = obj["sentry.sdk.name"] && false;
      }
      if (!tmp33) {
        obj["sentry.sdk.name"] = name;
      }
      let tmp35 = !version;
      if (version) {
        tmp35 = obj["sentry.sdk.version"] && false;
      }
      if (!tmp35) {
        obj["sentry.sdk.version"] = version;
      }
      const integrationByName = client.getIntegrationByName("Replay");
      let replayId;
      if (integrationByName != null) {
        replayId = integrationByName.getReplayId(true);
      }
      let tmp38 = !replayId;
      if (replayId) {
        tmp38 = obj["sentry.replay_id"] && false;
      }
      if (!tmp38) {
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
        const tmp41 = obj["sentry._internal.replay_is_buffering"] && false;
        if (!tmp41) {
          obj["sentry._internal.replay_is_buffering"] = true;
        }
      }
      const message = attributes.message;
      const tmp12Result11 = _mod703;
      if (tmp12Result11.isParameterizedString(message)) {
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
      const tmp12Result12 = _getSpanForScope;
      const _getSpanForScopeResult = tmp12Result12._getSpanForScope(currentScope);
      let spanId;
      if (_getSpanForScopeResult != null) {
        spanId = _getSpanForScopeResult.spanContext().spanId;
      }
      let tmp45 = !spanId;
      if (spanId) {
        tmp45 = obj["sentry.trace.parent_span_id"] && false;
      }
      if (!tmp45) {
        obj["sentry.trace.parent_span_id"] = spanId;
      }
      obj4 = { attributes: obj };
      const merged1 = Object.assign(attributes);
      client.emit("beforeCaptureLog", obj4);
      if (beforeSendLog) {
        const tmp12Result13 = CONSOLE_LEVELS;
        obj4 = tmp12Result13.consoleSandbox(() => beforeSendLog(obj4));
      }
      if (obj4) {
        ({ level, attributes, message: message2 } = obj4);
        if (undefined === attributes) {
          attributes = {};
        }
        let severityNumber = obj4.severityNumber;
        const obj5 = { timestamp: tmp12Result14.timestampInSeconds(), level, body: message2, trace_id, severity_number: severityNumber, attributes: obj6 };
        trace_id = undefined;
        tmp12Result14 = browserPerformanceTimeOrigin;
        if (tmp17 != null) {
          trace_id = tmp17.trace_id;
        }
        if (severityNumber == null) {
          severityNumber = SEVERITY_TEXT_TO_SEVERITY_NUMBER.SEVERITY_TEXT_TO_SEVERITY_NUMBER[level];
        }
        obj6 = {};
        const tmp12Result15 = _slicedToArray2;
        const merged2 = Object.assign(tmp12Result15.serializeAttributes(attributes1));
        const tmp12Result16 = _slicedToArray2;
        const merged3 = Object.assign(tmp12Result16.serializeAttributes(attributes, true));
        tmp3(client, obj5);
        client.emit("afterCaptureLog", obj4);
      } else {
        client.recordDroppedEvent("before_send", "log_item", 1);
        if (_mod699.DEBUG_BUILD) {
          const debug3 = CONSOLE_LEVELS.debug;
          debug3.warn("beforeSendLog returned null, log will not be captured.");
        }
      }
    } else if (_mod699.DEBUG_BUILD) {
      const debug2 = CONSOLE_LEVELS.debug;
      debug2.warn("logging option not enabled, log will not be captured.");
    }
  } else if (_mod699.DEBUG_BUILD) {
    const debug = CONSOLE_LEVELS.debug;
    debug.warn("No client available to capture log.");
  }
};
export { _INTERNAL_captureSerializedLog };
export { _INTERNAL_flushLogsBuffer };
export const _INTERNAL_getLogBuffer = function _INTERNAL_getLogBuffer(arg0) {
  const obj = _mod701;
  const globalSingleton = obj.getGlobalSingleton("clientToLogBufferMap", f82044);
  return globalSingleton.get(arg0);
};