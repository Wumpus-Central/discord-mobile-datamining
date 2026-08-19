// === Module 16674: _requestAgeSignalChallenge ===

// Module 16674 (_requestAgeSignalChallenge)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

const require = fn;
function _requestAgeSignalChallenge() {
  const self = this;
  const tmp = callback(function*() {
    const HTTP = closure_1_0(table[2]).HTTP;
    obj1 = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
    obj1[0] = closure_1_3.AGE_SIGNAL_CHALLENGE;
    obj1[1] = {};
    let body = yield HTTP.post(obj1);
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
    c5 = 0;
    return (function*(arg0, arg1, arg2) {
      closure_3 = tmp4;
      const HTTP = lib(table[2]).HTTP;
      obj1 = { url: null, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
      obj1[0] = closure_1_3.AGE_SIGNAL;
      const obj2 = { platform: null, age_lower: null, age_upper: null, google_user_status: null, apple_verified_method: null, is_cold_launch: null, integrity_token: null };
      ({ platform: obj7[0], ageLower: obj7[1], ageUpper: obj7[2], googleUserStatus: obj7[3], appleVerifiedMethod: obj7[4] } = lib);
      obj2[5] = closure_2;
      obj2[6] = table;
      obj1[1] = obj2;
      lib = yield HTTP.post(obj1);
      const body = lib.body;
      if (body != null) {
        const should_block = body.should_block;
      }
      return true === should_block;
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
const result = require("obj132").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalActionCreators.tsx");

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