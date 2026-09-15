// === Module 17599: RedesignNewUserManager ===

// Module 17599 (RedesignNewUserManager)
import NavigationRouteUtils from "NavigationRouteUtils" /* 4497 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12812 */;
import NewUserStore from "NewUserStore" /* 5644 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7225 */;
import size from "module_2" /* 2 */;

({ initialize: c3, ContactSyncModes: closure_4 } = ContactSyncModalStore);
const prototype = function RedesignNewUserManager() {
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
      const keyForOnboardingStep = closure_1_0(paths[4]).getKeyForOnboardingStep(onboardingStepIndex);
      if (null != keyForOnboardingStep) {
        const obj3 = closure_1_1(paths[5]);
        const tmp11 = closure_1_0(paths[7])(paths[6], paths.paths);
        const obj2 = { initialRouteName: keyForOnboardingStep, initialOnboardingStepIndex: onboardingStepIndex };
        const NEW_USER_MODAL_KEY = closure_1_0(paths[8]).NEW_USER_MODAL_KEY;
        let str = "card";
        if (tmpResult.isAndroid()) {
          str = "transparentModal";
        }
        const obj4 = { fullScreenGestureEnabled: false, presentation: str, animation: "slide_from_bottom" };
        obj3.pushLazy(tmp11, obj2, NEW_USER_MODAL_KEY, obj4);
        tmpResult = closure_1_0(paths[9]);
      }
      const obj = closure_1_0(paths[4]);
    });
    let tmpResult = applyArgumentsResult(dependencyMap[4]);
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
const prototype1 = new prototype();
const result = size.fileFinishedImporting("modules/nuf/native/RedesignNewUserManager.tsx");

export default prototype1;