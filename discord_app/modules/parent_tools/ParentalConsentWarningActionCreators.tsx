import { dispatcher } from "../../Dispatcher.tsx";
import { isParentalConsentWarningFetchEnabled } from "ParentalConsentWarningFetchExperiment.tsx";
// discord_app/modules/parent_tools/ParentalConsentWarningActionCreators.tsx
import isParentalConsentWarningFetchEnabled from "isParentalConsentWarningFetchEnabled";
import initialize from "initialize";
import importDefaultResult from "fails";

const require = arg1;
function clearPendingRetry() {
  if (null != c8) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c8);
    c8 = null;
  }
}
function fetchWarning() {
  if (obj.isParentalConsentWarningFetchEnabled("parental_consent_warning_manager")) {
    if (null != c7) {
      return c7;
    } else {
      const _require = c9;
      const tmp6 = callback(function*() {
        if (logger === 2) {
          logger = 3;
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
            logger = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                logger = 3;
                throw arg1;
              } else if (arg0 === 2) {
                logger = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_1 = tmp4;
                let body = tmp8;
                body = undefined;
                closure_1 = undefined;
                let c3 = 2;
                const HTTP = outer1_0(outer1_2[6]).HTTP;
                c4 = 3;
                logger = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = HTTP.get({ url: "/users/@me/parental-consent/warning", rejectWithError: true });
                return obj1;
              }
            } else if (1 === tmp8) {
              c3 = 0;
              if (body === outer1_9) {
                let outer1_7 = null;
              }
              throw closure_2;
            } else {
              if (2 === tmp8) {
                c3 = 1;
                if (body !== outer1_9) {
                  c3 = 0;
                  if (body === outer1_9) {
                    outer1_7 = null;
                  }
                  logger = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  logger.error("Failed to fetch parental-consent warning", closure_2);
                  const obj2 = { tags: null };
                  obj2[0] = { source: "parental_consent_warning", step: "fetch_warning" };
                  outer1_1(outer1_2[8]).captureException(closure_2, obj2);
                  (function scheduleRetry() {
                    if (null == timeout) {
                      const _setTimeout = setTimeout;
                      timeout = setTimeout(() => {
                        let c8 = null;
                        callback();
                      }, closure_6.fail());
                    }
                  })();
                  const obj7 = outer1_1(outer1_2[8]);
                }
              } else if (arg0 === 1) {
                logger = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                if (outer1_0 === outer1_9) {
                  outer1_7 = null;
                }
                logger = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                body = arg1;
                if (body !== outer1_9) {
                  c3 = 0;
                  if (body === outer1_9) {
                    outer1_7 = null;
                  }
                  logger = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  closure_1 = (function normalizeWarning(body) {
                    const obj = { inGrace: true === body.in_grace, daysRemaining: null, surfaces: null };
                    let days_remaining = null;
                    if (typeof body.days_remaining === "number") {
                      days_remaining = body.days_remaining;
                    }
                    obj[1] = days_remaining;
                    obj[2] = Array.isArray(body.surfaces) ? body.surfaces : [];
                    return obj;
                  })(body.body);
                  outer1_6.succeed();
                  outer1_10();
                  obj = outer1_1(outer1_2[7]);
                  const obj4 = { type: "PARENTAL_CONSENT_WARNING_FETCH_SUCCESS", warning: null };
                  obj4[1] = closure_1;
                  obj.dispatch(obj4);
                  c3 = 1;
                }
              }
              c3 = 0;
              if (outer1_0 === outer1_9) {
                outer1_7 = null;
              }
              logger = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp41) {
            closure_2 = tmp41;
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
      c7 = tmp6;
      return tmp6;
    }
  } else {
    return Promise.resolve();
  }
  obj = _isParentalConsentWarningFetchEnabled;
}
function maybeFetchWarning() {
  const self = this;
  const apply = _maybeFetchWarning.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _maybeFetchWarning() {
  const self = this;
  const tmp = callback(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let shouldFetchTodayResult = null == outer1_7;
            if (shouldFetchTodayResult) {
              shouldFetchTodayResult = null == outer1_8;
            }
            if (shouldFetchTodayResult) {
              shouldFetchTodayResult = outer1_4.shouldFetchToday();
            }
            if (shouldFetchTodayResult) {
              c1 = 1;
              c0 = 1;
              const obj1 = { value: null, done: false };
              obj1[0] = outer1_11();
              return obj1;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp11) {
        c0 = tmp;
        throw tmp11;
      }
    }
  });
  const _maybeFetchWarning = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _forceFetchWarning() {
  const self = this;
  const tmp = callback(function*() {
    if (c0 === 2) {
      c0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            outer1_10();
            if (null != outer1_7) {
              outer1_9 = outer1_9 + 1;
              outer1_7 = null;
            }
            c1 = 1;
            c0 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_11();
            return obj1;
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
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
  });
  const _forceFetchWarning = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let logger = new require("set").Logger("ParentalConsentWarning");
const result = 5 * require("set").Millis.SECOND;
importDefaultResult = new importDefaultResult(result, 5 * require("set").Millis.MINUTE, true);
let c7 = null;
let c8 = null;
let c9 = 0;
const result1 = require("log").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningActionCreators.tsx");

export { maybeFetchWarning };
export const forceFetchWarning = function forceFetchWarning() {
  const self = this;
  const apply = _forceFetchWarning.apply;
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
  let c7 = null;
  importDefaultResult.succeed();
};
export const clearWarning = function clearWarning() {
  dispatcher.dispatch({ type: "PARENTAL_CONSENT_WARNING_CLEARED" });
};