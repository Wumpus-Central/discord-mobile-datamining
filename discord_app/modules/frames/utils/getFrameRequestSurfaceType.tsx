// === Module 11148: getFrameRequestSurfaceType ===

// Module 11148 (getFrameRequestSurfaceType)
import conjureTopicChannel from "conjureTopicChannel" /* 2071 */;
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8586 */;
import ChannelStore from "ChannelStore" /* 2063 */;

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
};