// === Module 15869: isGuildSpaceEmbeddedActivity ===

// Module 15869 (isGuildSpaceEmbeddedActivity)
import ChannelTypes from "ChannelTypes" /* 1093 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 5164 */;
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 7406 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5091 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/isGuildSpaceEmbeddedActivity.tsx");

export default function isGuildSpaceEmbeddedActivity(platform) {
  if (platform.platform === ActivityGamePlatforms.ActivityGamePlatforms.EMBEDDED) {
    if (null != platform.application_id) {
      const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
      value = selfEmbeddedActivities.get(platform.application_id);
      let _location;
      if (value != null) {
        _location = value.location;
      }
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(_location);
      let tmp5 = null != embeddedActivityLocationChannelId;
      if (tmp5) {
        const basicChannel = ChannelStore.getBasicChannel(embeddedActivityLocationChannelId);
        let type;
        if (basicChannel != null) {
          type = basicChannel.type;
        }
        tmp5 = type === ChannelTypes.ChannelTypes.GUILD_SPACE;
      }
      return tmp5;
    }
  }
  return false;
};