// === Module 7300: SensitiveMediaRedactionSettingUtils ===

// Module 7300 (SensitiveMediaRedactionSettingUtils)
import _mod12 from "module_12" /* 12 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx");

export const getShouldObscureForSetting = function getShouldObscureForSetting(tmp10Result) {
  return tmp10Result === preloaded_user_settings.ExplicitContentRedaction.BLUR || tmp10Result === preloaded_user_settings.ExplicitContentRedaction.BLOCK;
};
export const areSettingsEqual = function areSettingsEqual(arg0, arg1) {
  return _mod12.isEqual(arg0, arg1);
};