// === Module 14192: updateDmSafetyAlertsSetting ===

// Module 14192 (updateDmSafetyAlertsSetting)
import obj132 from "obj132" /* 2 */;

const result = obj132.fileFinishedImporting("modules/self_mod/inappropriate_conversation/updateDmSafetyAlertsSetting.tsx");

export const updateDmSafetyAlertsSetting = function updateDmSafetyAlertsSetting(arg0) {
  const _require = arg0;
  const PreloadedUserSettingsActionCreators = _require(1374).PreloadedUserSettingsActionCreators;
  return PreloadedUserSettingsActionCreators.updateAsync("privacy", (arg0) => {
    const BoolValue = callback(dependencyMap[1]).BoolValue;
    arg0.inappropriateConversationWarnings = BoolValue.create({ value: callback });
  }, _require(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
};