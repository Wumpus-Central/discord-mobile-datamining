// === Module 15659: useShouldShowGuildThemeMemberCoachmark ===

// Module 15659 (useShouldShowGuildThemeMemberCoachmark)
import set from "set" /* 2 */;
import BoostedGuildTiers from "BoostedGuildTiers" /* 4332 */;
import useGuildAppliedBoostCountDefault from "useGuildAppliedBoostCount" /* 4351 */;
import apexExperiment from "apexExperiment" /* 4373 */;
import experiment from "experiment" /* 4374 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 11992 */;
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled" /* 15660 */;

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