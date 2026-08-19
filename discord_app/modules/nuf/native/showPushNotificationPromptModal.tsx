// === Module 15264: showPushNotificationPromptModal ===

// Module 15264 (showPushNotificationPromptModal)
import obj132 from "obj132" /* 2 */;
import _modDef5260 from "module_5260" /* 5260 */;
import set from "set" /* 11578 */;
import NewUserTypes from "NewUserTypes" /* 11878 */;

const PermissionStateType = set.PermissionStateType;
let closure_4 = NewUserTypes.NUF_NOTIFICATION_MODAL_KEY;
let result = obj132.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  const obj = {
    onComplete() {
      _modDef5260.popWithKey(closure_1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2007)(15265, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11584).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};