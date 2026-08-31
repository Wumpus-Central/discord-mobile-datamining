// discord_app/modules/parent_tools/ParentalConsentWarningActionCreators.tsx
import setDefault from "../../utils/Durations.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "ParentalConsentWarningStore.tsx";
import importDefaultResult from "../../../discord_common/js/packages/backoff/Backoff.tsx";
import { isParentalConsentWarningFetchEnabled } from "ParentalConsentWarningFetchExperiment.tsx";

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
    if (null != closure_7) {
      return closure_7;
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
            return { value: "HermesInternal", done: "HermesInternal" };
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
                closure_1 = tmp4;
                let body = tmp8;
                body = undefined;
                closure_1 = undefined;
                c3 = 2;
                const HTTP = closure_1_0(closure_1_2[6]).HTTP;
                c4 = 3;
                logger = 1;
                obj1 = { value: null, done: false };
                obj1[0] = HTTP.get({ url: "/users/@me/parental-consent/warning", rejectWithError: true });
                return obj1;
              }
            } else if (1 === tmp8) {
              c3 = 0;
              if (body === closure_1_9) {
                c7 = null;
              }
              throw closure_2;
            } else {
              if (2 === tmp8) {
                c3 = 1;
                if (body !== closure_1_9) {
                  c3 = 0;
                  if (body === closure_1_9) {
                    c7 = null;
                  }
                  logger = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else {
                  logger.error("Failed to fetch parental-consent warning", closure_2);
                  const obj2 = { tags: null };
                  obj2[0] = { source: "parental_consent_warning", step: "fetch_warning" };
                  closure_1_1(closure_1_2[8]).captureException(closure_2, obj2);
                  (function scheduleRetry() {
                    if (null == timeout) {
                      const _setTimeout = setTimeout;
                      timeout = setTimeout(() => {
                        c8 = null;
                        callback();
                      }, closure_6.fail());
                    }
                  })();
                  const obj7 = closure_1_1(closure_1_2[8]);
                }
              } else if (arg0 === 1) {
                logger = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c3 = 0;
                if (closure_1_0 === closure_1_9) {
                  c7 = null;
                }
                logger = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                body = arg1;
                if (body !== closure_1_9) {
                  c3 = 0;
                  if (body === closure_1_9) {
                    c7 = null;
                  }
                  logger = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
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
                  closure_1_6.succeed();
                  closure_1_10();
                  obj = closure_1_1(closure_1_2[7]);
                  const obj4 = { type: "PARENTAL_CONSENT_WARNING_FETCH_SUCCESS", warning: null };
                  obj4[1] = closure_1;
                  obj.dispatch(obj4);
                  c3 = 1;
                }
              }
              c3 = 0;
              if (closure_1_0 === closure_1_9) {
                c7 = null;
              }
              logger = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
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
      closure_7 = tmp6;
      return tmp6;
    }
  } else {
    return Promise.resolve();
  }
  obj = isParentalConsentWarningFetchEnabled;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            let shouldFetchTodayResult = null == closure_1_7;
            if (shouldFetchTodayResult) {
              shouldFetchTodayResult = null == closure_1_8;
            }
            if (shouldFetchTodayResult) {
              shouldFetchTodayResult = closure_1_4.shouldFetchToday();
            }
            if (shouldFetchTodayResult) {
              c1 = 1;
              c0 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = closure_1_11();
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
        return { value: "HermesInternal", done: "HermesInternal" };
      } catch (tmp11) {
        c0 = tmp;
        throw tmp11;
      }
    }
  });
  closure_13 = tmp;
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
            closure_1_10();
            if (null != c7) {
              closure_9 = closure_9 + 1;
              c7 = null;
            }
            c1 = 1;
            c0 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_11();
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp11) {
        c0 = tmp;
        throw tmp11;
      }
    }
  });
  closure_14 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let logger = new require("log").Logger("ParentalConsentWarning");
const result = 5 * setDefault.Millis.SECOND;
importDefaultResult = new importDefaultResult(result, 5 * setDefault.Millis.MINUTE, true);
let c7 = null;
let c8 = null;
let c9 = 0;
const result1 = require("set").fileFinishedImporting("modules/parent_tools/ParentalConsentWarningActionCreators.tsx");

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
  c7 = null;
  importDefaultResult.succeed();
};
export const clearWarning = function clearWarning() {
  dispatcherDefault.dispatch({ type: "PARENTAL_CONSENT_WARNING_CLEARED" });
};