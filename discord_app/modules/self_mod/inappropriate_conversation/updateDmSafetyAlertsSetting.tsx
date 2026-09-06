// === Module 14835: updateDmSafetyAlertsSetting ===

// Module 14835 (updateDmSafetyAlertsSetting)
import wrappers from "wrappers" /* 1218 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(value) {
  _require = value;
  const PreloadedUserSettingsActionCreators = require("UserSettingsProtoActionCreators").PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", async (arg0) => {
    const BoolValue = wrappers.BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value });
  }, require("UserSettingsProtoActionCreators").UserSettingsDelay.INFREQUENT_USER_ACTION);
};