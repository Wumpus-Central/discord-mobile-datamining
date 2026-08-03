import { GUILD_THEME_POWERUP_BOOST_PRICE as closure_3 } from "BoostedGuildTiers";

const result = require("experiment").fileFinishedImporting("modules/premium/powerups/hooks/useShouldShowGuildThemeMemberCoachmark.tsx");

export default function useShouldShowGuildThemeMemberCoachmark(guildId) {
  const tmp = importDefault(11725)(guildId);
  let serverThemeEnabled = require(4185) /* experiment */.useServerThemeEnabled(guildId, "useShouldShowGuildThemeMemberCoachmark");
  const obj = require(4185) /* experiment */;
  const serverThemeUserEnabled = require(4184) /* apexExperiment */.useServerThemeUserEnabled("useShouldShowGuildThemeMemberCoachmark");
  const obj2 = require(4184) /* apexExperiment */;
  const tmp4 = importDefault(15132)(guildId);
  const isLoading = importDefault(4162)(guildId).isLoading;
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