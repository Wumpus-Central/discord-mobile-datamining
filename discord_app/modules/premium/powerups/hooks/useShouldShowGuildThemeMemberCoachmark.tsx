// === Module 16240: useShouldShowGuildThemeMemberCoachmark ===

// Module 16240 (useShouldShowGuildThemeMemberCoachmark)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4495 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 4514 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4533 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4534 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12583 */;
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled" /* 16241 */;
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