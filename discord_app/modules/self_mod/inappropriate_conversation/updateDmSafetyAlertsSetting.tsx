import { updateUserGuildSettings } from "../../user_settings/UserSettingsProtoActionCreators.tsx";
// discord_app/modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx
const result = require("set").fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(arg0) {
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = _updateUserGuildSettings.PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", (arg0) => {
    const BoolValue = callback(outer1_1[1]).BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value: callback });
  }, _updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
};