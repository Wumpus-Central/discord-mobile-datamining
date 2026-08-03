import noop from "noop";
import { doesRegistrationHaveIdentityType as closure_3 } from "useRegistrationUIStore";
import RegistrationTransitionActionTypes from "RegistrationTransitionActionTypes";

let c4;
let c5;
const require = arg1;
({ RegisterTransitionSteps: c4, RegistrationTransitionActionTypes: c5 } = RegistrationTransitionActionTypes);
const result = require("RegistrationTransitionActionTypes").fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export const useIsHCaptchaModalOpenTracking = function useIsHCaptchaModalOpenTracking() {
  context = React.useContext(context(14942).TrackRegistrationContext);
  const items = [context];
  const layoutEffect = React.useLayoutEffect(() => {
    const rootNavigationRef = context(outer1_1[4]).getRootNavigationRef();
    let current;
    if (rootNavigationRef != null) {
      current = rootNavigationRef.current;
    }
    if (null != current) {
      return rootNavigationRef.addListener("state", () => {
        let obj = outer1_0(outer1_1[5]);
        let isModalOpenResult = obj.isModalOpen("hcaptcha");
        if (isModalOpenResult) {
          isModalOpenResult = outer1_3();
        }
        if (isModalOpenResult) {
          obj = { step: null, actionType: null };
          obj[0] = outer1_4.CAPTCHA;
          obj[1] = outer1_5.VIEWED;
          callback(obj);
        }
      });
    }
    let obj = context(outer1_1[4]);
  }, items);
};