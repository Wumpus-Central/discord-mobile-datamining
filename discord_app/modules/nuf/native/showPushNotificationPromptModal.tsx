// === Module 16031: showPushNotificationPromptModal ===

// Module 16031 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4777 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12439 */;
import NUFConstants from "NUFConstants" /* 12735 */;
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
  obj.pushLazy(onComplete(1896)(16032, dependencyMap.paths), obj, closure_4);
  const result = onComplete(12442).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};