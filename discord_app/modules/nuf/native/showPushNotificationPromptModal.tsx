// === Module 15520: showPushNotificationPromptModal ===

// Module 15520 (showPushNotificationPromptModal)
import set from "set" /* 2 */;
import _modDef4689 from "module_4689" /* 4689 */;
import set2 from "set" /* 11911 */;
import NewUserTypes from "NewUserTypes" /* 12176 */;

const PermissionStateType = set2.PermissionStateType;
let closure_4 = NewUserTypes.NUF_NOTIFICATION_MODAL_KEY;
let result = set.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = _modDef4689;
  obj = {
    onComplete() {
      closure_1_1(closure_1_2[2]).popWithKey(closure_1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2010)(15521, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11914).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};