// === Module 1226: GuildThemeSourcePreferenceUtils ===

// Module 1226 (GuildThemeSourcePreferenceUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/GuildThemeSourcePreferenceUtils.tsx");

export const resolveDefaultGuildThemePreference = function resolveDefaultGuildThemePreference(arg0) {
  if (arg0 === preloaded_user_settings.GuildThemeSourcePreference.PERSONAL) {
    let GUILD = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
};
export const resolveGuildThemeSourcePreference = function resolveGuildThemeSourcePreference(guildThemeSourcePreferenceOverride, defaultGuildThemePreference) {
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