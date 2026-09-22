// === Module 8870: ManualReviewActionCreators ===

// Module 8870 (ManualReviewActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DurationsDefault from "Durations" /* 1091 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import SafetyHubUtils from "SafetyHubUtils" /* 8694 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
let closure_9 = async function _requestManualReview() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: constants.AGE_VERIFICATION_MANUAL_REVIEW, rejectWithError: true });
  return value.body;
};
let closure_10 = async function _requestManualReviewSuspendedUser() {
  suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
  const HTTP = HTTPUtils.HTTP;
  const request = { url: constants.AGE_VERIFICATION_SUSPENDED_MANUAL_REVIEW, body: { token: suspendedUserToken }, rejectWithError: true };
  await HTTP.post(request);
  return value.body;
};
let closure_14 = async function _handleManualReviewCta() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj5 = { value, done: true };
      return obj5;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_1 = tmp4;
          closure_0 = tmp8;
          closure_128_0 = undefined;
          if (c11) {
            c5 = 3;
          } else {
            c11 = true;
            c3 = 2;
            closure_128_0 = closure_2_12;
            let tmp23 = null == closure_128_0;
            if (!tmp23) {
              const _Date2 = Date;
              tmp23 = Date.now() - map1 >= MINUTE;
            }
            if (tmp23) {
              if (obj8.isCurrentUserSuspended()) {
                (function requestManualReviewSuspendedUser() {
                  const self = this;
                  const apply = closure_1_10.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })();
              } else {
                (function requestManualReview() {
                  const self = this;
                  const apply = closure_1_9.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })();
              }
              c4 = 3;
              c5 = 1;
              obj8 = SafetyHubUtils;
            } else if (closure_128_0.status === closure_129_7.SUBMITTED) {
              const result = closure_129_1(closure_129_2[8]).showManualReviewPendingModal();
              c3 = 0;
              closure_129_11 = false;
              c5 = 3;
              const obj9 = { value: undefined, done: true };
              return obj9;
            } else if (closure_128_0.status !== closure_129_7.DECIDED_TEEN) {
              const result1 = closure_129_1(closure_129_2[8]).showManualReviewWebview(closure_128_0.verification_webview_url, () => {
                if (obj.isCurrentUserSuspended()) {
                  c12 = null;
                  closure_1_1(dependencyMap[6]).dispatch({ type: "AGE_VERIFICATION_METHODS_V2_INVALIDATE" });
                  const obj2 = closure_1_1(dependencyMap[6]);
                }
                obj = closure_1_0(dependencyMap[7]);
              });
              c3 = 1;
              const obj3 = closure_129_1(closure_129_2[8]);
            }
          }
          const result2 = closure_129_1(closure_129_2[8]).showManualReviewDecidedTeenModal(closure_128_0.teen_age_range);
          c3 = 0;
          closure_129_11 = false;
          c5 = 3;
          const obj10 = { value: undefined, done: true };
          return obj10;
        }
      } else if (1 === tmp8) {
        c3 = 0;
        closure_129_11 = false;
        throw dependencyMap;
      } else if (2 === tmp8) {
        c3 = 1;
        closure_129_1(closure_129_2[9]).showFailedToast(closure_129_6.TIGGER_PAWTECT_ERROR);
        let obj2 = closure_129_1(closure_129_2[9]);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        closure_129_11 = false;
        c5 = 3;
        let obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        closure_129_12 = closure_128_0;
        const _Date = Date;
        closure_129_13 = Date.now();
      }
      c3 = 0;
      closure_129_11 = false;
    } catch (tmp53) {
      dependencyMap = tmp53;
      if (tmp5 === c3) {
        c5 = tmp3;
        throw tmp53;
      } else if (tmp2 === tmp55) {
        c4 = tmp2;
      } else {
        c4 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const SafetyToastType = fn(8674).SafetyToastType;
const ManualReviewStatus = { IN_PROGRESS: "in_progress", SUBMITTED: "submitted", DECIDED_TEEN: "decided_teen" };
const MINUTE = DurationsDefault.Millis.MINUTE;
let c11 = false;
let c12 = null;
let c13 = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/ManualReviewActionCreators.tsx");

export { ManualReviewStatus };
export function invalidateManualReviewCache() {
  c12 = null;
}
export const invalidateAgeVerificationCaches = function invalidateAgeVerificationCaches() {
  c12 = null;
  DispatcherDefault.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_INVALIDATE" });
};
export const handleManualReviewCta = function handleManualReviewCta() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};