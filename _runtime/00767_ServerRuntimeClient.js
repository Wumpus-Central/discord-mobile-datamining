// _runtime/00767_ServerRuntimeClient.js
import _mod694 from "metro/00694__.js";
import _mod699 from "metro/00699__.js";
import CONSOLE_LEVELS from "00700_CONSOLE_LEVELS.js";
import uuid4 from "00706_uuid4.js";
import _mod724 from "metro/00724__.js";
import SyncPromise from "00749_SyncPromise.js";
import Client from "00752_Client.js";
import _getTraceInfoFromScope from "00757__getTraceInfoFromScope.js";
import _mod768 from "metro/00768__.js";
import _enhanceErrorWithSentryInfo from "00769__enhanceErrorWithSentryInfo.js";
import _mod770 from "metro/00770__.js";
import _slicedToArray from "metro/00032__slicedToArray.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import _possibleConstructorReturn from "metro/00093__possibleConstructorReturn.js";
import _getPrototypeOf from "00095__getPrototypeOf.js";
import _get from "metro/00096__get.js";
import _inherits from "00098__inherits.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class ServerRuntimeClient {
  constructor(_metadata) {
    let constructResult;
    const self = this;
    _classCallCheck(this, ServerRuntimeClient);
    const obj = _mod694;
    const result = obj.registerSpanErrorInstrumentation();
    const obj2 = _mod768;
    const result1 = obj2.addUserAgentToTransportHeaders(_metadata);
    const items = [_metadata];
    const obj3 = _getPrototypeOf(ServerRuntimeClient);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj3, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj3.apply(self, items);
    }
    const tmp5Result = _possibleConstructorReturn(self, constructResult);
    const result2 = tmp5Result._setUpMetricsProcessing();
    return tmp5Result;
  }
}
_inherits(ServerRuntimeClient, Client.Client);
const entry = {
  key: "eventFromException",
  value: function eventFromException(name, data) {
    const obj = _enhanceErrorWithSentryInfo;
    const result = obj.eventFromUnknownInput(this, this._options.stackParser, name, data);
    result.level = "error";
    const obj2 = SyncPromise;
    return obj2.resolvedSyncPromise(result);
  },
};
let items = [
  entry,
  {
    key: "eventFromMessage",
    value: function eventFromMessage(value) {
      let str = info;
      if (info === undefined) {
        str = "info";
      }
      const resolvedSyncPromise = SyncPromise.resolvedSyncPromise;
      const obj = _enhanceErrorWithSentryInfo;
      return resolvedSyncPromise(
        obj.eventFromMessage(this._options.stackParser, value, str, event_id, this._options.attachStacktrace),
      );
    },
  },
  {
    key: "captureException",
    value: function captureException(arg0, mechanism, arg2) {
      const obj = _mod724;
      const isolationScope = obj.getIsolationScope();
      const requestSession = isolationScope.getScopeData().sdkProcessingMetadata.requestSession;
      if (requestSession) {
        let flag;
        if (mechanism != null) {
          mechanism = mechanism.mechanism;
          if (mechanism != null) {
            flag = mechanism.handled;
          }
        }
        if (flag == null) {
          flag = true;
        }
        if (flag) {
          if ("crashed" !== requestSession.status) {
            requestSession.status = "errored";
          }
        }
        if (!flag) {
          requestSession.status = "crashed";
        }
      }
      const self = this;
      let fn = _get(_getPrototypeOf(ServerRuntimeClient.prototype), "captureException", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, mechanism, arg2];
      return fn(items);
    },
  },
  {
    key: "captureEvent",
    value: function captureEvent(type, mechanism, arg2) {
      let tmp = !type.type;
      if (tmp) {
        const exception = type.exception;
        let values;
        if (exception != null) {
          values = exception.values;
        }
        tmp = values;
      }
      if (tmp) {
        tmp = type.exception.values.length > 0;
      }
      if (tmp) {
        const obj = _mod724;
        const isolationScope = obj.getIsolationScope();
        const requestSession = isolationScope.getScopeData().sdkProcessingMetadata.requestSession;
        if (requestSession) {
          let flag;
          if (mechanism != null) {
            mechanism = mechanism.mechanism;
            if (mechanism != null) {
              flag = mechanism.handled;
            }
          }
          if (flag == null) {
            flag = true;
          }
          if (flag) {
            if ("crashed" !== requestSession.status) {
              requestSession.status = "errored";
            }
          }
          if (!flag) {
            requestSession.status = "crashed";
          }
        }
      }
      const self = this;
      let fn = _get(_getPrototypeOf(ServerRuntimeClient.prototype), "captureEvent", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [type, mechanism, arg2];
      return fn(items);
    },
  },
  {
    key: "captureCheckIn",
    value: function captureCheckIn(checkInId, arg1, currentScope) {
      let tmp11;
      let tmp12;
      if ("checkInId" in checkInId) {
        if (checkInId.checkInId) {
          checkInId = checkInId.checkInId;
        }
        const self = this;
        if (this._isEnabled()) {
          const options = self.getOptions();
          const tunnel = options.tunnel;
          const obj5 = { check_in_id: checkInId, monitor_slug: null, status: null, release: null, environment: null };
          ({ monitorSlug: obj2.monitor_slug, status: obj2.status } = checkInId);
          ({ release: obj2.release, environment: obj2.environment } = options);
          if ("duration" in checkInId) {
            obj5.duration = checkInId.duration;
          }
          const tmp5 = arg1;
          if (tmp5) {
            const obj8 = {
              schedule: null,
              checkin_margin: null,
              max_runtime: null,
              timezone: null,
              failure_issue_threshold: null,
              recovery_threshold: null,
            };
            ({
              schedule: obj3.schedule,
              checkinMargin: obj3.checkin_margin,
              maxRuntime: obj3.max_runtime,
              timezone: obj3.timezone,
              failureIssueThreshold: obj3.failure_issue_threshold,
              recoveryThreshold: obj3.recovery_threshold,
            } = arg1);
            obj5.monitor_config = obj8;
          }
          const obj4 = _getTraceInfoFromScope;
          [tmp11, tmp12] = obj4._getTraceInfoFromScope(self, currentScope);
          _slicedToArray(obj4._getTraceInfoFromScope(self, currentScope), 2);
          if (tmp12) {
            const obj9 = { trace: tmp12 };
            obj5.contexts = obj9;
          }
          const createCheckInEnvelope = _mod770.createCheckInEnvelope;
          const tmp7Result = _mod770;
          const sdkMetadata = self.getSdkMetadata();
          const checkInEnvelope = createCheckInEnvelope(obj5, tmp11, sdkMetadata, tunnel, self.getDsn());
          if (_mod699.DEBUG_BUILD) {
            const debug2 = CONSOLE_LEVELS.debug;
            debug2.log("Sending checkin:", checkInId.monitorSlug, checkInId.status);
          }
          self.sendEnvelope(checkInEnvelope);
          return checkInId;
        } else {
          if (_mod699.DEBUG_BUILD) {
            const debug = CONSOLE_LEVELS.debug;
            debug.warn("SDK not enabled, will not capture check-in.");
          }
          return checkInId;
        }
      }
      const obj = uuid4;
      checkInId = obj.uuid4();
    },
  },
  {
    key: "_prepareEvent",
    value: function _prepareEvent(platform, arg1, arg2, arg3) {
      let runtime;
      const self = this;
      if (this._options.platform) {
        platform.platform = platform.platform || self._options.platform;
      }
      if (self._options.runtime) {
        const obj = { runtime };
        const merged = Object.assign(platform.contexts);
        const contexts = platform.contexts;
        runtime = undefined;
        if (contexts != null) {
          runtime = contexts.runtime;
        }
        if (!runtime) {
          runtime = self._options.runtime;
        }
        platform.contexts = obj;
      }
      if (self._options.serverName) {
        platform.server_name = platform.server_name || self._options.serverName;
      }
      let fn = _get(_getPrototypeOf(ServerRuntimeClient.prototype), "_prepareEvent", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [platform, arg1, arg2, arg3];
      return fn(items);
    },
  },
  {
    key: "_setUpMetricsProcessing",
    value: function _setUpMetricsProcessing() {
      const self = this;
      this.on("processMetric", (attributes) => {
        if (self._options.serverName) {
          const obj = { "server.address": tmp._options.serverName };
          const merged = Object.assign(attributes.attributes);
          attributes.attributes = obj;
        }
      });
    },
  },
];
const ServerRuntimeClient_export = _createClass(ServerRuntimeClient, items);

export { ServerRuntimeClient_export as ServerRuntimeClient };
