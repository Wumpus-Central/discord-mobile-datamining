// discord_app/modules/frames/utils/getFrameRequestSurfaceType.tsx
import conjureTopicChannel from "../../conjure/app_channel/conjureTopicChannel.tsx";
import EmbeddedSurfaceType from "../../../../discord_common/js/shared/shared-constants/EmbeddedSurfaceType.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/frames/utils/getFrameRequestSurfaceType.tsx");

export default function getFrameRequestSurfaceType(type) {
  if (type.type === EmbeddedSurfaceType.EmbeddedSurfaceType.APP_CHANNEL) {
    if (null != type.channelId) {
      const channel = ChannelStore.getChannel(type.channelId);
      if (null != channel) {
        const tmpResult = conjureTopicChannel;
        if (tmpResult.isConjureLegacyTopicChannel(channel.type, channel.topic_)) {
          return EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN;
        }
      }
    }
  }
  return type.type;
}
