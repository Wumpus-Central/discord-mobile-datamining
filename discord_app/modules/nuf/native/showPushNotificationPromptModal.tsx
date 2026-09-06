// discord_app/modules/nuf/native/showPushNotificationPromptModal.tsx
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import PushNotificationPermissionStore from "../../../stores/native/PushNotificationPermissionStore.tsx";
import NUFConstants from "../NUFConstants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PermissionStateType = PushNotificationPermissionStore.PermissionStateType;
let closure_4 = NUFConstants.NUF_NOTIFICATION_MODAL_KEY;
let result = size.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  const obj = {
    onComplete() {
      ModalActionCreatorsDefault.popWithKey(closure_4);
      onComplete();
    },
  };
  obj.pushLazy(onComplete(1896)(15999, dependencyMap.paths), obj, closure_4);
  const result = onComplete(12412).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
