// discord_app/modules/nuf/native/showPushNotificationPromptModal.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";
import set from "../../../stores/native/PushNotificationPermissionStore.tsx";
import NewUserTypes from "../NUFConstants.tsx";

const PermissionStateType = set.PermissionStateType;
let closure_4 = NewUserTypes.NUF_NOTIFICATION_MODAL_KEY;
let result = obj132.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  const obj = {
    onComplete() {
      _modDef5260.popWithKey(closure_1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2007)(15265, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11584).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};