// === Module 17604: ParentalConsentWarningActionCreators ===

// Module 17604 (ParentalConsentWarningActionCreators)
import logger_Logger from "logger/Logger" /* 4 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import DurationsDefault from "Durations" /* 1102 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 14675 */;
import Backoff from "Backoff" /* 569 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c0, c1, c4, closure_0, closure_2, closure_7;

function clearPendingRetry() {
  if (null != c8) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c8);
    c8 = null;
  }
}
function fetchWarning() {
  obj = require("ParentalConsentWarningFetchExperiment");
  if (obj.isParentalConsentWarningFetchEnabled("parental_consent_warning_manager")) {
    const tmp3 = null;
    if (null != closure_7) {
      return closure_7;
    } else {
      _require = closure_9;
      const tmp6 = (async () => {
        function normalizeWarning(body) {
          let days_remaining;
          obj = { inGrace: true === body.in_grace, daysRemaining: days_remaining, surfaces: Array.isArray(body.surfaces) ? body.surfaces : [] };
          days_remaining = null;
          if (typeof body.days_remaining === "number") {
            days_remaining = body.days_remaining;
          }
          return obj;
        }
        function scheduleRetry() {
          let timeout;
          if (null == timeout) {
            const _setTimeout = setTimeout;
            timeout = setTimeout(() => {
              c8 = null;
              closure_1_12();
            }, closure_1_6.fail());
          }
        }
        if (logger === 2) {
          logger = 3;
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
          let c3;
          try {
            let warning;
            logger = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                logger = 3;
                throw value;
              } else if (arg0 === 2) {
                logger = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_0 = undefined;
                warning = undefined;
                c3 = 2;
                const HTTP = closure_0(closure_2[6]).HTTP;
                c4 = 3;
                logger = 1;
                const obj4 = { value: HTTP.get({ url: "/users/@me/parental-consent/warning", rejectWithError: true }), done: false };
                return obj4;
              }
            } else if (1 === c4) {
              c3 = 0;
              const tmp31 = closure_2;
              if (closure_129_0 === closure_1_9) {
                c7 = null;
              }
              throw tmp31;
            } else {
              if (2 === c4) {
                c3 = 1;
                if (closure_129_0 !== closure_1_9) {
                  c3 = 0;
                  if (closure_129_0 === closure_1_9) {
                    c7 = null;
                  }
                  logger = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  logger.error("Failed to fetch parental-consent warning", closure_2);
                  const obj5 = { tags: { source: "parental_consent_warning", step: "fetch_warning" } };
                  const obj7 = warning(closure_2[8]);
                  obj7.captureException(closure_2, obj5);
                  scheduleRetry();
                }
              } else if (arg0 === 1) {
                logger = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                if (closure_129_0 === closure_1_9) {
                  c7 = null;
                }
                logger = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_0 = value;
                if (closure_129_0 !== closure_1_9) {
                  c3 = 0;
                  if (closure_129_0 === closure_1_9) {
                    c7 = null;
                  }
                  logger = 3;
                  return { value: "IconComponent", done: null };
                } else {
                  warning = normalizeWarning(closure_0.body);
                  importDefaultResult1.succeed();
                  clearPendingRetry();
                  obj = warning(closure_2[7]);
                  const obj8 = { type: "PARENTAL_CONSENT_WARNING_FETCH_SUCCESS", warning };
                  obj.dispatch(obj8);
                  c3 = 1;
                }
              }
              c3 = 0;
              if (closure_129_0 === closure_1_9) {
                c7 = null;
              }
              logger = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp37) {
            closure_2 = tmp37;
            if (0 === c3) {
              logger = 3;
              throw tmp37;
            } else if (1 === tmp39) {
              c4 = 1;
            } else {
              c4 = 2;
            }
          }
        }
      })();
      closure_7 = tmp6;
      return tmp6;
    }
  } else {
    const tmp = globalThis;
    return Promise.resolve();
  }
}
function maybeFetchWarning() {
  return obj(...arguments);
}
let obj = function _maybeFetchWarning() {
  obj = _asyncToGenerator(async () => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const shouldFetchTodayResult = null == closure_2_7 && null == closure_2_8 && ParentalConsentWarningStore.shouldFetchToday();
            if (shouldFetchTodayResult) {
              c1 = 1;
              c0 = 1;
              const obj4 = { value: fetchWarning(), done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp10) {
        c0 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
obj = function _forceFetchWarning() {
  obj = _asyncToGenerator(async () => {
    if (c0 === 2) {
      c0 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            clearPendingRetry();
            if (null != c7) {
              closure_9 = closure_9 + 1;
              c7 = null;
            }
            c1 = 1;
            c0 = 1;
            const obj4 = { value: fetchWarning(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c0 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp10) {
        c0 = 3;
        throw tmp10;
      }
    }
  });
  return obj(...arguments);
};
let logger = new logger_Logger.Logger("ParentalConsentWarning");
const result = 5 * DurationsDefault.Millis.SECOND;
const importDefaultResult1 = new Backoff(result, 5 * DurationsDefault.Millis.MINUTE, true);
let c7 = null;
let c8 = null;
let closure_9 = 0;
const result1 = size.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningActionCreators.tsx");

export { maybeFetchWarning };
export const forceFetchWarning = function forceFetchWarning() {
  return obj(...arguments);
};
export const resetFetchState = function resetFetchState() {
  closure_9 = closure_9 + 1;
  if (null != c8) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c8);
    c8 = null;
  }
  c7 = null;
  importDefaultResult1.succeed();
};
export const clearWarning = function clearWarning() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "PARENTAL_CONSENT_WARNING_CLEARED" });
};