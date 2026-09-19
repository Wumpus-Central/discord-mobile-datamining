// === Module 16323: showPushNotificationPromptModal ===

// Module 16323 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12661 */;
import NUFConstants from "NUFConstants" /* 12956 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1980)(16324, dependencyMap.paths), {
    onComplete() {
      ModalActionCreatorsDefault.popWithKey(closure_4);
      onComplete();
    }
  }, closure_4);
  const obj2 = {
    onComplete() {
      ModalActionCreatorsDefault.popWithKey(closure_4);
      onComplete();
    }
  };
  const result = onComplete(12664).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};