// discord_app/modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import closure_3 from "../../../stores/GuildStore.tsx";
import { BoostedGuildTiers } from "../../../Constants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/go_live/utils/getFrontierTuningConfigIfEligible.tsx");

export default function getFrontierTuningConfigIfEligible(arg0, currentUser) {
  if (null != arg2) {
    guild = guild.getGuild(arg2);
    let premiumTier;
    if (guild != null) {
      premiumTier = guild.premiumTier;
    }
    if (premiumTier === BoostedGuildTiers.NONE) {
      if (!obj4.isPremium(currentUser)) {
        let obj = getPremiumPlanItemDefault;
        if (!obj.canStreamQuality(getPremiumPlanItemDefault.StreamQuality.MID, currentUser)) {
          obj = { location: null, guildId: null };
          obj[0] = arg0;
          obj[1] = arg2;
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
}
