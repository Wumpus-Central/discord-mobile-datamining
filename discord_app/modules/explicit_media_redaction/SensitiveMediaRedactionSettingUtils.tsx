// discord_app/modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx
import _mod12 from "../../../_runtime/metro/00012__.js";
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/explicit_media_redaction/SensitiveMediaRedactionSettingUtils.tsx");

export const getShouldObscureForSetting = function getShouldObscureForSetting(tmp10Result) {
  return (
    tmp10Result === preloaded_user_settings.ExplicitContentRedaction.BLUR ||
    tmp10Result === preloaded_user_settings.ExplicitContentRedaction.BLOCK
  );
};
export const areSettingsEqual = function areSettingsEqual(arg0, arg1) {
  return _mod12.isEqual(arg0, arg1);
};
