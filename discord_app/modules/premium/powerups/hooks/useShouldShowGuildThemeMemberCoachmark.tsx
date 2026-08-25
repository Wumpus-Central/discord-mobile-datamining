// === Module 15515: useShouldShowGuildThemeMemberCoachmark ===

// Module 15515 (useShouldShowGuildThemeMemberCoachmark)
import set from "set" /* 2 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4267 */;
import useGuildAppliedBoostCountDefault from "useGuildAppliedBoostCount" /* 4286 */;
import apexExperiment from "apexExperiment" /* 4308 */;
import experiment from "experiment" /* 4309 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12073 */;
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled" /* 15516 */;

let closure_3 = BoostedGuildTiers.GUILD_THEME_POWERUP_BOOST_PRICE;
const result = set.fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = useHasAllocateBoostPermissionDefault(guildId);
  let serverThemeEnabled = experiment.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const obj = experiment;
  const serverThemeUserEnabled = apexExperiment.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj2 = apexExperiment;
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