// === Module 17543: JSWatchdogManager ===

// Module 17543 (JSWatchdogManager)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1102 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import TTIAnalyticsUtils from "TTIAnalyticsUtils" /* 6984 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import Constants from "Constants" /* 1085 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let c2, c4, c5, closure_2;

let closure_4;
let hasOwnProperty;
({ AppStates: closure_4, AnalyticEvents: hasOwnProperty } = Constants);
const tmp3 = new LoggerDefault("JSWatchdogManager");
const metroRequire = tmp3;
const HALF_SECOND = DurationsDefault.Millis.HALF_SECOND;
class JSWatchdogManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
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
  handleAppStateUpdate(state) {
    const self = this;
    if (state.state === constants.ACTIVE) {
      self.startWatchdog();
    } else {
      self.stopWatchdog();
    }
  }
  handleConnectionOpenSupplemental() {
    const self = this;
    const timerId = setTimeout(() => {
      self.startWatchdog();
    }, 0);
  }
  ping() {
    let flag = arg0;
    if (arg0 === undefined) {
      flag = false;
    }
    const self = this;
    return (async () => {
      let closure_1;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let _lastSessionId;
          let c1;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              _lastSessionId = undefined;
              c1 = undefined;
              self._pingCompleted = false;
              c3 = 2;
              c4 = 3;
              c5 = 1;
              const obj6 = { value: self.getCurrentSessionId(), done: false };
              return obj6;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_129_1._pingCompleted = true;
            throw closure_2;
          } else {
            if (2 === c4) {
              c3 = 1;
              const obj8 = tmp(closure_2[6]);
              obj8.captureException(closure_2);
            } else if (3 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_1._pingCompleted = true;
                c5 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                _lastSessionId = value;
                if (null == _lastSessionId) {
                  if (closure_129_1._enabled) {
                    const _setTimeout2 = setTimeout;
                    const timerId = setTimeout(() => closure_1_1.ping(), HALF_SECOND);
                    closure_129_1._timeoutId = timerId;
                  }
                  c3 = 0;
                  closure_129_1._pingCompleted = true;
                  c5 = 3;
                  const obj9 = { value: undefined, done: true };
                  return obj9;
                } else {
                  const obj4 = tmp(closure_2[5]);
                  let pingResult;
                  if (obj4 != null) {
                    const _Date = Date;
                    pingResult = obj4.ping(Date.now(), _lastSessionId, closure_129_0, false);
                  }
                  c4 = 4;
                  c5 = 1;
                  const obj10 = { value: pingResult, done: false };
                  return obj10;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_1._pingCompleted = true;
              c5 = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              if (value) {
                const obj = tmp(closure_2[5]);
                let checkForStallReportResult;
                if (obj != null) {
                  checkForStallReportResult = obj.checkForStallReport();
                }
                c1 = checkForStallReportResult;
                if (null != c1) {
                  if (closure_129_1._lastSessionId !== _lastSessionId) {
                    closure_129_1._lastSessionId = _lastSessionId;
                    closure_129_1._analyticsReportsRemaining = 3;
                  }
                  closure_129_1._analyticsReportsRemaining = +closure_129_1._analyticsReportsRemaining - 1;
                  if (+closure_129_1._analyticsReportsRemaining > 0) {
                    closure_129_1.reportStall(c1, _lastSessionId, false, closure_129_1._analyticsReportsRemaining);
                  }
                  if (0 === closure_129_1._analyticsReportsRemaining) {
                    closure_129_1.stopWatchdog();
                    const obj2 = tmp(closure_2[5]);
                    if (obj2 != null) {
                      obj2.disable();
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
            return { value: "IconComponent", done: null };
          }
        } catch (tmp80) {
          closure_2 = tmp80;
          if (0 === c3) {
            c5 = 3;
            throw tmp80;
          } else if (1 === tmp82) {
            c4 = 1;
          } else {
            c4 = 2;
          }
        }
      }
    })();
  }
  startWatchdog() {
    const self = this;
    return (async () => {
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_0;
          let c1;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let c0 = 0;
              closure_0 = undefined;
              c1 = undefined;
              if (null == self._timeoutId) {
                if (null != tmp(c2[5])) {
                  c2 = 1;
                  c3 = 1;
                  const obj4 = { value: self.getCurrentSessionId(), done: false };
                  return obj4;
                }
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_0 = value;
            if (null != closure_0) {
              if (closure_129_0._lastSessionId !== closure_0) {
                logger.info("startWatchdog()");
                closure_129_0._enabled = true;
                if (closure_129_0._pingCompleted) {
                  let checkForStallReportResult;
                  const obj = tmp(c2[5]);
                  if (obj != null) {
                    checkForStallReportResult = obj.checkForStallReport();
                  }
                  c1 = checkForStallReportResult;
                  if (null != c1) {
                    closure_129_0.reportStall(c1, closure_0, true, -1);
                  }
                }
                closure_129_0.ping(true);
              }
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp31) {
          c3 = 3;
          throw tmp31;
        }
      }
    })();
  }
  stopWatchdog() {
    logger.info("stopWatchdog()");
    this._enabled = false;
    clearTimeout(this._timeoutId);
    this._timeoutId = null;
  }
  reportStall(c1, value, is_previous, _analyticsReportsRemaining) {
    let sessionId;
    const obj = { version: 1, stall_time: importDefault.stallTime, is_previous, reports_remaining: _analyticsReportsRemaining, stall_session_id: sessionId, trace: null };
    const track = AnalyticsUtilsDefault.track;
    const APP_JS_STALLED = hasOwnProperty.APP_JS_STALLED;
    AnalyticsUtilsDefault;
    const obj2 = TTIAnalyticsUtils;
    const merged = Object.assign(obj2.getDeviceMetadata());
    sessionId = null;
    if (importDefault.sessionId !== value) {
      sessionId = importDefault.sessionId;
    }
    track(APP_JS_STALLED, obj);
  }
  getCurrentSessionId() {
    const self = this;
    return (async () => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let _cachedSession;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              let closure_1 = tmp4;
              _cachedSession = undefined;
              if (null != self._cachedSession) {
                _cachedSession(c2[9]);
              }
              const obj4 = _cachedSession(c2[10]);
              c2 = 1;
              c3 = 1;
              const obj6 = { value: obj4.getSession(), done: false };
              return obj6;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            _cachedSession = value;
            if (null == _cachedSession) {
              c3 = 3;
              return { value: null, done: true };
            } else {
              closure_129_0._cachedSession = _cachedSession;
            }
          }
          c3 = 3;
          const obj7 = { value: closure_129_0._cachedSession.uuid, done: true };
          return obj7;
        } catch (tmp19) {
          c3 = 3;
          throw tmp19;
        }
      }
    })();
  }
}
const prototype = JSWatchdogManager.prototype;
const jSWatchdogManager = new JSWatchdogManager();
let result = size.fileFinishedImporting("modules/js_watchdog/native/JSWatchdogManager.android.tsx");

export default jSWatchdogManager;