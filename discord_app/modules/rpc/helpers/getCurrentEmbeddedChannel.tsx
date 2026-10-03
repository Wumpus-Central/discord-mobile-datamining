// === Module 14310: getCurrentEmbeddedChannel ===

// Module 14310 (getCurrentEmbeddedChannel)
import EmbeddedSurfaceType from "EmbeddedSurfaceType" /* 8514 */;
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14306 */;
import FramesStore from "FramesStore" /* 8703 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
const TransportTypes = fn(5316).TransportTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedChannel.tsx");

export default function getCurrentEmbeddedChannel(source) {
  if (source.source.type === TransportTypes.POST_MESSAGE) {
    const frameByIframeId = FramesStore.getFrameByIframeId(source.source.iframeId);
    let surface;
    if (frameByIframeId != null) {
      surface = frameByIframeId.surface;
    }
    if (null != surface) {
      const type = surface.type;
      if (EmbeddedSurfaceType.EmbeddedSurfaceType.MAIN !== type) {
        return ChannelStore.getChannel(surface.channelId);
      }
    } else {
      return getCurrentEmbeddedActivityChannelDefault();
    }
  }
};