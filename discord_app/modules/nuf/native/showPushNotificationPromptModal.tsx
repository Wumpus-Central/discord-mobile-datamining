// === Module 15554: showPushNotificationPromptModal ===

// Module 15554 (showPushNotificationPromptModal)
import set from "set" /* 2 */;
import _modDef4691 from "module_4691" /* 4691 */;
import set2 from "set" /* 11945 */;
import NewUserTypes from "NewUserTypes" /* 12210 */;

const PermissionStateType = set2.PermissionStateType;
let closure_4 = NewUserTypes.NUF_NOTIFICATION_MODAL_KEY;
let result = set.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = _modDef4691;
  obj = {
    onComplete() {
      closure_1_1(closure_1_2[2]).popWithKey(closure_1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2009)(15555, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11948).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};