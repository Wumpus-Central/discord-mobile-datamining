// === Module 14746: getCurrentEmbeddedChannel ===

// Module 14746 (getCurrentEmbeddedChannel)
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14742 */;
import FramesStore from "FramesStore" /* 9312 */;
import ChannelStore from "ChannelStore" /* 2041 */;

const TransportTypes = fn(4660).TransportTypes;
const EmbeddedSurfaceType = fn(9313).EmbeddedSurfaceType;
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
      if (EmbeddedSurfaceType.MAIN !== type) {
        return ChannelStore.getChannel(surface.channelId);
      }
    } else {
      return getCurrentEmbeddedActivityChannelDefault();
    }
  }
};