// discord_app/modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx
import RootNavigationRef from "../../../../main_tabs_v2/RootNavigationRef.native.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_3 = fn(15946).doesRegistrationHaveIdentityType;
const RegistrationConstants = fn(15947);
({ RegisterTransitionSteps: closure_4, RegistrationTransitionActionTypes: hasOwnProperty } = RegistrationConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx");

export const useIsHCaptchaModalOpenTracking = function useIsHCaptchaModalOpenTracking() {
  context = noop.useContext(context(15943).TrackRegistrationContext);
  const items = [context];
  const layoutEffect = noop.useLayoutEffect(() => {
    const rootNavigationRef = RootNavigationRef.getRootNavigationRef();
    let current;
    if (rootNavigationRef != null) {
      current = rootNavigationRef.current;
    }
    if (null != current) {
      return rootNavigationRef.addListener("state", () => {
        let obj = context(dependencyMap[5]);
        let isModalOpenResult = obj.isModalOpen("hcaptcha");
        if (isModalOpenResult) {
          isModalOpenResult = closure_2_3();
        }
        if (isModalOpenResult) {
          obj = { step: constants.CAPTCHA, actionType: constants2.VIEWED };
          closure_1_0(obj);
        }
      });
    }
  }, items);
};
