import { PermissionStateType } from "set";
import { NUF_NOTIFICATION_MODAL_KEY as closure_4 } from "NewUserTypes";

let result = require("module_4490").fileFinishedImporting("modules/nuf/native/showPushNotificationPromptModal.tsx");

export const showPushNotificationPromptModal = function showPushNotificationPromptModal(onComplete) {
  onComplete = onComplete.onComplete;
  let obj = importDefault(4490);
  obj = {
    onComplete() {
      outer1_1(outer1_2[2]).popWithKey(outer1_4);
      onComplete();
    }
  };
  obj.pushLazy(onComplete(1959)(15030, dependencyMap.paths), obj, closure_4);
  const result = onComplete(11693).setPushPermissionState(PermissionStateType.PROMPT_SEEN);
};