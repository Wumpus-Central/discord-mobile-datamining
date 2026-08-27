// === Module 16903: handleAppStateUpdate ===

// Module 16903 (handleAppStateUpdate)
import timestampDefault from "timestamp" /* 3 */;
import setDefault from "set" /* 687 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 698 */;
import initializeDefault from "initialize" /* 5438 */;
import getDeviceMetadata from "getDeviceMetadata" /* 7153 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import ME from "ME" /* 676 */;

require = arg1;
({ AppStates: c4, AnalyticEvents: c5 } = ME);
let closure_6 = new timestampDefault("JSWatchdogManager");
const HALF_SECOND = setDefault.Millis.HALF_SECOND;
initializeDefault;
class JSWatchdogManager extends tmp4 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult._enabled = true;
    applyArgumentsResult._timeoutId = null;
    applyArgumentsResult._analyticsReportsRemaining = 3;
    applyArgumentsResult._cachedSession = null;
    applyArgumentsResult._lastSessionId = null;
    applyArgumentsResult._pingCompleted = true;
    applyArgumentsResult.actions = {
      APP_STATE_UPDATE(arg0) {
            applyArgumentsResult.handleAppStateUpdate(arg0);
          },
      CONNECTION_OPEN_SUPPLEMENTAL() {
            const result = applyArgumentsResult.handleConnectionOpenSupplemental();
          }
    };
    return applyArgumentsResult;
  }
}
const prototype = JSWatchdogManager.prototype;
prototype["handleAppStateUpdate"] = function handleAppStateUpdate(state) {
  const self = this;
  if (state.state === constants.ACTIVE) {
    self.startWatchdog();
  } else {
    self.stopWatchdog();
  }
};
prototype["handleConnectionOpenSupplemental"] = function handleConnectionOpenSupplemental() {
  const self = this;
  const timerId = setTimeout(() => {
    self.startWatchdog();
  }, 0);
};
prototype["ping"] = function ping() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const self = this;
  return callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let _lastSessionId = tmp4;
            c0 = tmp8;
            c0 = undefined;
            _lastSessionId = undefined;
            checkForStallReportResult._pingCompleted = false;
            c3 = 2;
            c4 = 3;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = checkForStallReportResult.getCurrentSessionId();
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          checkForStallReportResult._pingCompleted = true;
          throw dependencyMap;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            checkForStallReportResult(1208).captureException(dependencyMap);
            c3 = 0;
            checkForStallReportResult._pingCompleted = true;
            c5 = 3;
            const obj8 = checkForStallReportResult(1208);
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              checkForStallReportResult._pingCompleted = true;
              c5 = 3;
              const obj2 = { value: null, done: true };
              obj2[0] = arg1;
              return obj2;
            } else {
              closure_0 = arg1;
              if (null == closure_0) {
                if (checkForStallReportResult._enabled) {
                  const _setTimeout2 = setTimeout;
                  const timerId = setTimeout(() => _undefined.ping(), closure_1_7);
                  _lastSessionId._timeoutId = timerId;
                }
                c3 = 0;
                checkForStallReportResult._pingCompleted = true;
                c5 = 3;
                let obj3 = { value: null, done: true };
                obj3[0] = undefined;
                return obj3;
              } else {
                obj3 = checkForStallReportResult(16904);
                let pingResult;
                if (obj3 != null) {
                  const _Date = Date;
                  pingResult = obj3.ping(Date.now(), closure_0, closure_0, false);
                }
                c4 = 4;
                c5 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = pingResult;
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 !== 2) {
            if (arg1) {
              obj = checkForStallReportResult(16904);
              checkForStallReportResult = undefined;
              if (obj != null) {
                checkForStallReportResult = obj.checkForStallReport();
              }
              if (null != checkForStallReportResult) {
                if (_lastSessionId._lastSessionId !== closure_0) {
                  checkForStallReportResult._lastSessionId = c0;
                  checkForStallReportResult._analyticsReportsRemaining = 3;
                }
                checkForStallReportResult._analyticsReportsRemaining = +checkForStallReportResult._analyticsReportsRemaining - 1;
                if (+checkForStallReportResult._analyticsReportsRemaining > 0) {
                  checkForStallReportResult.reportStall(_lastSessionId, c0, false, checkForStallReportResult._analyticsReportsRemaining);
                }
                if (0 === checkForStallReportResult._analyticsReportsRemaining) {
                  checkForStallReportResult.stopWatchdog();
                  obj1 = checkForStallReportResult(16904);
                  if (obj1 != null) {
                    obj1.disable();
                  }
                }
              }
            }
            if (checkForStallReportResult._enabled) {
              const _setTimeout = setTimeout;
              _lastSessionId._timeoutId = setTimeout(() => _undefined.ping(), closure_1_7);
            }
            c3 = 1;
          }
          c3 = 0;
          checkForStallReportResult._pingCompleted = true;
          c5 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        }
      } catch (tmp84) {
        dependencyMap = tmp84;
        if (tmp5 === c3) {
          c5 = tmp3;
          throw tmp84;
        } else if (tmp2 === tmp86) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
prototype["startWatchdog"] = function startWatchdog() {
  const self = this;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = tmp2;
            closure_0 = 0;
            closure_0 = undefined;
            c1 = undefined;
            if (null == closure_1_0._timeoutId) {
              if (null != checkForStallReportResult(16904)) {
                dependencyMap = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_0.getCurrentSessionId();
                return obj1;
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          closure_0 = arg1;
          if (null != closure_0) {
            if (closure_0._lastSessionId !== closure_0) {
              closure_1_6.info("startWatchdog()");
              closure_0._enabled = true;
              if (closure_0._pingCompleted) {
                checkForStallReportResult = undefined;
                obj = checkForStallReportResult(16904);
                if (obj != null) {
                  checkForStallReportResult = obj.checkForStallReport();
                }
                if (null != checkForStallReportResult) {
                  closure_0.reportStall(checkForStallReportResult, closure_1_0, true, -1);
                }
              }
              closure_1_0.ping(true);
            }
          }
        }
        c3 = 3;
        const obj2 = { value: null, done: true };
        obj2[0] = arg1;
        return obj2;
      } catch (tmp32) {
        c3 = tmp;
        throw tmp32;
      }
    }
  })();
};
prototype["stopWatchdog"] = function stopWatchdog() {
  logger.info("stopWatchdog()");
  this._enabled = false;
  clearTimeout(this._timeoutId);
  this._timeoutId = null;
};
prototype["reportStall"] = function reportStall(c1, c0, is_previous, _analyticsReportsRemaining) {
  let obj = expandEventPropertiesDefault;
  obj = {};
  const merged = Object.assign(getDeviceMetadata.getDeviceMetadata());
  obj.version = 1;
  obj.stall_time = c1.stallTime;
  obj.is_previous = is_previous;
  obj.reports_remaining = _analyticsReportsRemaining;
  let sessionId = null;
  if (c1.sessionId !== c0) {
    sessionId = c1.sessionId;
  }
  obj.stall_session_id = sessionId;
  obj.trace = null;
  obj.track(constants2.APP_JS_STALLED, obj);
};
prototype["getCurrentSessionId"] = function getCurrentSessionId() {
  const self = this;
  return callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_0 = undefined;
            if (null != closure_1_0._cachedSession) {
              obj1 = closure_1_0(7150);
              if (!obj1.isSessionExpired(closure_1_0._cachedSession)) {
                const uuid = closure_1_0._cachedSession.uuid;
                c3 = 3;
              }
            }
            dependencyMap = 1;
            c3 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_0(7141).getSession();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          if (null != closure_0) {
            closure_0._cachedSession = closure_0;
          }
        }
        c3 = 3;
        return { value: null, done: true };
      } catch (tmp20) {
        c3 = tmp;
        throw tmp20;
      }
    }
  })();
};
const jSWatchdogManager = new JSWatchdogManager();
const tmp3 = new timestampDefault("JSWatchdogManager");
let result = require("set").fileFinishedImporting("modules/js_watchdog/native/JSWatchdogManager.android.tsx");

export default jSWatchdogManager;