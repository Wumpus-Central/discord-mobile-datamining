// discord_app/modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import BoostedGuildTiers from "../constants/GuildPowerupsConstants.tsx";
import useGuildAppliedBoostCountDefault from "useGuildPowerupsBoostCount.tsx";
import apexExperiment from "../experiments/ServerThemeUserExperiment.tsx";
import experiment from "../experiments/ServerThemeExperiment.tsx";
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission.tsx";
import useIsGuildThemePerkEnabledDefault from "useIsGuildThemePerkEnabled.tsx";

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