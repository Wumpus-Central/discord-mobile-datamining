// discord_app/modules/age_assurance/ManualReviewActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Constants2 from "../safety_common/Constants.tsx";
import SafetyHubUtils from "../safety_hub/SafetyHubUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c4, c5, closure_12, closure_2, suspendedUserToken;

let obj = function _requestManualReview() {
  obj = _asyncToGenerator(async () => {
    let c0;
    let c1;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.AGE_VERIFICATION_MANUAL_REVIEW, rejectWithError: true };
    await HTTP.post(obj4);
    return value.body;
  });
  return obj(...arguments);
};
obj = function _requestManualReviewSuspendedUser() {
  obj = _asyncToGenerator(async () => {
    let c0;
    let c1;
    let obj4;
    suspendedUserToken = suspendedUserToken.getSuspendedUserToken();
    const HTTP = HTTPUtils.HTTP;
    const request = { url: constants.AGE_VERIFICATION_SUSPENDED_MANUAL_REVIEW, body: obj4, rejectWithError: true };
    obj4 = { token: suspendedUserToken };
    await HTTP.post(request);
    return value.body;
  });
  return obj(...arguments);
};
obj = function _handleManualReviewCta() {
  obj = _asyncToGenerator(async () => {
    function requestManualReviewSuspendedUser() {
      return closure_1_10(...arguments);
    }
    function requestManualReview() {
      return closure_1_9(...arguments);
    }
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj5 = { value, done: true };
        return obj5;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        let closure_0;
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
            let closure_1 = tmp;
            closure_0 = undefined;
            const tmp56 = c11;
            if (!tmp56) {
              c11 = true;
              c3 = 2;
              closure_0 = closure_2_12;
              let tmp19 = null == closure_0;
              if (!tmp19) {
                const _Date2 = Date;
                tmp19 = Date.now() - closure_2_13 >= MINUTE;
              }
              if (tmp19) {
                let tmp47;
                const obj8 = SafetyHubUtils;
                if (obj8.isCurrentUserSuspended()) {
                  tmp47 = requestManualReviewSuspendedUser();
                } else {
                  tmp47 = requestManualReview();
                }
                c4 = 3;
                c5 = 1;
                const obj9 = { value: tmp47, done: false };
                return obj9;
              } else if (closure_0.status === constants2.SUBMITTED) {
                const obj6 = closure_129_1(closure_129_2[8]);
                const result = obj6.showManualReviewPendingModal();
                c3 = 0;
                c11 = false;
                c5 = 3;
                const obj10 = { value: undefined, done: true };
                return obj10;
              } else if (closure_0.status === constants2.DECIDED_TEEN) {
                const obj4 = closure_129_1(closure_129_2[8]);
                const result1 = obj4.showManualReviewDecidedTeenModal(closure_0.teen_age_range);
                c3 = 0;
                c11 = false;
                c5 = 3;
                const obj11 = { value: undefined, done: true };
                return obj11;
              } else {
                const obj3 = closure_129_1(closure_129_2[8]);
                const result2 = obj3.showManualReviewWebview(closure_0.verification_webview_url, () => {
                  obj = closure_1_0(closure_1_2[7]);
                  if (obj.isCurrentUserSuspended()) {
                    c12 = null;
                    const obj2 = closure_1_1(closure_1_2[6]);
                    obj2.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_INVALIDATE" });
                  }
                });
                c3 = 1;
              }
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === c4) {
          c3 = 0;
          c11 = false;
          throw closure_2;
        } else if (2 === c4) {
          c3 = 1;
          let obj2 = closure_129_1(closure_129_2[9]);
          obj2.showFailedToast(constants.TIGGER_PAWTECT_ERROR);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c11 = false;
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          closure_12 = closure_0;
          const _Date = Date;
          let closure_13 = Date.now();
        }
        c3 = 0;
        c11 = false;
      } catch (tmp48) {
        closure_2 = tmp48;
        if (0 === c3) {
          c5 = 3;
          throw tmp48;
        } else if (1 === tmp50) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const SafetyToastType = Constants2.SafetyToastType;
obj = { IN_PROGRESS: "in_progress", SUBMITTED: "submitted", DECIDED_TEEN: "decided_teen" };
const MINUTE = DurationsDefault.Millis.MINUTE;
let c11 = false;
let c12 = null;
let c13 = 0;
let result = size.fileFinishedImporting("modules/age_assurance/ManualReviewActionCreators.tsx");

export const ManualReviewStatus = obj;
export function invalidateManualReviewCache() {
  c12 = null;
}
export const invalidateAgeVerificationCaches = function invalidateAgeVerificationCaches() {
  c12 = null;
  obj = DispatcherDefault;
  obj.dispatch({ type: "AGE_VERIFICATION_METHODS_V2_INVALIDATE" });
};
export const handleManualReviewCta = function handleManualReviewCta() {
  return obj(...arguments);
};
