// === Module 1236: GuildThemeSourcePreferenceUtils ===

// Module 1236 (GuildThemeSourcePreferenceUtils)
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_settings/GuildThemeSourcePreferenceUtils.tsx");

export const resolveDefaultGuildThemePreference = function resolveDefaultGuildThemePreference(arg0) {
  let GUILD;
  if (arg0 === preloaded_user_settings.GuildThemeSourcePreference.PERSONAL) {
    GUILD = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
};
export const resolveGuildThemeSourcePreference = function resolveGuildThemeSourcePreference(arg0, arg1) {
  let tmp3 = arg0;
  if (arg0 !== preloaded_user_settings.GuildThemeSourcePreference.GUILD) {
    tmp3 = arg0;
    if (arg0 !== preloaded_user_settings.GuildThemeSourcePreference.PERSONAL) {
      let GUILD;
      if (arg1 === preloaded_user_settings.GuildThemeSourcePreference.PERSONAL) {
        GUILD = preloaded_user_settings.GuildThemeSourcePreference.PERSONAL;
      } else {
        GUILD = preloaded_user_settings.GuildThemeSourcePreference.GUILD;
      }
      tmp3 = GUILD;
    }
  }
  return tmp3;
};