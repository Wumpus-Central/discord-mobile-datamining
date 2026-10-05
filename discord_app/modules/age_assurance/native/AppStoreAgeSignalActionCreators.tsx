// === Module 8252: AppStoreAgeSignalActionCreators ===

// Module 8252 (AppStoreAgeSignalActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2, c8, c9, platform;

let obj = function _requestAgeSignalChallenge() {
  obj = _asyncToGenerator(async (platform, key_id) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj4;
      let prop;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let nonce;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c2 = 0;
              platform = undefined;
              nonce = undefined;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.AGE_SIGNAL_CHALLENGE, body: obj4, rejectWithError: true, failImmediatelyWhenRateLimited: true };
              c3 = 1;
              c4 = 1;
              obj4 = { platform, key_id };
              const obj5 = { value: HTTP.post(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            platform = value;
            const body2 = platform.body;
            nonce = undefined;
            if (body2 != null) {
              nonce = body2.nonce;
            }
            if (typeof nonce === "string") {
              if (0 !== nonce.length) {
                const body = platform.body;
                obj = { nonce, attestKeyRegistered: true === prop };
                prop = undefined;
                if (body != null) {
                  prop = body.attest_key_registered;
                }
                c4 = 3;
                return { value: obj, done: true };
              }
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp11) {
          c4 = 3;
          throw tmp11;
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _registerAgeSignalAttestKey() {
  obj = _asyncToGenerator(async (key_id, attestation) => {
    let closure_2;
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let obj4;
      let registered;
      const HTTP = HTTPUtils.HTTP;
      const request = { url: constants.AGE_SIGNAL_ATTEST_KEY, body: obj4, rejectWithError: true, failImmediatelyWhenRateLimited: true };
      obj4 = { key_id, attestation };
      await HTTP.post(request);
      key_id = value;
      const body = key_id.body;
      if (body != null) {
        registered = body.registered;
      }
      return true === registered;
    })();
  });
  return obj(...arguments);
};
obj = function _submitAgeSignal() {
  obj = _asyncToGenerator(async (arg0, integrity_token, is_cold_launch) => {
    let assertion;
    let keyId;
    let obj5;
    let closure_0 = arg0;
    let closure_3 = arg3;
    closure_4 = arg4;
    if (c9 === 2) {
      c9 = 3;
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
        let str;
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
            let closure_7 = tmp4;
            let closure_6 = tmp;
            closure_4 = undefined;
            str = closure_3;
            if (closure_3 === undefined) {
              str = "app_start";
            }
            c8 = 1;
            c9 = 1;
            return { value: "Set", done: true };
          }
        } else {
          let toSubmitOutcome;
          if (1 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              toSubmitOutcome = function toSubmitOutcome(body) {
                let reason;
                let result;
                if (body != null) {
                  result = body.result;
                }
                if ("accepted" !== result) {
                  if ("skipped" !== result) {
                    obj = closure_1_4;
                  }
                  return obj;
                }
                obj = { result, reason };
                reason = undefined;
                if (body != null) {
                  reason = body.reason;
                }
                if (reason == null) {
                  reason = null;
                }
              };
              const HTTP = closure_135_0(closure_135_1[2]).HTTP;
              const request = { url: closure_135_3.AGE_SIGNAL, body: obj5, rejectWithError: true, failImmediatelyWhenRateLimited: true };
              obj5 = { platform: closure_0.platform, age_lower: closure_0.ageLower, age_upper: closure_0.ageUpper, google_age_signals_status: closure_0.googleAgeSignalsStatus, google_age_range_source: closure_0.googleAgeRangeSource, google_significant_change_status: closure_0.googleSignificantChangeStatus, apple_verified_method: closure_0.appleVerifiedMethod, is_cold_launch, integrity_token, attest_key_id: keyId, attest_assertion: assertion, source: str };
              keyId = undefined;
              const post = HTTP.post;
              if (closure_4 != null) {
                keyId = closure_4.keyId;
              }
              assertion = undefined;
              if (closure_4 != null) {
                assertion = closure_4.assertion;
              }
              c8 = 2;
              c9 = 1;
              const obj6 = { value: post(request), done: false };
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
            obj = { value: toSubmitOutcome(value.body), done: true };
            return obj;
          }
        }
      } catch (tmp15) {
        c9 = 3;
        throw tmp15;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_4 = { result: "skipped", reason: null };
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeSignalActionCreators.tsx");

export const requestAgeSignalChallenge = function requestAgeSignalChallenge() {
  return obj(...arguments);
};
export const registerAgeSignalAttestKey = function registerAgeSignalAttestKey() {
  return obj(...arguments);
};
export const submitAgeSignal = function submitAgeSignal() {
  return obj(...arguments);
};