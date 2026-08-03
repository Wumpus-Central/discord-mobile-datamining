import { StreamQualities } from "GuildFeatures";

let result = require("getGuildTierFromGuild").fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, user) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        flag = importDefault(3901).canStreamQuality(importDefault(3901).StreamQuality.HIGH, user);
        const obj2 = importDefault(3901);
      } else if (tmp2.MID_STREAMING_QUALITY === quality) {
        flag = importDefault(3901).canStreamQuality(importDefault(3901).StreamQuality.MID, user);
        const obj = importDefault(3901);
      } else {
        const quality2 = quality.quality;
        flag = false;
      }
    }
    let tmp7 = flag;
    if (null != quality.guildPremiumTier) {
      let result = flag;
      if (!flag) {
        result = require(4147) /* getGuildTierFromGuild */.isGuildBoostedAtLeast(arg2, quality.guildPremiumTier);
        const obj3 = require(4147) /* getGuildTierFromGuild */;
      }
      tmp7 = result;
    }
    return tmp7;
  }
  return true;
};