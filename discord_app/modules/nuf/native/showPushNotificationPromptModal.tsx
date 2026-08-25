// discord_app/modules/nuf/native/showPushNotificationPromptModal.tsx
import set from "../../../../_runtime/00002_set.js";
import _modDef4611 from "../../../actions/ModalActionCreators.tsx";
import set2 from "../../../stores/native/PushNotificationPermissionStore.tsx";
import NewUserTypes from "../NUFConstants.tsx";

const PermissionStateType = set2.PermissionStateType;
let closure_4 = NewUserTypes.NUF_NOTIFICATION_MODAL_KEY;
let result = set.fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = _modDef4611;
  obj = {
    onComplete() {
      closure_1_1(closure_1_2[2]).popWithKey(closure_1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(2009)(15359, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11976).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};