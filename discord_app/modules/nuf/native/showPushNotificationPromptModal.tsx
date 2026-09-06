// === Module 15998: showPushNotificationPromptModal ===

// Module 15998 (showPushNotificationPromptModal)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 12409 */;
import NUFConstants from "NUFConstants" /* 12705 */;
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
  obj.pushLazy(onComplete(1896)(15999, dependencyMap.paths), obj, closure_4);
  const result = onComplete(12412).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};