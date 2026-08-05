// discord_app/modules/go_live/utils/canUseStreamSetting.tsx
import { StreamQualities } from "GuildFeatures";
import { getGuildTierFromGuild } from "../../../utils/GuildBoostingUtils.tsx";
import { getPremiumPlanItem } from "../../../utils/PremiumUtils.tsx";

let result = require("getGuildTierFromGuild").fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, user) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        flag = getPremiumPlanItem.canStreamQuality(getPremiumPlanItem.StreamQuality.HIGH, user);
        const obj2 = getPremiumPlanItem;
      } else if (tmp2.MID_STREAMING_QUALITY === quality) {
        flag = getPremiumPlanItem.canStreamQuality(getPremiumPlanItem.StreamQuality.MID, user);
        const obj = getPremiumPlanItem;
      } else {
        const quality2 = quality.quality;
        flag = false;
      }
    }
    let tmp7 = flag;
    if (null != quality.guildPremiumTier) {
      let result = flag;
      if (!flag) {
        result = getGuildTierFromGuild.isGuildBoostedAtLeast(arg2, quality.guildPremiumTier);
        const obj3 = getGuildTierFromGuild;
      }
      tmp7 = result;
    }
    return tmp7;
  }
  return true;
};