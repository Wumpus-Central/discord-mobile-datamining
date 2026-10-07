// discord_app/modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx
import PremiumUtilsDefault from "../../../utils/PremiumUtils.tsx";
import FrontierTuningExperimentDefault from "../FrontierTuningExperiment.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

const require = fn;
const BoostedGuildTiers = fn(1085).BoostedGuildTiers;
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx");

export default function getFrontierTuningConfigIfEligible(location, user, guildId) {
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier === BoostedGuildTiers.NONE) {
      if (!obj4.isPremium(user)) {
        if (!obj.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, user)) {
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
}
