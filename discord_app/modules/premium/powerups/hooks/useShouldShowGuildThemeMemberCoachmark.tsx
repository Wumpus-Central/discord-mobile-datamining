// === Module 15419: useShouldShowGuildThemeMemberCoachmark ===

// Module 15419 (useShouldShowGuildThemeMemberCoachmark)
import obj132 from "obj132" /* 2 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4262 */;
import useGuildAppliedBoostCountDefault from "useGuildAppliedBoostCount" /* 4281 */;
import apexExperiment from "apexExperiment" /* 4303 */;
import experiment from "experiment" /* 4304 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 11682 */;
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled" /* 15420 */;

let closure_3 = BoostedGuildTiers.GUILD_THEME_POWERUP_BOOST_PRICE;
const result = obj132.fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = useHasAllocateBoostPermissionDefault(guildId);
  let serverThemeEnabled = experiment.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const serverThemeUserEnabled = apexExperiment.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const tmp4 = useIsGuildThemePerkEnabledDefault(guildId);
  const isLoading = useGuildAppliedBoostCountDefault(guildId).isLoading;
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