// _runtime/12856__isNativeReflectConstruct.js
import isErrorEvent from "12852_isErrorEvent.js";
import closure_2 from "metro/00032__slicedToArray.js";
import closure_3 from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";
import closure_4 from "metro/00093__possibleConstructorReturn.js";
import closure_5 from "00095__getPrototypeOf.js";
import closure_6 from "metro/00096__get.js";
import _inherits from "00098__inherits.js";
import __SENTRY_DEBUG__ from "metro/12796___SENTRY_DEBUG__.js";
import dateTimestampInSeconds from "12811_dateTimestampInSeconds.js";

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
class ServerRuntimeClient {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, ServerRuntimeClient);
    obj = require("errorCallback");
    result = obj.registerSpanErrorInstrumentation();
    items = [];
    items[0] = global;
    tmp3 = closure_5;
    obj2 = closure_5(ServerRuntimeClient);
    tmp4 = closure_4;
    if (_isNativeReflectConstruct()) {
      tmp6 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj2, items, tmp3(self).constructor);
    } else {
      constructResult = obj2.apply(self, items);
    }
    return tmp4(self, constructResult);
  }
}
_inherits(ServerRuntimeClient, isErrorEvent.BaseClient);
let items = [
  {
    key: "eventFromException",
    value: function eventFromException(arg0, arg1) {
      const result = ServerRuntimeClient(12857).eventFromUnknownInput(this, this._options.stackParser, arg0, arg1);
      result.level = "error";
      const obj = ServerRuntimeClient(12857);
      return ServerRuntimeClient(12821).resolvedSyncPromise(result);
    },
  },
  {
    key: "eventFromMessage",
    value: function eventFromMessage(arg0) {
      let str = arg1;
      if (arg1 === undefined) {
        str = "info";
      }
      const obj = ServerRuntimeClient(12821);
      return obj.resolvedSyncPromise(
        ServerRuntimeClient(12857).eventFromMessage(
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
    value: function captureException(arg0, arg1, arg2) {
      const self = this;
      if (this._options.autoSessionTracking) {
        if (self._sessionFlusher) {
          const isolationScope = ServerRuntimeClient(12824).getIsolationScope();
          const requestSession = isolationScope.getRequestSession();
          let tmp4 = requestSession;
          if (requestSession) {
            tmp4 = "ok" === requestSession.status;
          }
          if (tmp4) {
            requestSession.status = "errored";
          }
          const obj = ServerRuntimeClient(12824);
        }
      }
      let fn = callback4(callback3(self.prototype), "captureException", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0, arg1, arg2];
      return fn(items);
    },
  },
  {
    key: "captureEvent",
    value: function captureEvent(type) {
      const self = this;
      if (this._options.autoSessionTracking) {
        if (self._sessionFlusher) {
          if ("exception" === tmp) {
            if (type.exception) {
              if (type.exception.values) {
                if (type.exception.values.length > 0) {
                  const isolationScope = ServerRuntimeClient(12824).getIsolationScope();
                  const requestSession = isolationScope.getRequestSession();
                  let tmp5 = requestSession;
                  if (requestSession) {
                    tmp5 = "ok" === requestSession.status;
                  }
                  if (tmp5) {
                    requestSession.status = "errored";
                  }
                  const obj = ServerRuntimeClient(12824);
                }
              }
            }
          }
          tmp = type.type || "exception";
        }
      }
      let fn = callback4(callback3(self.prototype), "captureEvent", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [type, arg1, arg2];
      return fn(items);
    },
  },
  {
    key: "close",
    value: function close(arg0) {
      const self = this;
      if (this._sessionFlusher) {
        const _sessionFlusher = self._sessionFlusher;
        _sessionFlusher.close();
      }
      let fn = callback4(callback3(self.prototype), "close", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      const items = [arg0];
      return fn(items);
    },
  },
  {
    key: "initSessionFlusher",
    value: function initSessionFlusher() {
      const self = this;
      const release = this._options.release;
      if (release) {
        const obj = { release: null, environment: null };
        obj[0] = release;
        obj[1] = tmp;
        const sessionFlusher = new tmp2(12850).SessionFlusher(self, obj);
        self._sessionFlusher = sessionFlusher;
      } else if (tmp2(12825).DEBUG_BUILD) {
        const logger = tmp2(12797).logger;
        logger.warn("Cannot initialize an instance of SessionFlusher if no release is provided!");
      }
    },
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
            obj = {
              schedule: null,
              checkin_margin: null,
              max_runtime: null,
              timezone: null,
              failure_issue_threshold: null,
              recovery_threshold: null,
            };
            ({
              schedule: obj3[0],
              checkinMargin: obj3[1],
              maxRuntime: obj3[2],
              timezone: obj3[3],
              failureIssueThreshold: obj3[4],
              recoveryThreshold: obj3[5],
            } = arg1);
            obj.monitor_config = obj;
          }
          [tmp9, tmp10] = callback(self._getTraceInfoFromScope(arg2), 2);
          if (tmp10) {
            obj1 = { trace: null };
            obj1[0] = tmp10;
            obj.contexts = obj1;
          }
          const obj5 = ServerRuntimeClient(12858);
          const sdkMetadata = self.getSdkMetadata();
          const checkInEnvelope = obj5.createCheckInEnvelope(obj, tmp9, sdkMetadata, tunnel, self.getDsn());
          if (ServerRuntimeClient(12825).DEBUG_BUILD) {
            const logger2 = ServerRuntimeClient(12797).logger;
            logger2.info("Sending checkin:", checkInId.monitorSlug, checkInId.status);
          }
          self.sendEnvelope(checkInEnvelope);
          return checkInId;
        } else {
          if (ServerRuntimeClient(12825).DEBUG_BUILD) {
            const logger = ServerRuntimeClient(12797).logger;
            logger.warn("SDK not enabled, will not capture checkin.");
          }
          return checkInId;
        }
      }
      obj = ServerRuntimeClient(12808);
      checkInId = obj.uuid4();
    },
  },
  {
    key: "_captureRequestSession",
    value: function _captureRequestSession() {
      if (this._sessionFlusher) {
        const _sessionFlusher = this._sessionFlusher;
        const result = _sessionFlusher.incrementSessionStatusCount();
      } else {
        if (ServerRuntimeClient(12825).DEBUG_BUILD) {
          const logger = tmp(12797).logger;
          logger.warn("Discarded request mode session because autoSessionTracking option was disabled");
        }
        tmp = ServerRuntimeClient;
      }
    },
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
        obj.runtime = platform.contexts || {}.runtime || self._options.runtime;
        platform.contexts = obj;
        const tmp3 = platform.contexts || {};
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
    },
  },
  {
    key: "_getTraceInfoFromScope",
    value: function _getTraceInfoFromScope(arg0) {
      if (arg0) {
        const _getSpanForScopeResult = ServerRuntimeClient(12819)._getSpanForScope(arg0);
        if (_getSpanForScopeResult) {
          let tmpResult = tmp(12802);
          let spanToTraceContextResult = tmpResult.spanToTraceContext(_getSpanForScopeResult);
        } else {
          tmpResult = tmp(12824);
          spanToTraceContextResult = tmpResult.getTraceContextFromScope(arg0);
        }
        const tmpResult1 = ServerRuntimeClient(12833);
        if (_getSpanForScopeResult) {
          let dynamicSamplingContextFromSpan = tmpResult1.getDynamicSamplingContextFromSpan(_getSpanForScopeResult);
        } else {
          const self = this;
          dynamicSamplingContextFromSpan = tmpResult1.getDynamicSamplingContextFromScope(this, arg0);
        }
        const items = [dynamicSamplingContextFromSpan, spanToTraceContextResult];
        return items;
      } else {
        const items1 = [undefined, undefined];
        return items1;
      }
    },
  },
];

export const ServerRuntimeClient = _createClass(ServerRuntimeClient, items);
