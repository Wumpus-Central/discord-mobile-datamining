// discord_app/modules/user_settings/GuildThemeSourcePreferenceUtils.tsx
import preloaded_user_settings from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/user_settings/GuildThemeSourcePreferenceUtils.tsx");

export const resolveDefaultGuildThemePreference = function resolveDefaultGuildThemePreference(arg0) {
  if (arg0 === preloaded_user_settings.GuildThemeSourcePreference.PERSONAL) {
    let GUILD = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
};
export const resolveGuildThemeSourcePreference = function resolveGuildThemeSourcePreference(
  guildThemeSourcePreferenceOverride,
  defaultGuildThemePreference,
) {
  let GuildThemeSourcePreference = dependencyMap;
  let tmp2 = guildThemeSourcePreferenceOverride;
  if (guildThemeSourcePreferenceOverride !== preloaded_user_settings.GuildThemeSourcePreference.GUILD) {
    tmp2 = guildThemeSourcePreferenceOverride;
    if (guildThemeSourcePreferenceOverride !== preloaded_user_settings.GuildThemeSourcePreference.PERSONAL) {
      if (defaultGuildThemePreference === preloaded_user_settings.GuildThemeSourcePreference.PERSONAL) {
        GuildThemeSourcePreference = preloaded_user_settings.GuildThemeSourcePreference;
        let GUILD = GuildThemeSourcePreference.PERSONAL;
      } else {
        GUILD = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
      }
    }
  }
  return tmp2;
};
