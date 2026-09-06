// === Module 4698: getFrontierTuningConfigIfEligible ===

// Module 4698 (getFrontierTuningConfigIfEligible)
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
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
        let obj = PremiumUtilsDefault;
        if (!obj.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, currentUser)) {
          obj = { location, guildId };
          const config = tmp3(4699).getConfig(obj);
          let tmp6 = null;
          if (null != config.maxBitrate) {
            tmp6 = config;
          }
          return tmp6;
        }
        tmp3 = importDefault;
      }
      return null;
    }
  }
  return null;
};