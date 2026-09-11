// === Module 16229: useShouldShowGuildThemeMemberCoachmark ===

// Module 16229 (useShouldShowGuildThemeMemberCoachmark)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4496 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 4515 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4534 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4535 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12606 */;
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled" /* 16230 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildPowerupsConstants.GUILD_THEME_POWERUP_BOOST_PRICE;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = useHasAllocateBoostPermissionDefault(guildId);
  let serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const serverThemeUserEnabled = ServerThemeUserExperiment.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const tmp4 = useIsGuildThemePerkEnabledDefault(guildId);
  const isLoading = useGuildPowerupsBoostCountDefault(guildId).isLoading;
  let tmp7 = !isLoading;
  if (!isLoading) {
    if (serverThemeEnabled) {
      serverThemeEnabled = serverThemeUserEnabled;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = tmp6 < closure_3;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = !tmp4;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = false === tmp;
    }
    tmp7 = serverThemeEnabled;
  }
  return tmp7;
};