// === Module 14596: getCurrentEmbeddedChannel ===

// Module 14596 (getCurrentEmbeddedChannel)
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14592 */;
import FramesStore from "FramesStore" /* 9664 */;
import ChannelStore from "ChannelStore" /* 1958 */;

const TransportTypes = fn(4544).TransportTypes;
const EmbeddedSurfaceType = fn(9665).EmbeddedSurfaceType;
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