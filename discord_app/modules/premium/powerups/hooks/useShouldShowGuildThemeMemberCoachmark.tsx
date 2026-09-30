// === Module 15989: useShouldShowGuildThemeMemberCoachmark ===

// Module 15989 (useShouldShowGuildThemeMemberCoachmark)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4754 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 4773 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4790 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4791 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12212 */;
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled" /* 15990 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildPowerupsConstants.GUILD_THEME_POWERUP_BOOST_PRICE;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = useHasAllocateBoostPermissionDefault(guildId);
  let serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const serverThemeUserEnabled = ServerThemeUserExperiment.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const serverThemeRollbackEnabled = ServerThemeExperiment.useServerThemeRollbackEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const tmp5 = useIsGuildThemePerkEnabledDefault(guildId);
  const isLoading = useGuildPowerupsBoostCountDefault(guildId).isLoading;
  let tmp8 = !isLoading;
  if (!isLoading) {
    if (serverThemeEnabled) {
      serverThemeEnabled = serverThemeUserEnabled;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = !serverThemeRollbackEnabled;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = tmp7 < closure_3;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = !tmp5;
    }
    if (serverThemeEnabled) {
      serverThemeEnabled = false === tmp;
    }
    tmp8 = serverThemeEnabled;
  }
  return tmp8;
};