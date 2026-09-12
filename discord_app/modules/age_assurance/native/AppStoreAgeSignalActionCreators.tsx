// discord_app/modules/age_assurance/native/AppStoreAgeSignalActionCreators.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _requestAgeSignalChallenge() {
  closure_0 = tmp2;
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: constants.AGE_SIGNAL_CHALLENGE,
    body: {},
    rejectWithError: true,
    failImmediatelyWhenRateLimited: true,
  };
  await HTTP.post(request);
  closure_128_0 = value;
  const body = closure_128_0.body;
  if (body != null) {
    const nonce = body.nonce;
  }
  closure_128_1 = nonce;
  if (typeof closure_128_1 === "string") {
    if (closure_128_1.length > 0) {
      const tmp12 = closure_128_1;
    }
  }
  return tmp12;
};
let closure_6 = async function _submitAgeSignal(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_6 = tmp5;
          closure_5 = tmp2;
          closure_133_3 = undefined;
          closure_133_0 = closure_0;
          closure_133_1 = closure_1;
          closure_133_2 = closure_2;
          let str = closure_3;
          if (closure_3 === undefined) {
            str = "app_start";
          }
          closure_133_3 = str;
          c7 = 1;
          c8 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value, done: true };
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
            obj.reason = reason;
          }
          const HTTP = closure_134_0(closure_134_1[2]).HTTP;
          const request = {
            url: closure_134_3.AGE_SIGNAL,
            body: null,
            rejectWithError: true,
            failImmediatelyWhenRateLimited: true,
          };
          const obj2 = {
            platform: closure_133_0.platform,
            age_lower: closure_133_0.ageLower,
            age_upper: closure_133_0.ageUpper,
            google_age_signals_status: closure_133_0.googleAgeSignalsStatus,
            google_age_range_source: closure_133_0.googleAgeRangeSource,
            google_significant_change_status: closure_133_0.googleSignificantChangeStatus,
            apple_verified_method: closure_133_0.appleVerifiedMethod,
            is_cold_launch: closure_133_2,
            integrity_token: closure_133_1,
            source: closure_133_3,
          };
          request.body = obj2;
          c7 = 2;
          c8 = 1;
          const obj3 = { value: HTTP.post(request), done: false };
          return obj3;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        c8 = 3;
        obj = { value: toSubmitOutcome(value.body), done: true };
        return obj;
      }
    } catch (tmp10) {
      c8 = tmp;
      throw tmp10;
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
export const submitAgeSignal = function submitAgeSignal() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
