// === Module 8463: ManualReviewFallbackGate ===

// Module 8463 (ManualReviewFallbackGate)
import SafetyHubUtils from "SafetyHubUtils" /* 8446 */;
import ManualAgeAssuranceFallbackExperiment from "ManualAgeAssuranceFallbackExperiment" /* 8464 */;
import AgeVerificationMethodsV2 from "AgeVerificationMethodsV2" /* 8465 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/ManualReviewFallbackGate.tsx");

export const shouldShowManualReviewFallback = function shouldShowManualReviewFallback(AUTOMATED_UNDERAGE_APPEALS) {
  if (obj.isManualAgeAssuranceFallbackEnabled(AUTOMATED_UNDERAGE_APPEALS)) {
    if (null == cleanupPromise) {
      cleanupPromise = asyncGeneratorStep(async () => {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
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
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_1 = tmp3;
                closure_0 = tmp7;
                closure_128_0 = undefined;
                c2 = 1;
                const result = SafetyHubUtils.isCurrentUserSuspended();
                const obj14 = AgeVerificationMethodsV2;
                if (result) {
                  c3 = 3;
                  c4 = 1;
                  const obj1 = { value: obj14.fetchAgeVerificationMethodsV2SuspendedUser(), done: false };
                  return obj1;
                } else {
                  c3 = 2;
                  c4 = 1;
                  const obj2 = { value: obj14.fetchAgeVerificationMethodsV2(), done: false };
                  return obj2;
                }
              }
            } else if (1 === tmp7) {
              c2 = 0;
              c4 = 3;
              return { value: false, done: true };
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c4 = 3;
                  let obj3 = { value, done: true };
                  return obj3;
                }
              } else if (3 === tmp7) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c4 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c4 = 3;
                let obj5 = { value, done: true };
                return obj5;
              } else {
                c2 = 0;
                c4 = 3;
                obj = { value: 0 === value.length, done: true };
                return obj;
              }
              closure_128_0 = value;
              obj3 = closure_129_1(closure_129_2[4]);
              const obj6 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: closure_128_0.methods, footerMessage: closure_128_0.footerMessage, outageBannerMessage: closure_128_0.outageBannerMessage };
              obj3.dispatch(obj6);
              obj5 = closure_129_0(closure_129_2[5]);
              c3 = 4;
              c4 = 1;
              const obj7 = { value: obj5.getAvailableMethodsV2(closure_128_0.methods), done: false };
              return obj7;
            }
          } catch (tmp19) {
            if (tmp4 === c2) {
              c4 = tmp2;
              throw tmp19;
            } else {
              c3 = tmp;
            }
          }
        }
      })().finally(() => {
        c4 = null;
      });
      const promise = (async () => {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp6 === 3) {
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
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_1 = tmp3;
                closure_0 = tmp7;
                closure_128_0 = undefined;
                c2 = 1;
                const result = SafetyHubUtils.isCurrentUserSuspended();
                const obj14 = AgeVerificationMethodsV2;
                if (result) {
                  c3 = 3;
                  c4 = 1;
                  const obj1 = { value: obj14.fetchAgeVerificationMethodsV2SuspendedUser(), done: false };
                  return obj1;
                } else {
                  c3 = 2;
                  c4 = 1;
                  const obj2 = { value: obj14.fetchAgeVerificationMethodsV2(), done: false };
                  return obj2;
                }
              }
            } else if (1 === tmp7) {
              c2 = 0;
              c4 = 3;
              return { value: false, done: true };
            } else {
              if (2 === tmp7) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c4 = 3;
                  let obj3 = { value, done: true };
                  return obj3;
                }
              } else if (3 === tmp7) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c2 = 0;
                  c4 = 3;
                  const obj4 = { value, done: true };
                  return obj4;
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c4 = 3;
                let obj5 = { value, done: true };
                return obj5;
              } else {
                c2 = 0;
                c4 = 3;
                obj = { value: 0 === value.length, done: true };
                return obj;
              }
              closure_128_0 = value;
              obj3 = closure_129_1(closure_129_2[4]);
              const obj6 = { type: "AGE_VERIFICATION_METHODS_V2_LOAD_SUCCESS", methods: closure_128_0.methods, footerMessage: closure_128_0.footerMessage, outageBannerMessage: closure_128_0.outageBannerMessage };
              obj3.dispatch(obj6);
              obj5 = closure_129_0(closure_129_2[5]);
              c3 = 4;
              c4 = 1;
              const obj7 = { value: obj5.getAvailableMethodsV2(closure_128_0.methods), done: false };
              return obj7;
            }
          } catch (tmp19) {
            if (tmp4 === c2) {
              c4 = tmp2;
              throw tmp19;
            } else {
              c3 = tmp;
            }
          }
        }
      })();
    }
  } else {
    return Promise.resolve(false);
  }
  obj = ManualAgeAssuranceFallbackExperiment;
};