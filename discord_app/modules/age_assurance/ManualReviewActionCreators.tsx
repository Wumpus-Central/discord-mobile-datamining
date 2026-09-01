// === Module 11502: _requestManualReview ===

// Module 11502 (_requestManualReview)
import setDefault from "set" /* 687 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;
import { SafetyToastType } from "SafetyToastType" /* 8670 */;

const require = arg1;
function _requestManualReview() {
  const self = this;
  const tmp = callback(function*() {
    const HTTP = v0(closure_1_2[4]).HTTP;
    obj1 = { url: null, rejectWithError: true };
    obj1[0] = closure_1_4.AGE_VERIFICATION_MANUAL_REVIEW;
    yield HTTP.post(obj1);
    return arg1.body;
  });
  closure_8 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleManualReviewCta() {
  let self = this;
  const tmp = callback(function*() {
    if (constants === 2) {
      constants = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        obj = { value: null, done: true };
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
            const callback = tmp4;
            closure_0 = tmp8;
            closure_0 = undefined;
            if (c9) {
              constants = 3;
            } else {
              c9 = true;
              c3 = 2;
              closure_0 = closure_1_10;
              let tmp23 = null == closure_0;
              if (!tmp23) {
                const _Date2 = Date;
                tmp23 = Date.now() - closure_1_11 >= closure_1_7;
              }
              if (tmp23) {
                c4 = 3;
                constants = 1;
                obj1 = { value: null, done: false };
                obj1[0] = (function requestManualReview() {
                  const self = this;
                  const apply = closure_8.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })();
                return obj1;
              } else if (closure_0.status !== constants2.DECIDED_TEEN) {
                let obj2 = callback(8682);
                const result = obj2.showManualReviewWebview(closure_0.verification_webview_url);
                c3 = 1;
              }
            }
            const result1 = callback(8682).showManualReviewDecidedTeenModal();
            c3 = 0;
            c9 = false;
            constants = 3;
            obj2 = { value: null, done: true };
            obj2[0] = undefined;
            return obj2;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          c9 = false;
          throw dependencyMap;
        } else if (2 === tmp8) {
          c3 = 1;
          obj1 = callback(8675);
          obj1.showFailedToast(constants.TIGGER_PAWTECT_ERROR);
        } else if (arg0 === 1) {
          constants = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c9 = false;
          constants = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          closure_0 = arg1;
          closure_10 = closure_0;
          const _Date = Date;
          closure_11 = Date.now();
        }
        c3 = 0;
        c9 = false;
      } catch (tmp42) {
        dependencyMap = tmp42;
        if (tmp5 === c3) {
          constants = tmp3;
          throw tmp42;
        } else if (tmp2 === tmp44) {
          c4 = tmp2;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  closure_12 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let obj = { IN_PROGRESS: "in_progress", DECIDED_TEEN: "decided_teen" };
const MINUTE = setDefault.Millis.MINUTE;
let c9 = false;
let c10 = null;
let c11 = 0;
let result = require("set").fileFinishedImporting("modules/age_assurance/ManualReviewActionCreators.tsx");

export const ManualReviewStatus = obj;
export function invalidateManualReviewCache() {
  c10 = null;
}
export const handleManualReviewCta = function handleManualReviewCta() {
  const self = this;
  const apply = _handleManualReviewCta.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};