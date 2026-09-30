// === Module 15823: showPushNotificationPromptModal ===

// Module 15823 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5069 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12107 */;
import NUFConstants from "NUFConstants" /* 12403 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(1981)(15824, dependencyMap.paths), {
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
  const result = onComplete(12110).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};