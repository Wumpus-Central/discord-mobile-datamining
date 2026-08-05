// discord_app/modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx");

export const getShouldObscureForSetting = function getShouldObscureForSetting(tmp10Result) {
  return tmp10Result === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.BLUR || tmp10Result === require("../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ExplicitContentRedaction.BLOCK;
};
export const areSettingsEqual = function areSettingsEqual(arg0, arg1) {
  return require("../../../_runtime/00012_apply.js") /* apply */.isEqual(arg0, arg1);
};