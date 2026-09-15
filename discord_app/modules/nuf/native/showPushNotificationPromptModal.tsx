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
  ModalActionCreatorsDefault.pushLazy(
    onComplete(1897)(16109, dependencyMap.paths),
    {
      onComplete() {
        ModalActionCreatorsDefault.popWithKey(closure_4);
        onComplete();
      },
    },
    closure_4,
  );
  const obj2 = {
    onComplete() {
      ModalActionCreatorsDefault.popWithKey(closure_4);
      onComplete();
    },
  };
  const result = onComplete(12547).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};
