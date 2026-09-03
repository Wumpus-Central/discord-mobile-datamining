// === Module 15836: showPushNotificationPromptModal ===

// Module 15836 (showPushNotificationPromptModal)
import set from "set" /* 2 */;
import _modDef4724 from "module_4724" /* 4724 */;
import set2 from "set" /* 12209 */;
import NewUserTypes from "NewUserTypes" /* 12479 */;

const PermissionStateType = set2.PermissionStateType;
let closure_4 = NewUserTypes.NUF_NOTIFICATION_MODAL_KEY;
let result = set.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = _modDef4724;
  obj = {
    onComplete() {
      closure_1_1(closure_1_2[2]).popWithKey(closure_1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2008)(15837, dependencyMap.paths), obj, closure_4);
  const result = onComplete(12212).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};