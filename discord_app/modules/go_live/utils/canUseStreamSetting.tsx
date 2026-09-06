// discord_app/modules/go_live/utils/canUseStreamSetting.tsx
import set from "../../../../_runtime/00002_set.js";
import GuildFeatures from "../../premium/PremiumConstants.tsx";
import getPremiumPlanItemDefault from "../../../utils/PremiumUtils.tsx";
import getGuildTierFromGuild from "../../../utils/GuildBoostingUtils.tsx";

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
}
