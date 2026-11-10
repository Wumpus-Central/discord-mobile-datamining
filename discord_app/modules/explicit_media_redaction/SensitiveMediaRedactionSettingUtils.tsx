// === Module 7538: SensitiveMediaRedactionSettingUtils ===

// Module 7538 (SensitiveMediaRedactionSettingUtils)
import apply from "apply" /* 12 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1196 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx");

export function getShouldObscureForSetting(tmp10Result) {
  return tmp10Result === preloaded_user_settings.ExplicitContentRedaction.BLUR || tmp10Result === preloaded_user_settings.ExplicitContentRedaction.BLOCK;
}
export function areSettingsEqual(arg0, arg1) {
  return apply.isEqual(arg0, arg1);
}