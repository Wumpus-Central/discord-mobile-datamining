// discord_app/modules/user_settings/GuildThemeSourcePreferenceUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import create from "../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";

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