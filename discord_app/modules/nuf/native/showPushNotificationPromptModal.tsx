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
  let obj = ModalActionCreatorsDefault;
  const obj2 = {
    onComplete() {
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_4);
      onComplete();
    },
  };
  obj.pushLazy(onComplete(1987)(15960, dependencyMap.paths), obj2, closure_4);
  const obj3 = onComplete(12070);
  const result = obj3.setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
