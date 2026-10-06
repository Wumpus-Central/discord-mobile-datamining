// === Module 15959: showPushNotificationPromptModal ===

// Module 15959 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12067 */;
import NUFConstants from "NUFConstants" /* 12369 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onComplete() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1987)(15960, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(12070);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};