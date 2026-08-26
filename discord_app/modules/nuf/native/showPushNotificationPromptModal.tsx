// === Module 15437: showPushNotificationPromptModal ===

// Module 15437 (showPushNotificationPromptModal)
import set from "set" /* 2 */;
import _modDef4675 from "module_4675" /* 4675 */;
import set2 from "set" /* 12046 */;
import NewUserTypes from "NewUserTypes" /* 12333 */;

const PermissionStateType = set2.PermissionStateType;
let closure_4 = NewUserTypes.NUF_NOTIFICATION_MODAL_KEY;
let result = set.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = _modDef4675;
  obj = {
    onComplete() {
      closure_1_1(closure_1_2[2]).popWithKey(closure_1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2009)(15438, dependencyMap.paths), obj, closure_4);
  const result = onComplete(12049).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};