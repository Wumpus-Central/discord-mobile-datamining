// === Module 16953: _requestAgeSignalChallenge ===

// Module 16953 (_requestAgeSignalChallenge)
import closure_2 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

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
  closure_4 = tmp;
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
    c4 = 0;
    c3 = 0;
    return (function*(arg0, arg1, arg2) {
      if (constants === 2) {
        constants = 3;
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
          constants = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              constants = 3;
              throw arg1;
            } else if (arg0 === 2) {
              constants = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(table[2]).HTTP;
              obj1 = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
              obj1[0] = constants.AGE_SIGNAL;
              const obj2 = { platform: null, age_lower: null, age_upper: null, google_user_status: null, apple_verified_method: null, is_cold_launch: null, integrity_token: null };
              ({ platform: obj6[0], ageLower: obj6[1], ageUpper: obj6[2], googleUserStatus: obj6[3], appleVerifiedMethod: obj6[4] } = callback);
              obj2[5] = closure_2;
              obj2[6] = table;
              obj1[1] = obj2;
              c4 = 1;
              constants = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            constants = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          constants = tmp;
          throw tmp5;
        }
      }
    })();
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
const result = require("set").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalActionCreators.tsx");

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
export const submitAgeSignal = function submitAgeSignal(closure_0, closure_1, closure_02) {
  const self = this;
  const apply = _submitAgeSignal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};