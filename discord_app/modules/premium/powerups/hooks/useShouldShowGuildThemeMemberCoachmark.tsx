// discord_app/modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx
import { GUILD_THEME_POWERUP_BOOST_PRICE as closure_3 } from "BoostedGuildTiers";

const result = require("experiment").fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = require("useHasAllocateBoostPermission.tsx")(guildId);
  let serverThemeEnabled = require("../experiments/ServerThemeExperiment.tsx") /* experiment */.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const obj = require("../experiments/ServerThemeExperiment.tsx") /* experiment */;
  const serverThemeUserEnabled = require("../experiments/ServerThemeUserExperiment.tsx") /* apexExperiment */.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj2 = require("../experiments/ServerThemeUserExperiment.tsx") /* apexExperiment */;
  const tmp4 = require("useIsGuildThemePerkEnabled.tsx")(guildId);
  const isLoading = require("useGuildPowerupsBoostCount.tsx")(guildId).isLoading;
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