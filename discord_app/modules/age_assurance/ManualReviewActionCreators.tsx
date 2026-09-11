// discord_app/modules/age_assurance/ManualReviewActionCreators.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import SafetyHubUtils from "../safety_hub/SafetyHubUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";

require = fn;
let closure_9 = async function _requestManualReview() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: constants.AGE_VERIFICATION_MANUAL_REVIEW, rejectWithError: true });
  return value.body;
};
let closure_10 = async function _requestManualReviewSuspendedUser() {
  suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: constants.AGE_VERIFICATION_SUSPENDED_MANUAL_REVIEW,
    body: { token: suspendedUserToken },
    rejectWithError: true,
  };
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
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
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
              if (obj6.isCurrentUserSuspended()) {
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
              obj6 = SafetyHubUtils;
            } else if (closure_128_0.status !== closure_129_7.DECIDED_TEEN) {
              const result = closure_129_1(closure_129_2[7]).showManualReviewWebview(
                closure_128_0.verification_webview_url,
              );
              c3 = 1;
              const obj3 = closure_129_1(closure_129_2[7]);
            }
          }
          const result1 = closure_129_1(closure_129_2[7]).showManualReviewDecidedTeenModal();
          c3 = 0;
          closure_129_11 = false;
          c5 = 3;
          let obj1 = { value: undefined, done: true };
          return obj1;
        }
      } else if (1 === tmp8) {
        c3 = 0;
        closure_129_11 = false;
        throw closure_2;
      } else if (2 === tmp8) {
        c3 = 1;
        obj1 = closure_129_1(closure_129_2[8]);
        obj1.showFailedToast(closure_129_6.TIGGER_PAWTECT_ERROR);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        closure_129_11 = false;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        closure_129_12 = closure_128_0;
        const _Date = Date;
        closure_129_13 = Date.now();
      }
      c3 = 0;
      closure_129_11 = false;
    } catch (tmp46) {
      closure_2 = tmp46;
      if (tmp5 === c3) {
        c5 = tmp3;
        throw tmp46;
      } else if (tmp2 === tmp48) {
        c4 = tmp2;
      } else {
        c4 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const SafetyToastType = fn(8485).SafetyToastType;
const ManualReviewStatus = { IN_PROGRESS: "in_progress", DECIDED_TEEN: "decided_teen" };
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
