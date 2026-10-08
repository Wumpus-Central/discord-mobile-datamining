// === Module 16219: showPushNotificationPromptModal ===

// Module 16219 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12140 */;
import NUFConstants from "NUFConstants" /* 12465 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1999)(16220, dependencyMap.paths), {
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
  const result = onComplete(12143).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};