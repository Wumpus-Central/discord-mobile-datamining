// === Module 11138: buildEmbeddedContext ===

// Module 11138 (buildEmbeddedContext)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4696 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8586 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 10615 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import FramesStore from "FramesStore" /* 10612 */;
import InteractionStore from "InteractionStore" /* 7856 */;
import ChannelStore from "ChannelStore" /* 2063 */;

require = fn;
const asLaunched = fn(10613).asLaunched;
const MOBILE = fn(10742).ActivityPlatform.MOBILE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/embedded_apps/utils/buildEmbeddedContext.tsx");

export default function buildEmbeddedContext(type) {
  type = type.type;
  if (EmbeddedAppTypes.EmbeddedContextSourceType.FRAME === type) {
    const tmp13 = asLaunched(FramesStore.getFrame(type.frameId));
    if (null != tmp13) {
      const obj2 = { source: type, surface: tmp13.surface, launch: tmp13.data.launch, platform: MOBILE };
      return obj2;
    }
  } else if (EmbeddedAppTypes.EmbeddedContextSourceType.ACTIVITY === type) {
    const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
    value = selfEmbeddedActivities.get(type.applicationId);
    if (null != value) {
      const obj3 = { source: type, surface: null, launch: null, platform: null };
      const obj4 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN, channelId: embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(value.location), guildId: null };
      const tmpResult = embeddedActivityLocationUtils;
      obj4.guildId = embeddedActivityLocationUtils.getEmbeddedActivityLocationGuildId(value.location);
      obj3.surface = obj4;
      ({ customId: obj10.customId, referrerId: obj10.referrerId } = value);
      obj3.launch = { customId: null, referrerId: null };
      obj3.platform = MOBILE;
      return obj3;
    }
  } else if (EmbeddedAppTypes.EmbeddedContextSourceType.INTERACTION === type) {
    const iFrameModal = InteractionStore.getIFrameModal();
    if (null != iFrameModal) {
      if (iFrameModal.interactionId === type.interactionId) {
        const obj6 = { source: type, surface: null, launch: null, platform: null };
        const obj7 = { type: EmbeddedSurfaceType.EmbeddedSurfaceType.INTERACTION_MODAL, channelId: iFrameModal.channelId, guildId: null };
        const channel = ChannelStore.getChannel(iFrameModal.channelId);
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        obj7.guildId = guild_id;
        obj6.surface = obj7;
        const obj = { customId: null, interactionId: null };
        ({ customId: obj.customId, interactionId: obj.interactionId } = iFrameModal);
        obj6.launch = obj;
        obj6.platform = MOBILE;
        return obj6;
      }
    }
  }
};