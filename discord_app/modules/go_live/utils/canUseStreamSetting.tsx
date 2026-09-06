// === Module 9957: canUseStreamSetting ===

// Module 9957 (canUseStreamSetting)
import set from "set" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1373 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4218 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4454 */;

const StreamQualities = GuildFeatures.StreamQualities;
let result = set.fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, currentUser) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        flag = getPremiumPlanItemDefault.canStreamQuality(getPremiumPlanItemDefault.StreamQuality.HIGH, currentUser);
        const obj2 = getPremiumPlanItemDefault;
      } else if (tmp2.MID_STREAMING_QUALITY === quality) {
        flag = getPremiumPlanItemDefault.canStreamQuality(getPremiumPlanItemDefault.StreamQuality.MID, currentUser);
        const obj = getPremiumPlanItemDefault;
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