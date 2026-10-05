// discord_app/modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx
import Constants from "../../../Constants.tsx";
import PremiumTypeUtils from "../../../utils/PremiumTypeUtils.tsx";
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import FrontierTuningExperimentDefault from "../FrontierTuningExperiment.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const BoostedGuildTiers = Constants.BoostedGuildTiers;
const result = size.fileFinishedImporting("modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx");

export default function getFrontierTuningConfigIfEligible(location, user, guildId) {
  if (null != guildId) {
    const guild = GuildStore.getGuild(guildId);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier === BoostedGuildTiers.NONE) {
      const obj4 = PremiumTypeUtils;
      if (!obj4.isPremium(user)) {
        const obj = PremiumUtilsDefault;
        if (!obj.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, user)) {
          const obj2 = { location, guildId };
          const tmp3Result = FrontierTuningExperimentDefault;
          const config = tmp3Result.getConfig(obj2);
          let tmp6 = null;
          if (null != config.maxBitrate) {
            tmp6 = config;
          }
          return tmp6;
        }
      }
      return null;
    }
  }
  return null;
}
