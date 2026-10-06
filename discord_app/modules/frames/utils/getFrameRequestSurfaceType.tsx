// === Module 9071: getFrameRequestSurfaceType ===

// Module 9071 (getFrameRequestSurfaceType)
import conjureTopicChannel from "conjureTopicChannel" /* 2059 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8547 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import size from "module_2" /* 2 */;

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
};