// === Module 16332: useIsHCaptchaModalOpenTracking ===

// Module 16332 (useIsHCaptchaModalOpenTracking)
import RootNavigationRef from "RootNavigationRef" /* 4938 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(16281).doesRegistrationHaveIdentityType;
const RegistrationConstants = fn(16282);
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export const useIsHCaptchaModalOpenTracking = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsHCaptchaModalOpenTracking() {
  const cResult = context(576).c(3);
  context = noop.useContext(context(16278).TrackRegistrationContext);
  if (cResult[0] !== context) {
    const fn = function s() {
      const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
      let current;
      if (rootNavigationRef != null) {
        current = rootNavigationRef.current;
      }
      if (null != current) {
        return rootNavigationRef.addListener("state", () => {
          let isModalOpenResult = context(dependencyMap[7]).isModalOpen("hcaptcha");
          if (isModalOpenResult) {
            isModalOpenResult = closure_2_3();
          }
          if (isModalOpenResult) {
            const obj2 = { step: constants.CAPTCHA, actionType: constants2.VIEWED };
            closure_1_0(obj2);
          }
          const obj = context(dependencyMap[7]);
        });
      }
    };
    const items = [context];
    cResult[0] = context;
    cResult[1] = fn;
    cResult[2] = items;
    let tmp4 = items;
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
  }
  const layoutEffect = noop.useLayoutEffect(tmp3, tmp4);
  let obj = context(576);
}) : (function useIsHCaptchaModalOpenTracking() {
  context = noop.useContext(context(16278).TrackRegistrationContext);
  const items = [context];
  const layoutEffect = noop.useLayoutEffect(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    let current;
    if (rootNavigationRef != null) {
      current = rootNavigationRef.current;
    }
    if (null != current) {
      return rootNavigationRef.addListener("state", () => {
        let isModalOpenResult = context(dependencyMap[7]).isModalOpen("hcaptcha");
        if (isModalOpenResult) {
          isModalOpenResult = closure_2_3();
        }
        if (isModalOpenResult) {
          const obj2 = { step: constants.CAPTCHA, actionType: constants2.VIEWED };
          closure_1_0(obj2);
        }
        const obj = context(dependencyMap[7]);
      });
    }
  }, items);
});