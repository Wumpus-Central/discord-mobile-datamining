// discord_app/modules/age_assurance/native/AppStoreAgeSignalActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _requestAgeSignalChallenge() {
  const self = this;
  const tmp = callback(function*() {
    let body = tmp2;
    const HTTP = outer1_0(table[2]).HTTP;
    const obj1 = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
    obj1[0] = outer1_3.AGE_SIGNAL_CHALLENGE;
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
  const _requestAgeSignalChallenge = tmp;
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
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, arg1) {
      if (c2 === 2) {
        c2 = 3;
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
          c2 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const HTTP = callback(table[2]).HTTP;
              const obj1 = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
              obj1[0] = constants.AGE_SIGNAL;
              const obj2 = { platform: null, age_lower: null, age_upper: null, google_user_status: null, apple_verified_method: null, integrity_token: null };
              ({ platform: obj6[0], ageLower: obj6[1], ageUpper: obj6[2], googleUserStatus: obj6[3], appleVerifiedMethod: obj6[4] } = callback);
              obj2[5] = table;
              obj1[1] = obj2;
              constants = 1;
              c2 = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = HTTP.post(obj1);
              return obj3;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp5) {
          c2 = tmp;
          throw tmp5;
        }
      }
    })();
  });
  const _submitAgeSignal = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("sendRequest").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalActionCreators.tsx");

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
export const submitAgeSignal = function submitAgeSignal(closure_0, closure_02) {
  const self = this;
  const apply = _submitAgeSignal.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};