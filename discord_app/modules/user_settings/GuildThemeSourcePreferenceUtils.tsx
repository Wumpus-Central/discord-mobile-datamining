// === Module 1344: resolveDefaultGuildThemePreference ===

// Module 1344 (resolveDefaultGuildThemePreference)
import obj132 from "obj132" /* 2 */;
import create from "create" /* 1306 */;

const result = obj132.fileFinishedImporting("modules/user_settings/GuildThemeSourcePreferenceUtils.tsx");

export const resolveDefaultGuildThemePreference = function resolveDefaultGuildThemePreference(arg0) {
  if (arg0 === create.GuildThemeSourcePreference.PERSONAL) {
    let GUILD = create.GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = create.GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
};
export const resolveGuildThemeSourcePreference = function resolveGuildThemeSourcePreference(arg0, arg1) {
  let GuildThemeSourcePreference = dependencyMap;
  let tmp2 = arg0;
  if (arg0 !== create.GuildThemeSourcePreference.GUILD) {
    tmp2 = arg0;
    if (arg0 !== create.GuildThemeSourcePreference.PERSONAL) {
      if (arg1 === create.GuildThemeSourcePreference.PERSONAL) {
        GuildThemeSourcePreference = create.GuildThemeSourcePreference;
        let GUILD = GuildThemeSourcePreference.PERSONAL;
      } else {
        GUILD = create.GuildThemeSourcePreference.GUILD;
      }
    }
  }
  return tmp2;
};