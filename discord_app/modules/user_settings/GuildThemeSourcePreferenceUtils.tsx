// discord_app/modules/user_settings/GuildThemeSourcePreferenceUtils.tsx
import set from "../../../_runtime/00002_set.js";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";

const result = set.fileFinishedImporting("modules/user_settings/GuildThemeSourcePreferenceUtils.tsx");

export const resolveDefaultGuildThemePreference = function resolveDefaultGuildThemePreference(arg0) {
  if (arg0 === create.GuildThemeSourcePreference.PERSONAL) {
    let GUILD = tmp(1187).GuildThemeSourcePreference.PERSONAL;
  } else {
    GUILD = tmp(1187).GuildThemeSourcePreference.GUILD;
  }
  return GUILD;
};
export const resolveGuildThemeSourcePreference = function resolveGuildThemeSourcePreference(arg0, arg1) {
  let GuildThemeSourcePreference = dependencyMap;
  let tmp2 = arg0;
  if (arg0 !== create.GuildThemeSourcePreference.GUILD) {
    tmp2 = arg0;
    if (arg0 !== tmp(1187).GuildThemeSourcePreference.PERSONAL) {
      if (arg1 === tmp(1187).GuildThemeSourcePreference.PERSONAL) {
        GuildThemeSourcePreference = tmp(1187).GuildThemeSourcePreference;
        let GUILD = GuildThemeSourcePreference.PERSONAL;
      } else {
        GUILD = tmp(1187).GuildThemeSourcePreference.GUILD;
      }
    }
  }
  return tmp2;
};
