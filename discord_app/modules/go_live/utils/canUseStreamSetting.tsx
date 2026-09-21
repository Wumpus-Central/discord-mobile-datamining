// === Module 10215: canUseStreamSetting ===

// Module 10215 (canUseStreamSetting)
import PremiumConstants from "PremiumConstants" /* 1374 */;
import PremiumUtilsDefault from "PremiumUtils" /* 4414 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 4649 */;
import size from "module_2" /* 2 */;

const StreamQualities = PremiumConstants.StreamQualities;
let result = size.fileFinishedImporting("modules/go_live/utils/canUseStreamSetting.tsx");

export default function canUseStreamSetting(quality, currentUser, arg2) {
  if (null != quality) {
    let flag = false;
    if (null != quality.quality) {
      quality = quality.quality;
      if (StreamQualities.HIGH_STREAMING_QUALITY === quality) {
        flag = PremiumUtilsDefault.canStreamQuality(PremiumUtilsDefault.StreamQuality.HIGH, currentUser);
      } else if (tmp2.MID_STREAMING_QUALITY === quality) {
        flag = PremiumUtilsDefault.canStreamQuality(PremiumUtilsDefault.StreamQuality.MID, currentUser);
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