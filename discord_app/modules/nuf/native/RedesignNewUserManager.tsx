// === Module 16658: prototype ===

// Module 16658 (prototype)
import obj132 from "obj132" /* 2 */;
import initializeDefault from "initialize" /* 5038 */;
import ContactSyncModes from "ContactSyncModes" /* 11850 */;
import initialize from "initialize" /* 4494 */;

({ initialize: c3, ContactSyncModes: c4 } = ContactSyncModes);
initializeDefault;
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
    callback(applyArgumentsResult(table[3]).hasDeferredInvite() ? constants.ONBOARDING_INVITE : constants.ONBOARDING);
    let obj = applyArgumentsResult(table[3]);
    const nextOnboardingStep = applyArgumentsResult(table[4]).getNextOnboardingStep(false, -1, -1);
    nextOnboardingStep.then((result) => {
      ({ lastShownStepIndex, onboardingStepIndex } = result);
      let obj = callback(table[4]);
      const keyForOnboardingStep = obj.getKeyForOnboardingStep(onboardingStepIndex);
      if (null != keyForOnboardingStep) {
        const obj3 = callback2(table[5]);
        const tmp11 = callback(table[7])(table[6], table.paths);
        obj = { initialRouteName: null, initialOnboardingStepIndex: null };
        obj[0] = keyForOnboardingStep;
        obj[1] = onboardingStepIndex;
        const NEW_USER_MODAL_KEY = callback(table[8]).NEW_USER_MODAL_KEY;
        let str = "card";
        if (tmpResult.isAndroid()) {
          str = "transparentModal";
        }
        obj = { fullScreenGestureEnabled: false, presentation: null, animation: "slide_from_bottom" };
        obj[1] = str;
        obj3.pushLazy(tmp11, obj, NEW_USER_MODAL_KEY, obj);
        tmpResult = callback(table[9]);
      }
    });
    let tmpResult = applyArgumentsResult(table[4]);
  };
  applyArgumentsResult.handleOnboardingStart = function handleOnboardingStart() {
    applyArgumentsResult.startOnboarding();
  };
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    if (null != closure_1_5.getType()) {
      if (!obj.isModalOpen()) {
        applyArgumentsResult.startOnboarding();
      }
      obj = applyArgumentsResult(dependencyMap[10]);
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const result = obj132.fileFinishedImporting("modules/nuf/native/RedesignNewUserManager.tsx");

export default prototype;