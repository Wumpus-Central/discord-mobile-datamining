// discord_app/modules/js_watchdog/native/JSWatchdogManager.android.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import DurationsDefault from "../../../utils/Durations.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import TTIAnalyticsUtils from "../../tti_analytics/native/TTIAnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
const Constants = fn(1074);
({ AppStates: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const logger = new LoggerDefault("JSWatchdogManager");
const HALF_SECOND = DurationsDefault.Millis.HALF_SECOND;
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
      },
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
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp8;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            self._pingCompleted = false;
            c3 = 2;
            c4 = 3;
            c5 = 1;
            let obj1 = { value: self.getCurrentSessionId(), done: false };
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_129_1._pingCompleted = true;
          throw tmp84;
        } else {
          if (2 === tmp8) {
            c3 = 1;
            closure_128_2 = tmp84;
            tmp4(tmp84[6]).captureException(closure_128_2);
            c3 = 0;
            closure_129_1._pingCompleted = true;
            c5 = 3;
            const obj8 = tmp4(tmp84[6]);
          } else if (3 === tmp8) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_1._pingCompleted = true;
              c5 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              closure_128_0 = value;
              if (null == closure_128_0) {
                if (closure_129_1._enabled) {
                  const _setTimeout2 = setTimeout;
                  const timerId = setTimeout(() => closure_1_1.ping(), HALF_SECOND);
                  closure_129_1._timeoutId = timerId;
                }
                c3 = 0;
                closure_129_1._pingCompleted = true;
                c5 = 3;
                let obj3 = { value: undefined, done: true };
                return obj3;
              } else {
                obj3 = tmp4(tmp84[5]);
                let pingResult;
                if (obj3 != null) {
                  const _Date = Date;
                  pingResult = obj3.ping(Date.now(), closure_128_0, closure_129_0, false);
                }
                c4 = 4;
                c5 = 1;
                const obj4 = { value: pingResult, done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (value) {
              obj = tmp4(tmp84[5]);
              let checkForStallReportResult;
              if (obj != null) {
                checkForStallReportResult = obj.checkForStallReport();
              }
              closure_128_1 = checkForStallReportResult;
              if (null != closure_128_1) {
                if (closure_129_1._lastSessionId !== closure_128_0) {
                  closure_129_1._lastSessionId = closure_128_0;
                  closure_129_1._analyticsReportsRemaining = 3;
                }
                closure_129_1._analyticsReportsRemaining = +closure_129_1._analyticsReportsRemaining - 1;
                if (+closure_129_1._analyticsReportsRemaining > 0) {
                  closure_129_1.reportStall(
                    closure_128_1,
                    closure_128_0,
                    false,
                    closure_129_1._analyticsReportsRemaining,
                  );
                }
                if (0 === closure_129_1._analyticsReportsRemaining) {
                  closure_129_1.stopWatchdog();
                  obj1 = tmp4(tmp84[5]);
                  if (obj1 != null) {
                    obj1.disable();
                  }
                }
              }
            }
            if (closure_129_1._enabled) {
              const _setTimeout = setTimeout;
              closure_129_1._timeoutId = setTimeout(() => closure_1_1.ping(), HALF_SECOND);
            }
            c3 = 1;
          }
          c3 = 0;
          closure_129_1._pingCompleted = true;
          c5 = 3;
          const obj5 = { value, done: true };
          return obj5;
        }
      } catch (tmp84) {
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
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c0 = 0;
            closure_128_0 = undefined;
            closure_128_1 = undefined;
            if (null == self._timeoutId) {
              if (null != tmp2(17413)) {
                dependencyMap = 1;
                c3 = 1;
                const obj1 = { value: self.getCurrentSessionId(), done: false };
                return obj1;
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_128_0 = value;
          if (null != closure_128_0) {
            if (closure_129_0._lastSessionId !== closure_128_0) {
              logger.info("startWatchdog()");
              closure_129_0._enabled = true;
              if (closure_129_0._pingCompleted) {
                let checkForStallReportResult;
                obj = tmp2(17413);
                if (obj != null) {
                  checkForStallReportResult = obj.checkForStallReport();
                }
                closure_128_1 = checkForStallReportResult;
                if (null != closure_128_1) {
                  closure_129_0.reportStall(closure_128_1, closure_128_0, true, -1);
                }
              }
              closure_129_0.ping(true);
            }
          }
        }
        c3 = 3;
        const obj2 = { value, done: true };
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
prototype["reportStall"] = function reportStall(stallTime, arg1, is_previous, _analyticsReportsRemaining) {
  const obj = {};
  const merged = Object.assign(TTIAnalyticsUtils.getDeviceMetadata());
  obj.version = 1;
  obj.stall_time = stallTime.stallTime;
  obj.is_previous = is_previous;
  obj.reports_remaining = _analyticsReportsRemaining;
  let sessionId = null;
  if (stallTime.sessionId !== arg1) {
    sessionId = stallTime.sessionId;
  }
  obj.stall_session_id = sessionId;
  obj.trace = null;
  obj.track(constants2.APP_JS_STALLED, obj);
};
prototype["getCurrentSessionId"] = function getCurrentSessionId() {
  const self = this;
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp5;
            closure_128_0 = undefined;
            if (null != self._cachedSession) {
              let obj1 = tmp2(7471);
              if (!obj1.isSessionExpired(self._cachedSession)) {
                const uuid = closure_129_0._cachedSession.uuid;
                c3 = 3;
              }
            }
            dependencyMap = 1;
            c3 = 1;
            obj1 = { value: tmp2(7461).getSession(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_128_0 = value;
          if (null != closure_128_0) {
            closure_129_0._cachedSession = closure_128_0;
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
const size = fn(2);
let result = size.fileFinishedImporting("modules/js_watchdog/native/JSWatchdogManager.android.tsx");

export default jSWatchdogManager;
