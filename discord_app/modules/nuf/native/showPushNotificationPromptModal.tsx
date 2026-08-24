// === Module 15328: showPushNotificationPromptModal ===

// Module 15328 (showPushNotificationPromptModal)
import set from "set" /* 2 */;
import _modDef5265 from "module_5265" /* 5265 */;
import set2 from "set" /* 11627 */;
import NewUserTypes from "NewUserTypes" /* 11927 */;

const PermissionStateType = set2.PermissionStateType;
let closure_4 = NewUserTypes.NUF_NOTIFICATION_MODAL_KEY;
let result = set.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = _modDef5265;
  obj = {
    onComplete() {
      closure_1_1(closure_1_2[2]).popWithKey(closure_1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2008)(15329, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11633).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};