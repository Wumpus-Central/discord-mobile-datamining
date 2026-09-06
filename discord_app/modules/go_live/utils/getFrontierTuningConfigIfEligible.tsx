// discord_app/modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import FrontierTuningExperimentDefault from "../FrontierTuningExperiment.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

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
          const config = FrontierTuningExperimentDefault.getConfig(obj);
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
