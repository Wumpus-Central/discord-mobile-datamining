// discord_app/modules/nuf/native/showPushNotificationPromptModal.tsx
import { PermissionStateType } from "set";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";

let result = require("module_4509").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = ModalActionCreators;
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1988)(15136, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11781).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};