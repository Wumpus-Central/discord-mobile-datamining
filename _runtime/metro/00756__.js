// _runtime/metro/00756__.js
import _possibleConstructorReturn from "00093__possibleConstructorReturn.js";
import _mod741 from "00741__.js";
import _slicedToArray from "00032__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

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
  } catch (err) {}
}
_possibleConstructorReturn;
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
class ServerRuntimeClient {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, ServerRuntimeClient);
    obj = closure_0(closure_1[7]);
    result = obj.registerSpanErrorInstrumentation();
    obj2 = closure_0(closure_1[8]);
    result1 = obj2.addUserAgentToTransportHeaders(global);
    items = [];
    items[0] = global;
    tmp4 = hasOwnProperty;
    obj3 = hasOwnProperty(ServerRuntimeClient);
    tmp5 = closure_4;
    if (closure_7()) {
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
_inherits(ServerRuntimeClient, _mod741.Client);
const entry = {
  key: "eventFromException",
  value: function eventFromException(arg0, arg1) {
    const result = ServerRuntimeClient(758).eventFromUnknownInput(this, this._options.stackParser, arg0, arg1);
    result.level = "error";
    const obj = ServerRuntimeClient(758);
    return ServerRuntimeClient(738).resolvedSyncPromise(result);
  },
};
let items = [
  entry,
  {
    key: "eventFromMessage",
    value: function eventFromMessage(arg0) {
      let str = arg1;
      if (arg1 === undefined) {
        str = "info";
      }
      const obj = ServerRuntimeClient(738);
      return obj.resolvedSyncPromise(
        ServerRuntimeClient(758).eventFromMessage(
          this._options.stackParser,
          arg0,
          str,
          arg2,
          this._options.attachStacktrace,
        ),
      );
    },
  },
  {
    key: "captureException",
    value: function captureException(arg0, mechanism, arg2) {
      const isolationScope = ServerRuntimeClient(713).getIsolationScope();
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
      let fn = metroRequire(hasOwnProperty(ServerRuntimeClient.prototype), "captureException", this);
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
        const isolationScope = ServerRuntimeClient(713).getIsolationScope();
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
        const obj = ServerRuntimeClient(713);
      }
      const self = this;
      let fn = metroRequire(hasOwnProperty(ServerRuntimeClient.prototype), "captureEvent", this);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [type, mechanism, arg2];
      return fn(items);
    },
  },
  {
    key: "captureCheckIn",
    value: function captureCheckIn(checkInId, arg1, arg2) {
      if ("checkInId" in checkInId) {
        if (checkInId.checkInId) {
          checkInId = checkInId.checkInId;
        }
        const self = this;
        if (this._isEnabled()) {
          const options = self.getOptions();
          const tunnel = options.tunnel;
          let obj = { check_in_id: checkInId, monitor_slug: null, status: null, release: null, environment: null };
          ({ monitorSlug: obj2.monitor_slug, status: obj2.status } = checkInId);
          ({ release: obj2.release, environment: obj2.environment } = options);
          if ("duration" in checkInId) {
            obj.duration = checkInId.duration;
          }
          if (arg1) {
            obj = {
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
            obj.monitor_config = obj;
          }
          const obj4 = ServerRuntimeClient(746);
          [tmp11, tmp12] = _slicedToArray(ServerRuntimeClient(746)._getTraceInfoFromScope(self, arg2), 2);
          if (tmp12) {
            const obj1 = { trace: tmp12 };
            obj.contexts = obj1;
          }
          const tmp7Result = ServerRuntimeClient(759);
          const sdkMetadata = self.getSdkMetadata();
          const checkInEnvelope = tmp7Result.createCheckInEnvelope(obj, tmp11, sdkMetadata, tunnel, self.getDsn());
          if (ServerRuntimeClient(688).DEBUG_BUILD) {
            const debug2 = tmp7(689).debug;
            debug2.log("Sending checkin:", checkInId.monitorSlug, checkInId.status);
          }
          self.sendEnvelope(checkInEnvelope);
          return checkInId;
        } else {
          if (ServerRuntimeClient(688).DEBUG_BUILD) {
            const debug = ServerRuntimeClient(689).debug;
            debug.warn("SDK not enabled, will not capture check-in.");
          }
          return checkInId;
        }
      }
      obj = ServerRuntimeClient(695);
      checkInId = obj.uuid4();
    },
  },
  {
    key: "_prepareEvent",
    value: function _prepareEvent(platform, arg1, arg2, arg3) {
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
      let fn = metroRequire(hasOwnProperty(ServerRuntimeClient.prototype), "_prepareEvent", self);
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

export const ServerRuntimeClient = _createClass(ServerRuntimeClient, items);
