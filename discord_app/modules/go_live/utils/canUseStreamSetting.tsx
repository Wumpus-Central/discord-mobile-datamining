// === Module 11595: canUseStreamSetting ===

// Module 11595 (canUseStreamSetting)
import PremiumConstants from "PremiumConstants" /* 1394 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2053 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 8366 */;
import size from "module_2" /* 2 */;

const StreamQualities = PremiumConstants.StreamQualities;
let result = size.fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, user, arg2) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        flag = PremiumUtilsDefault.canStreamQuality(PremiumUtilsDefault.StreamQuality.HIGH, user);
      } else if (tmp2.MID_STREAMING_QUALITY === quality) {
        flag = PremiumUtilsDefault.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, user);
      } else {
        const quality2 = quality.quality;
        flag = false;
      }
    }
    let tmp7 = flag;
    if (null != quality.guildPremiumTier) {
      let result = flag;
      if (!flag) {
        result = GuildBoostingUtils.isGuildBoostedAtLeast(arg2, quality.guildPremiumTier);
      }
      tmp7 = result;
    }
    return tmp7;
  }
  return true;
};