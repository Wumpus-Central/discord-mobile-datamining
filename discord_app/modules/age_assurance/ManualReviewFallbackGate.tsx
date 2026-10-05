// === Module 8111: ManualReviewFallbackGate ===

// Module 8111 (ManualReviewFallbackGate)
import SafetyHubUtils from "SafetyHubUtils" /* 8092 */;
import ManualAgeAssuranceFallbackExperiment from "ManualAgeAssuranceFallbackExperiment" /* 8112 */;
import AgeVerificationMethodsV2 from "AgeVerificationMethodsV2" /* 8113 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c3, c4;

let cleanupPromise = null;
let result = size.fileFinishedImporting("modules/age_assurance/ManualReviewFallbackGate.tsx");

export const shouldShowManualReviewFallback = function shouldShowManualReviewFallback(AUTOMATED_UNDERAGE_APPEALS) {
  let resolved;
  let obj = ManualAgeAssuranceFallbackExperiment;
  if (obj.isManualAgeAssuranceFallbackEnabled(AUTOMATED_UNDERAGE_APPEALS)) {
    const tmp3 = cleanupPromise;
    const tmp4 = null;
    if (null == cleanupPromise) {
      const promise = (async () => {
        let obj5;
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
            return { value: "IconComponent", done: null };
          }
        } else {
          let c2;
          try {
            let closure_0;
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_1 = tmp;
                closure_0 = undefined;
                c2 = 1;
                const obj13 = SafetyHubUtils;
                const result = obj13.isCurrentUserSuspended();
                const obj14 = AgeVerificationMethodsV2;
                if (result) {
                  c3 = 3;
                  c4 = 1;
                  const obj6 = { value: obj14.fetchAgeVerificationMethodsV2SuspendedUser(), done: false };
                  return obj6;
                } else {
                  c3 = 2;
                  c4 = 1;
                  const obj7 = { value: obj14.fetchAgeVerificationMethodsV2(), done: false };
                  return obj7;
                }
              }
            } else if (1 === c3) {
              c2 = 0;
              c4 = 3;
              return { value: false, done: true };
            } else {
              if (2 === c3) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c4 = 3;
                  const obj8 = { value, done: true };
                  return obj8;
                }
              } else {
                let flag;
                if (3 === c3) {
                  if (arg0 === 1) {
                    c4 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 0;
                    c4 = 3;
                    const obj9 = { value, done: true };
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c4 = 3;
                  const obj = { value, done: true };
                  return obj;
                } else {
                  flag = 0 === value.length;
                }
                c2 = 0;
                c4 = 3;
                const obj10 = { value: flag, done: true };
                return obj10;
              }
              closure_0 = value;
              const obj11 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: closure_0.methods, footerMessage: closure_0.footerMessage, outageBannerMessage: closure_0.outageBannerMessage };
              const obj3 = closure_129_1(closure_129_2[4]);
              obj3.dispatch(obj11);
              flag = false;
              if (null == closure_0.outageBannerMessage) {
                c3 = 4;
                c4 = 1;
                const obj12 = { value: obj5.getAvailableMethodsV2(closure_0.methods), done: false };
                obj5 = closure_129_0(closure_129_2[5]);
                return obj12;
              }
            }
          } catch (tmp19) {
            if (0 === c2) {
              c4 = 3;
              throw tmp19;
            } else {
              c3 = 1;
            }
          }
        }
      })();
      cleanupPromise = promise.finally(() => {
        c4 = null;
      });
    }
    resolved = cleanupPromise;
  } else {
    const tmp = globalThis;
    let flag = false;
    resolved = Promise.resolve(false);
  }
  return resolved;
};