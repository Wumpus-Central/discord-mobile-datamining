// === Module 18365: showPushNotificationPromptModal ===

// Module 18365 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14206 */;
import NUFConstants from "NUFConstants" /* 14512 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  ModalActionCreatorsDefault.pushLazy(onComplete(2118)(18366, dependencyMap.paths), {
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
  const result = onComplete(14209).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
}