// === Module 17654: showPushNotificationPromptModal ===

// Module 17654 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13329 */;
import NUFConstants from "NUFConstants" /* 13648 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(2119)(17655, dependencyMap.paths), {
    onComplete: function closeModal() {
      ModalActionCreatorsDefault.popWithKey(closure_4);
      onComplete();
    }
  }, closure_4);
  const obj2 = {
    onComplete: function closeModal() {
      ModalActionCreatorsDefault.popWithKey(closure_4);
      onComplete();
    }
  };
  const result = onComplete(13332).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}