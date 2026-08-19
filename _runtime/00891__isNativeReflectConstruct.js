// === Module 891: _isNativeReflectConstruct ===

// Module 891 (_isNativeReflectConstruct)
import isErrorEvent from "isErrorEvent" /* 876 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import closure_4 from "_possibleConstructorReturn" /* 93 */;
import closure_5 from "_getPrototypeOf" /* 95 */;
import closure_6 from "_get" /* 96 */;
import _inherits from "_inherits" /* 98 */;

const ServerRuntimeClient = require;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class ServerRuntimeClient {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, ServerRuntimeClient);
    obj = require("registerSpanErrorInstrumentation");
    result = obj.registerSpanErrorInstrumentation();
    obj2 = require("addUserAgentToTransportHeaders");
    result1 = obj2.addUserAgentToTransportHeaders(global);
    items = [];
    items[0] = global;
    tmp4 = closure_5;
    obj3 = closure_5(ServerRuntimeClient);
    tmp5 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp7 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj3, items, tmp4(self).constructor);
    } else {
      constructResult = obj3.apply(self, items);
    }
    tmp5Result = tmp5(self, constructResult);
    result2 = tmp5Result._setUpMetricsProcessing();
    return tmp5Result;
  }
}
_inherits(ServerRuntimeClient, isErrorEvent.Client);
let items = [
  {
    key: "eventFromException",
    value: function eventFromException(arg0, arg1) {
      const result = ServerRuntimeClient(893).eventFromUnknownInput(this, this._options.stackParser, arg0, arg1);
      result.level = "error";
      const obj = ServerRuntimeClient(893);
      return ServerRuntimeClient(873).resolvedSyncPromise(result);
    }
  },
  {
    key: "eventFromMessage",
    value: function eventFromMessage(arg0) {
      let str = arg1;
      if (arg1 === undefined) {
        str = "info";
      }
      const obj = ServerRuntimeClient(873);
      return obj.resolvedSyncPromise(ServerRuntimeClient(893).eventFromMessage(this._options.stackParser, arg0, str, arg2, this._options.attachStacktrace));
    }
  },
  {
    key: "captureException",
    value: function captureException(arg0, mechanism) {
      const isolationScope = ServerRuntimeClient(848).getIsolationScope();
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
      let fn = callback4(callback3(self.prototype), "captureException", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, mechanism, arg2];
      return fn(items);
    }
  },
  {
    key: "captureEvent",
    value: function captureEvent(type, mechanism) {
      type = type.type;
      let tmp = !type;
      if (!type) {
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
        const isolationScope = ServerRuntimeClient(848).getIsolationScope();
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
        const obj = ServerRuntimeClient(848);
      }
      const self = this;
      let fn = callback4(callback3(self.prototype), "captureEvent", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [type, mechanism, arg2];
      return fn(items);
    }
  },
  {
    key: "captureCheckIn",
    value: function captureCheckIn(checkInId) {
      if ("checkInId" in checkInId) {
        if (checkInId.checkInId) {
          checkInId = checkInId.checkInId;
        }
        const self = this;
        if (this._isEnabled()) {
          const options = self.getOptions();
          const tunnel = options.tunnel;
          let obj = { check_in_id: null, monitor_slug: null, status: null, release: null, environment: null };
          obj[0] = checkInId;
          ({ monitorSlug: obj2[1], status: obj2[2] } = checkInId);
          ({ release: obj2[3], environment: obj2[4] } = options);
          if ("duration" in checkInId) {
            obj.duration = checkInId.duration;
          }
          if (arg1) {
            obj = { schedule: null, checkin_margin: null, max_runtime: null, timezone: null, failure_issue_threshold: null, recovery_threshold: null };
            ({ schedule: obj3[0], checkinMargin: obj3[1], maxRuntime: obj3[2], timezone: obj3[3], failureIssueThreshold: obj3[4], recoveryThreshold: obj3[5] } = arg1);
            obj.monitor_config = obj;
          }
          const obj4 = ServerRuntimeClient(881);
          [tmp11, tmp12] = callback(ServerRuntimeClient(881)._getTraceInfoFromScope(self, arg2), 2);
          if (tmp12) {
            obj1 = { trace: null };
            obj1[0] = tmp12;
            obj.contexts = obj1;
          }
          const tmp7Result = ServerRuntimeClient(894);
          const sdkMetadata = self.getSdkMetadata();
          const checkInEnvelope = tmp7Result.createCheckInEnvelope(obj, tmp11, sdkMetadata, tunnel, self.getDsn());
          if (ServerRuntimeClient(823).DEBUG_BUILD) {
            const debug2 = tmp7(824).debug;
            debug2.log("Sending checkin:", checkInId.monitorSlug, checkInId.status);
          }
          self.sendEnvelope(checkInEnvelope);
          return checkInId;
        } else {
          if (ServerRuntimeClient(823).DEBUG_BUILD) {
            const debug = ServerRuntimeClient(824).debug;
            debug.warn("SDK not enabled, will not capture check-in.");
          }
          return checkInId;
        }
      }
      obj = ServerRuntimeClient(830);
      checkInId = obj.uuid4();
    }
  },
  {
    key: "_prepareEvent",
    value: function _prepareEvent(platform) {
      const self = this;
      if (this._options.platform) {
        platform.platform = platform.platform || self._options.platform;
      }
      if (self._options.runtime) {
        const obj = {};
        const merged = Object.assign(platform.contexts);
        const contexts = platform.contexts;
        let runtime;
        if (contexts != null) {
          runtime = contexts.runtime;
        }
        if (!runtime) {
          runtime = self._options.runtime;
        }
        obj.runtime = runtime;
        platform.contexts = obj;
      }
      if (self._options.serverName) {
        platform.server_name = platform.server_name || self._options.serverName;
      }
      let fn = callback4(callback3(self.prototype), "_prepareEvent", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [platform, arg1, arg2, arg3];
      return fn(items);
    }
  },
  {
    key: "_setUpMetricsProcessing",
    value: function _setUpMetricsProcessing() {
      const self = this;
      this.on("processMetric", (attributes) => {
        if (self._options.serverName) {
          const obj = { "server.address": null };
          obj[0] = tmp._options.serverName;
          const merged = Object.assign(attributes.attributes);
          attributes.attributes = obj;
        }
      });
    }
  }
];

export const ServerRuntimeClient = _createClass(ServerRuntimeClient, items);