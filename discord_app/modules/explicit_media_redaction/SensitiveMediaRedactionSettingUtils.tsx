// === Module 5024: getShouldObscureForSetting ===

// Module 5024 (getShouldObscureForSetting)
import set from "set" /* 2 */;
import apply from "apply" /* 12 */;
import create from "create" /* 1306 */;

const result = set.fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx");

export const getShouldObscureForSetting = function getShouldObscureForSetting(tmp10Result) {
  return tmp10Result === create.ExplicitContentRedaction.BLUR || tmp10Result === create.ExplicitContentRedaction.BLOCK;
};
export const areSettingsEqual = function areSettingsEqual(arg0, arg1) {
  return apply.isEqual(arg0, arg1);
};