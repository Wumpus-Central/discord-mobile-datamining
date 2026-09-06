// === Module 17446: RedesignNewUserManager ===

// Module 17446 (RedesignNewUserManager)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12677 */;
import NewUserStore from "NewUserStore" /* 5559 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;
import size from "module_2" /* 2 */;

({ initialize: c3, ContactSyncModes: closure_4 } = ContactSyncModalStore);
let prototype = function RedesignNewUserManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult._onboardingStepIndex = -1;
  applyArgumentsResult._lastShownStepIndex = -1;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN() {
      return applyArgumentsResult.handleConnectionOpen();
    },
    ONBOARDING_START() {
      return applyArgumentsResult.handleOnboardingStart();
    }
  };
  applyArgumentsResult.startOnboarding = function startOnboarding() {
    closure_1_3(applyArgumentsResult(dependencyMap[3]).hasDeferredInvite() ? constants.ONBOARDING_INVITE : constants.ONBOARDING);
    let obj = applyArgumentsResult(dependencyMap[3]);
    const nextOnboardingStep = applyArgumentsResult(dependencyMap[4]).getNextOnboardingStep(false, -1, -1);
    nextOnboardingStep.then((result) => {
      ({ lastShownStepIndex, onboardingStepIndex } = result);
      let obj = closure_1_0(closure_1_2[4]);
      const keyForOnboardingStep = obj.getKeyForOnboardingStep(onboardingStepIndex);
      if (null != keyForOnboardingStep) {
        const obj3 = closure_1_1(tmp2[5]);
        const tmp11 = tmp(tmp2[7])(tmp2[6], tmp2.paths);
        obj = { initialRouteName: keyForOnboardingStep, initialOnboardingStepIndex: onboardingStepIndex };
        const NEW_USER_MODAL_KEY = tmp(tmp2[8]).NEW_USER_MODAL_KEY;
        let str = "card";
        if (tmpResult.isAndroid()) {
          str = "transparentModal";
        }
        obj = { fullScreenGestureEnabled: false, presentation: str, animation: "slide_from_bottom" };
        obj3.pushLazy(tmp11, obj, NEW_USER_MODAL_KEY, obj);
        tmpResult = tmp(tmp2[9]);
      }
    });
  };
  applyArgumentsResult.handleOnboardingStart = function handleOnboardingStart() {
    applyArgumentsResult.startOnboarding();
  };
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    if (null != NewUserStore.getType()) {
      if (!obj.isModalOpen()) {
        applyArgumentsResult.startOnboarding();
      }
      obj = NavigationRouteUtils;
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const result = size.fileFinishedImporting("modules/nuf/native/RedesignNewUserManager.tsx");

export default prototype;