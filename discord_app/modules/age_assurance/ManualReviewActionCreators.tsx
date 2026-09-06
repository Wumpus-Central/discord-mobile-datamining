// discord_app/modules/age_assurance/ManualReviewActionCreators.tsx
import DurationsDefault from "../../utils/Durations.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_8 = async function _requestManualReview() {
  const HTTP = HTTPUtils.HTTP;
  await HTTP.post({ url: constants.AGE_VERIFICATION_MANUAL_REVIEW, rejectWithError: true });
  return value.body;
};
let closure_12 = async function _handleManualReviewCta() {
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
          if (c9) {
            c5 = 3;
          } else {
            c9 = true;
            c3 = 2;
            closure_128_0 = closure_2_10;
            let tmp23 = null == closure_128_0;
            if (!tmp23) {
              const _Date2 = Date;
              tmp23 = Date.now() - closure_2_11 >= MINUTE;
            }
            if (tmp23) {
              c4 = 3;
              c5 = 1;
              let obj1 = {
                value: (function requestManualReview() {
                  const self = this;
                  const apply = closure_1_8.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(),
                done: false,
              };
              return obj1;
            } else if (closure_128_0.status !== closure_129_6.DECIDED_TEEN) {
              let obj2 = closure_129_1(closure_129_2[5]);
              const result = obj2.showManualReviewWebview(closure_128_0.verification_webview_url);
              c3 = 1;
            }
          }
          const result1 = closure_129_1(closure_129_2[5]).showManualReviewDecidedTeenModal();
          c3 = 0;
          closure_129_9 = false;
          c5 = 3;
          obj2 = { value: undefined, done: true };
          return obj2;
        }
      } else if (1 === tmp8) {
        c3 = 0;
        closure_129_9 = false;
        throw closure_2;
      } else if (2 === tmp8) {
        c3 = 1;
        obj1 = closure_129_1(closure_129_2[6]);
        obj1.showFailedToast(closure_129_5.TIGGER_PAWTECT_ERROR);
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        closure_129_9 = false;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        closure_128_0 = value;
        closure_129_10 = closure_128_0;
        const _Date = Date;
        closure_129_11 = Date.now();
      }
      c3 = 0;
      closure_129_9 = false;
    } catch (tmp42) {
      closure_2 = tmp42;
      if (tmp5 === c3) {
        c5 = tmp3;
        throw tmp42;
      } else if (tmp2 === tmp44) {
        c4 = tmp2;
      } else {
        c4 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const SafetyToastType = fn(8399).SafetyToastType;
const ManualReviewStatus = { IN_PROGRESS: "in_progress", DECIDED_TEEN: "decided_teen" };
const MINUTE = DurationsDefault.Millis.MINUTE;
let c9 = false;
let c10 = null;
let c11 = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/ManualReviewActionCreators.tsx");

export { ManualReviewStatus };
export function invalidateManualReviewCache() {
  c10 = null;
}
export const handleManualReviewCta = function handleManualReviewCta() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
