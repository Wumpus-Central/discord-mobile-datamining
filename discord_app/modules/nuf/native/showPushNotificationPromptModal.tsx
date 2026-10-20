// === Module 17167: showPushNotificationPromptModal ===

// Module 17167 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 13125 */;
import NUFConstants from "NUFConstants" /* 13428 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(2002)(17168, dependencyMap.paths), {
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
  const result = onComplete(13128).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};