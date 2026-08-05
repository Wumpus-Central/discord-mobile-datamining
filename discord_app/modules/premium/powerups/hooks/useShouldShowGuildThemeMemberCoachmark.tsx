import { experiment } from "../experiments/ServerThemeExperiment.tsx";
import { apexExperiment } from "../experiments/ServerThemeUserExperiment.tsx";
import { useGuildAppliedBoostCount } from "useGuildPowerupsBoostCount.tsx";
import { useHasAllocateBoostPermission } from "useHasAllocateBoostPermission.tsx";
import { useIsGuildThemePerkEnabled } from "useIsGuildThemePerkEnabled.tsx";
// discord_app/modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx
import { GUILD_THEME_POWERUP_BOOST_PRICE as closure_3 } from "BoostedGuildTiers";

const result = require("experiment").fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = useHasAllocateBoostPermission(guildId);
  let serverThemeEnabled = experiment /* experiment */.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const obj = experiment /* experiment */;
  const serverThemeUserEnabled = apexExperiment /* apexExperiment */.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj2 = apexExperiment /* apexExperiment */;
  const tmp4 = useIsGuildThemePerkEnabled(guildId);
  const isLoading = useGuildAppliedBoostCount(guildId).isLoading;
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