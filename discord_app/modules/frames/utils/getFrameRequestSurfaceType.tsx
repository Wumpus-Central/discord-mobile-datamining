// discord_app/modules/frames/utils/getFrameRequestSurfaceType.tsx
import conjureTopicChannel from "../../conjure/app_channel/conjureTopicChannel.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/utils/getFrameRequestSurfaceType.tsx");

export default function getFrameRequestSurfaceType(type) {
  if (type.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
    const channel = ChannelStore.getChannel(type.channelId);
    if (null != channel) {
      if (tmpResult.isConjureLegacyTopicChannel(channel.type, channel.topic_)) {
        return EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN;
      }
      tmpResult = conjureTopicChannel;
    }
  }
  return type.type;
}
