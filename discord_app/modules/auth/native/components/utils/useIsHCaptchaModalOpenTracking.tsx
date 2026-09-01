// === Module 15586: useIsHCaptchaModalOpenTracking ===

// Module 15586 (useIsHCaptchaModalOpenTracking)
import closure_2 from "noop" /* 19 */;
import { doesRegistrationHaveIdentityType as closure_3 } from "useRegistrationUIStore" /* 15537 */;
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes" /* 15538 */;

const require = arg1;
({ RegisterTransitionSteps: c4, RegistrationTransitionActionTypes: c5 } = RegistrationTransitionActionTypes);
const result = require("set").fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export const useIsHCaptchaModalOpenTracking = function useIsHCaptchaModalOpenTracking() {
  context = React.useContext(context(15534).TrackRegistrationContext);
  const items = [context];
  const layoutEffect = React.useLayoutEffect(() => {
    const rootNavigationRef = context(closure_1_1[4]).getRootNavigationRef();
    let current;
    if (rootNavigationRef != null) {
      current = rootNavigationRef.current;
    }
    if (null != current) {
      return rootNavigationRef.addListener("state", () => {
        let obj = closure_1_0(closure_1_1[5]);
        let isModalOpenResult = obj.isModalOpen("hcaptcha");
        if (isModalOpenResult) {
          isModalOpenResult = closure_1_3();
        }
        if (isModalOpenResult) {
          obj = { step: null, actionType: null };
          obj[0] = closure_1_4.CAPTCHA;
          obj[1] = closure_1_5.VIEWED;
          callback(obj);
        }
      });
    }
    let obj = context(closure_1_1[4]);
  }, items);
};