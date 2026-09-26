// === Module 8025: AppStoreAgeSignalActionCreators ===

// Module 8025 (AppStoreAgeSignalActionCreators)
import HTTPUtils from "HTTPUtils" /* 1271 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _requestAgeSignalChallenge() {
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            c2 = 0;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.AGE_SIGNAL_CHALLENGE, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
            const obj4 = { platform, key_id };
            request.body = obj4;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: HTTP.post(request), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_130_0 = value;
          const body2 = closure_130_0.body;
          let nonce;
          if (body2 != null) {
            nonce = body2.nonce;
          }
          closure_130_1 = nonce;
          if (typeof closure_130_1 === "string") {
            if (0 !== closure_130_1.length) {
              const obj = { nonce: closure_130_1, attestKeyRegistered: null };
              const body = closure_130_0.body;
              let prop;
              if (body != null) {
                prop = body.attest_key_registered;
              }
              obj.attestKeyRegistered = true === prop;
              c4 = 3;
              const obj7 = { value: obj, done: true };
              return obj7;
            }
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c4 = tmp;
        throw tmp12;
      }
    }
  })();
};
let closure_6 = async function _registerAgeSignalAttestKey() {
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    closure_2 = tmp4;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.AGE_SIGNAL_ATTEST_KEY, body: { key_id, attestation }, rejectWithError: true, failImmediatelyWhenRateLimited: true };
    await HTTP.post(request);
    closure_130_0 = value;
    const body = closure_130_0.body;
    if (body != null) {
      const registered = body.registered;
    }
    return true === registered;
  })();
};
let closure_7 = async function _submitAgeSignal(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_7 = tmp5;
          closure_6 = tmp2;
          closure_134_3 = undefined;
          closure_134_4 = undefined;
          closure_134_0 = closure_0;
          closure_134_1 = closure_1;
          closure_134_2 = closure_2;
          let str = closure_3;
          if (closure_3 === undefined) {
            str = "app_start";
          }
          closure_134_3 = str;
          closure_134_4 = closure_4;
          c8 = 1;
          c9 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          function toSubmitOutcome(body) {
            let result;
            if (body != null) {
              result = body.result;
            }
            if ("accepted" !== result) {
              if ("skipped" !== result) {
                let obj = closure_1_4;
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
            obj.reason = reason;
          }
          const HTTP = closure_135_0(closure_135_1[2]).HTTP;
          const request = { url: closure_135_3.AGE_SIGNAL, body: null, rejectWithError: true, failImmediatelyWhenRateLimited: true };
          const obj5 = { platform: closure_134_0.platform, age_lower: closure_134_0.ageLower, age_upper: closure_134_0.ageUpper, google_age_signals_status: closure_134_0.googleAgeSignalsStatus, google_age_range_source: closure_134_0.googleAgeRangeSource, google_significant_change_status: closure_134_0.googleSignificantChangeStatus, apple_verified_method: closure_134_0.appleVerifiedMethod, is_cold_launch: closure_134_2, integrity_token: closure_134_1, attest_key_id: null, attest_assertion: null, source: null };
          let keyId;
          if (closure_134_4 != null) {
            keyId = closure_134_4.keyId;
          }
          obj5.attest_key_id = keyId;
          let assertion;
          if (closure_134_4 != null) {
            assertion = closure_134_4.assertion;
          }
          obj5.attest_assertion = assertion;
          obj5.source = closure_134_3;
          request.body = obj5;
          c8 = 2;
          c9 = 1;
          const obj6 = { value: HTTP.post(request), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c9 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        c9 = 3;
        let obj = { value: toSubmitOutcome(value.body), done: true };
        return obj;
      }
    } catch (tmp16) {
      c9 = tmp;
      throw tmp16;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
let closure_4 = { result: "skipped", reason: null };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalActionCreators.tsx");

export const requestAgeSignalChallenge = function requestAgeSignalChallenge() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const registerAgeSignalAttestKey = function registerAgeSignalAttestKey() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const submitAgeSignal = function submitAgeSignal() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};