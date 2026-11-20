// === Module 17376: useIsHCaptchaModalOpenTracking ===

// Module 17376 (useIsHCaptchaModalOpenTracking)
import RootNavigationRef from "RootNavigationRef" /* 4971 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = fn(17324).doesRegistrationHaveIdentityType;
const RegistrationConstants = fn(17325);
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export function useIsHCaptchaModalOpenTracking() {
  context = noop.useContext(context(17321).TrackRegistrationContext);
  items = [context];
  const layoutEffect = noop.useLayoutEffect(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    let current;
    if (rootNavigationRef != null) {
      current = rootNavigationRef.current;
    }
    if (null != current) {
      return rootNavigationRef.addListener("state", () => {
        let isModalOpenResult = context(dependencyMap[5]).isModalOpen("hcaptcha");
        if (isModalOpenResult) {
          isModalOpenResult = closure_2_3();
        }
        if (isModalOpenResult) {
          const obj2 = { step: constants.CAPTCHA, actionType: constants2.VIEWED };
          closure_1_0(obj2);
        }
        const obj = context(dependencyMap[5]);
      });
    }
  }, items);
}