// === Module 17464: ParentalConsentWarningActionCreators ===

// Module 17464 (ParentalConsentWarningActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1090 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ParentalConsentWarningStore from "ParentalConsentWarningStore" /* 14867 */;
import Backoff from "Backoff" /* 559 */;

const require = fn;
function clearPendingRetry() {
  if (null != c8) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c8);
    c8 = null;
  }
}
function fetchWarning() {
  if (obj.isParentalConsentWarningFetchEnabled("parental_consent_warning_manager")) {
    if (null != closure_7) {
      return closure_7;
    } else {
      _require = closure_9;
      const tmp6 = (async (arg0, value) => {
        if (logger === 2) {
          logger = 3;
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
            logger = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                logger = 3;
                throw value;
              } else if (arg0 === 2) {
                logger = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_0 = tmp8;
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                c3 = 2;
                const HTTP = closure_0(tmp41[6]).HTTP;
                c4 = 3;
                logger = 1;
                const obj1 = { value: HTTP.get({ url: "/users/@me/parental-consent/warning", rejectWithError: true }), done: false };
                return obj1;
              }
            } else if (1 === tmp8) {
              c3 = 0;
              if (closure_129_0 === closure_1_9) {
                c7 = null;
              }
              throw tmp41;
            } else {
              if (2 === tmp8) {
                c3 = 1;
                closure_128_2 = tmp41;
                if (closure_129_0 !== closure_1_9) {
                  c3 = 0;
                  if (closure_129_0 === closure_1_9) {
                    c7 = null;
                  }
                  logger = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  logger.error("Failed to fetch parental-consent warning", closure_128_2);
                  const obj2 = { tags: { source: "parental_consent_warning", step: "fetch_warning" } };
                  tmp4(tmp41[8]).captureException(closure_128_2, obj2);
                  (function scheduleRetry() {
                    if (null == timeout) {
                      const _setTimeout = setTimeout;
                      timeout = setTimeout(() => {
                        c8 = null;
                        closure_1_12();
                      }, closure_1_6.fail());
                    }
                  })();
                  const obj7 = tmp4(tmp41[8]);
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
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_128_0 = value;
                if (closure_129_0 !== closure_1_9) {
                  c3 = 0;
                  if (closure_129_0 === closure_1_9) {
                    c7 = null;
                  }
                  logger = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  closure_128_1 = (function normalizeWarning(body) {
                    const obj = { inGrace: true === body.in_grace, daysRemaining: null, surfaces: null };
                    let days_remaining = null;
                    if (typeof body.days_remaining === "number") {
                      days_remaining = body.days_remaining;
                    }
                    obj.daysRemaining = days_remaining;
                    obj.surfaces = Array.isArray(body.surfaces) ? body.surfaces : [];
                    return obj;
                  })(closure_128_0.body);
                  Backoff.succeed();
                  clearPendingRetry();
                  obj = tmp4(tmp41[7]);
                  const obj4 = { type: "PARENTAL_CONSENT_WARNING_FETCH_SUCCESS", warning: closure_128_1 };
                  obj.dispatch(obj4);
                  c3 = 1;
                }
              }
              c3 = 0;
              if (closure_129_0 === closure_1_9) {
                c7 = null;
              }
              logger = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp41) {
            if (tmp5 === c3) {
              logger = tmp3;
              throw tmp41;
            } else if (tmp2 === tmp43) {
              c4 = tmp2;
            } else {
              c4 = tmp;
            }
          }
        }
      })();
      closure_7 = tmp6;
      return tmp6;
    }
  } else {
    return Promise.resolve();
  }
  obj = require("ParentalConsentWarningFetchExperiment");
}
function maybeFetchWarning() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _maybeFetchWarning(arg0, value) {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          let shouldFetchTodayResult = null == React5;
          if (shouldFetchTodayResult) {
            shouldFetchTodayResult = null == React6;
          }
          if (shouldFetchTodayResult) {
            shouldFetchTodayResult = ParentalConsentWarningStore.shouldFetchToday();
          }
          if (shouldFetchTodayResult) {
            c1 = 1;
            c0 = 1;
            const obj1 = { value: fetchWarning(), done: false };
            return obj1;
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
      return { value: "HermesInternal", done: null };
    } catch (tmp11) {
      c0 = tmp;
      throw tmp11;
    }
  }
};
let closure_14 = async function _forceFetchWarning(arg0, value) {
  if (c0 === 2) {
    c0 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c0 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          clearPendingRetry();
          if (null != c7) {
            closure_9 = closure_9 + 1;
            c7 = null;
          }
          c1 = 1;
          c0 = 1;
          const obj1 = { value: fetchWarning(), done: false };
          return obj1;
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
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp11) {
      c0 = tmp;
      throw tmp11;
    }
  }
};
let logger = new fn(4).Logger("ParentalConsentWarning");
const result = 5 * DurationsDefault.Millis.SECOND;
Backoff = new Backoff(result, 5 * DurationsDefault.Millis.MINUTE, true);
let c7 = null;
let c8 = null;
let closure_9 = 0;
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/parent_tools/ParentalConsentWarningActionCreators.tsx");

export { maybeFetchWarning };
export const forceFetchWarning = function forceFetchWarning() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetFetchState = function resetFetchState() {
  closure_9 = closure_9 + 1;
  if (null != c8) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c8);
    c8 = null;
  }
  c7 = null;
  Backoff.succeed();
};
export const clearWarning = function clearWarning() {
  DispatcherDefault.dispatch({ type: "PARENTAL_CONSENT_WARNING_CLEARED" });
};