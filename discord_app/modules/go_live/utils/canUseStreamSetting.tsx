// === Module 10937: canUseStreamSetting ===

// Module 10937 (canUseStreamSetting)
import obj132 from "obj132" /* 2 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4039 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4266 */;

const StreamQualities = GuildFeatures.StreamQualities;
let result = obj132.fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, user) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        flag = getPremiumPlanItemDefault.canStreamQuality(getPremiumPlanItemDefault.StreamQuality.HIGH, user);
      } else if (tmp2.MID_STREAMING_QUALITY === quality) {
        flag = getPremiumPlanItemDefault.canStreamQuality(getPremiumPlanItemDefault.StreamQuality.MID, user);
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
      }
      tmp7 = result;
    }
    return tmp7;
  }
  return true;
};