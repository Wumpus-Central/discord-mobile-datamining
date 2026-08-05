// discord_app/modules/go_live/utils/canUseStreamSetting.tsx
import { StreamQualities } from "GuildFeatures";

let result = require("getGuildTierFromGuild").fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, user) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        flag = require("../../../utils/PremiumUtils.tsx").canStreamQuality(require("../../../utils/PremiumUtils.tsx").StreamQuality.HIGH, user);
        const obj2 = require("../../../utils/PremiumUtils.tsx");
      } else if (tmp2.MID_STREAMING_QUALITY === quality) {
        flag = require("../../../utils/PremiumUtils.tsx").canStreamQuality(require("../../../utils/PremiumUtils.tsx").StreamQuality.MID, user);
        const obj = require("../../../utils/PremiumUtils.tsx");
      } else {
        const quality2 = quality.quality;
        flag = false;
      }
    }
    let tmp7 = flag;
    if (null != quality.guildPremiumTier) {
      let result = flag;
      if (!flag) {
        result = require("../../../utils/GuildBoostingUtils.tsx") /* getGuildTierFromGuild */.isGuildBoostedAtLeast(arg2, quality.guildPremiumTier);
        const obj3 = require("../../../utils/GuildBoostingUtils.tsx") /* getGuildTierFromGuild */;
      }
      tmp7 = result;
    }
    return tmp7;
  }
  return true;
};