// === Module 8570: _requestAgeSignalChallenge ===

// Module 8570 (_requestAgeSignalChallenge)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 1074 */;

const require = arg1;
function _requestAgeSignalChallenge() {
  const self = this;
  const tmp = callback(function*() {
    let body = tmp2;
    const HTTP = closure_1_0(table[2]).HTTP;
    obj1 = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
    obj1[0] = closure_1_3.AGE_SIGNAL_CHALLENGE;
    obj1[1] = {};
    body = yield HTTP.post(obj1);
    body = body.body;
    if (body != null) {
      const nonce = body.nonce;
    }
    if (typeof nonce === "string") {
      if (nonce.length > 0) {
        const tmp12 = nonce;
      }
    }
    return tmp12;
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _submitAgeSignal() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c7 = 0;
    c8 = 0;
    const iter = (function*(arg0, body) {
      if (c8 === 2) {
        c8 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              closure_6 = tmp5;
              closure_5 = tmp2;
              let str;
              if (str === undefined) {
                str = "app_start";
              }
              c7 = 1;
              c8 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c8 = 3;
              throw body;
            } else if (arg0 === 2) {
              c8 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = body;
              return obj1;
            } else {
              function toSubmitOutcome(body) {
                let result;
                if (body != null) {
                  result = body.result;
                }
                if ("accepted" !== result) {
                  if ("skipped" !== result) {
                    let obj = toSubmitOutcome;
                  }
                  return obj;
                }
                obj = { result, reason: null };
                let reason;
                if (body != null) {
                  reason = body.reason;
                }
                if (reason == null) {
                  reason = null;
                }
                obj[1] = reason;
              }
              const HTTP = lib(table[2]).HTTP;
              const obj2 = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
              obj2[0] = str.AGE_SIGNAL;
              const obj3 = { platform: null, age_lower: null, age_upper: null, google_age_signals_status: null, google_age_range_source: null, google_significant_change_status: null, apple_verified_method: null, is_cold_launch: null, integrity_token: null, source: null };
              obj3[0] = lib.platform;
              obj3[1] = lib.ageLower;
              obj3[2] = lib.ageUpper;
              obj3[3] = lib.googleAgeSignalsStatus;
              obj3[4] = lib.googleAgeRangeSource;
              obj3[5] = lib.googleSignificantChangeStatus;
              obj3[6] = lib.appleVerifiedMethod;
              obj3[7] = closure_2;
              obj3[8] = table;
              obj3[9] = str;
              obj2[1] = obj3;
              c7 = 2;
              c8 = 1;
              const obj4 = { value: null, done: false };
              obj4[0] = HTTP.post(obj2);
              return obj4;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw body;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value: null, done: true };
            obj5[0] = body;
            return obj5;
          } else {
            c8 = 3;
            obj = { value: null, done: true };
            obj[0] = toSubmitOutcome(body.body);
            return obj;
          }
        } catch (tmp10) {
          c8 = tmp;
          throw tmp10;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_6 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = { result: "skipped", reason: null };
let result = require("set").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalActionCreators.tsx");

export const requestAgeSignalChallenge = function requestAgeSignalChallenge() {
  const self = this;
  const apply = _requestAgeSignalChallenge.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitAgeSignal = function submitAgeSignal(closure_2, c4, closure_0, user_initiated) {
  const self = this;
  const apply = _submitAgeSignal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};