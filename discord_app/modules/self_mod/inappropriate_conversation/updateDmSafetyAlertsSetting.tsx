// discord_app/modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx
import set from "../../../../_runtime/00002_set.js";
import { updateUserGuildSettings } from "../../user_settings/UserSettingsProtoActionCreators.tsx";

const result = set.fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(arg0) {
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = _updateUserGuildSettings.PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", (arg0) => {
    const BoolValue = callback(closure_1_1[1]).BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value: callback });
  }, _updateUserGuildSettings.UserSettingsDelay.INFREQUENT_USER_ACTION);
};