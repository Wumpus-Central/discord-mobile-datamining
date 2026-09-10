// === Module 16080: showPushNotificationPromptModal ===

// Module 16080 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12479 */;
import NUFConstants from "NUFConstants" /* 12775 */;
import size from "module_2" /* 2 */;

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  const obj = {
    onComplete() {
      ModalActionCreatorsDefault.popWithKey(closure_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1896)(16081, dependencyMap.paths), obj, closure_4);
  const result = onComplete(12482).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};