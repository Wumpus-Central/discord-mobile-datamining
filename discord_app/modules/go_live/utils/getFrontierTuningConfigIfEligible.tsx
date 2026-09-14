// === Module 4774: getFrontierTuningConfigIfEligible ===

// Module 4774 (getFrontierTuningConfigIfEligible)
import PremiumUtilsDefault from "PremiumUtils" /* 4294 */;
import FrontierTuningExperimentDefault from "FrontierTuningExperiment" /* 4775 */;
import GuildStore from "GuildStore" /* 1979 */;

const require = fn;
const BoostedGuildTiers = fn(1074).BoostedGuildTiers;
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx");

export default function getFrontierTuningConfigIfEligible(location, currentUser, guildId) {
  if (null != guildId) {
    const guild = GuildStore.getGuild(guildId);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier === BoostedGuildTiers.NONE) {
      if (!obj4.isPremium(currentUser)) {
        if (!obj.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, currentUser)) {
          const obj2 = { location, guildId };
          const config = FrontierTuningExperimentDefault.getConfig(obj2);
          let tmp6 = null;
          if (null != config.maxBitrate) {
            tmp6 = config;
          }
          return tmp6;
        }
        obj = PremiumUtilsDefault;
      }
      return null;
    }
  }
  return null;
};