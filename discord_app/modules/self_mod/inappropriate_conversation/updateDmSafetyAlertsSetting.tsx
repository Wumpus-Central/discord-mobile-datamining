// discord_app/modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx
import set from "../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(arg0) {
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = require("../../user_settings/UserSettingsProtoActionCreators.tsx").PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", (arg0) => {
    const BoolValue = callback(closure_1_1[1]).BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value: callback });
  }, require("../../user_settings/UserSettingsProtoActionCreators.tsx").UserSettingsDelay.INFREQUENT_USER_ACTION);
};