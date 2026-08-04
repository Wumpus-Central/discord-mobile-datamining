// discord_app/modules/nuf/native/RedesignNewUserManager.tsx
import ContactSyncModes from "ContactSyncModes";
import initialize from "initialize";
import "initialize";

let c3;
let c4;
({ initialize: c3, ContactSyncModes: c4 } = ContactSyncModes);
let prototype = function RedesignNewUserManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const require = applyArgumentsResult;
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
    callback(applyArgumentsResult(table[3]).hasDeferredInvite() ? closure_4.ONBOARDING_INVITE : closure_4.ONBOARDING);
    let obj = applyArgumentsResult(table[3]);
    const tmp = applyArgumentsResult;
    const tmp2 = table;
    const nextOnboardingStep = applyArgumentsResult(table[4]).getNextOnboardingStep(false, -1, -1);
    nextOnboardingStep.then((arg0) => {
      let lastShownStepIndex;
      let onboardingStepIndex;
      ({ lastShownStepIndex, onboardingStepIndex } = arg0);
      let obj = callback(table[4]);
      const keyForOnboardingStep = obj.getKeyForOnboardingStep(onboardingStepIndex);
      if (null != keyForOnboardingStep) {
        const obj3 = callback2(tmp2[5]);
        const tmp11 = tmp(tmp2[7])(tmp2[6], tmp2.paths);
        obj = { initialRouteName: null, initialOnboardingStepIndex: null };
        obj[0] = keyForOnboardingStep;
        obj[1] = onboardingStepIndex;
        const NEW_USER_MODAL_KEY = tmp(tmp2[8]).NEW_USER_MODAL_KEY;
        let str = "card";
        if (tmpResult.isAndroid()) {
          str = "transparentModal";
        }
        obj = { fullScreenGestureEnabled: false, presentation: null, animation: "slide_from_bottom" };
        obj[1] = str;
        obj3.pushLazy(tmp11, obj, NEW_USER_MODAL_KEY, obj);
        tmpResult = tmp(tmp2[9]);
      }
    });
  };
  applyArgumentsResult.handleOnboardingStart = function handleOnboardingStart() {
    applyArgumentsResult.startOnboarding();
  };
  applyArgumentsResult.handleConnectionOpen = function handleConnectionOpen() {
    if (null != outer1_5.getType()) {
      if (!obj.isModalOpen()) {
        applyArgumentsResult.startOnboarding();
      }
      obj = applyArgumentsResult(outer1_2[10]);
    }
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp3 {
}
prototype = new prototype();
const result = require("initialize").fileFinishedImporting("modules/nuf/native/RedesignNewUserManager.tsx");

export default prototype;