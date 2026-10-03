// === Module 16078: useShouldShowGuildThemeMemberCoachmark ===

// Module 16078 (useShouldShowGuildThemeMemberCoachmark)
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4768 */;
import ServerThemeUserExperiment from "ServerThemeUserExperiment" /* 4772 */;
import ServerThemeExperiment from "ServerThemeExperiment" /* 4773 */;
import useGuildPowerupsBoostCountDefault from "useGuildPowerupsBoostCount" /* 7671 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12170 */;
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled" /* 16079 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = GuildPowerupsConstants.GUILD_THEME_POWERUP_BOOST_PRICE;
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const tmp = useHasAllocateBoostPermissionDefault(arg0);
  let serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(arg0, "useShouldShowGuildThemeMemberCoachmark");
  const serverThemeUserEnabled = ServerThemeUserExperiment.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const serverThemeRollbackEnabled = ServerThemeExperiment.useServerThemeRollbackEnabled(arg0, "useShouldShowGuildThemeMemberCoachmark");
  const tmp5 = useIsGuildThemePerkEnabledDefault(arg0);
  const isLoading = useGuildPowerupsBoostCountDefault(arg0).isLoading;
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
}) : ((arg0) => {
  const tmp = useHasAllocateBoostPermissionDefault(arg0);
  let serverThemeEnabled = ServerThemeExperiment.useServerThemeEnabled(arg0, "useShouldShowGuildThemeMemberCoachmark");
  const serverThemeUserEnabled = ServerThemeUserExperiment.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const serverThemeRollbackEnabled = ServerThemeExperiment.useServerThemeRollbackEnabled(arg0, "useShouldShowGuildThemeMemberCoachmark");
  const tmp5 = useIsGuildThemePerkEnabledDefault(arg0);
  const isLoading = useGuildPowerupsBoostCountDefault(arg0).isLoading;
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
});