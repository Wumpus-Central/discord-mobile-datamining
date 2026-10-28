// === Module 16006: getFrameChannelId ===

// Module 16006 (getFrameChannelId)
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6813 */;
import ChannelStore from "ChannelStore" /* 4856 */;

const ChannelTypes = fn(1084).ChannelTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getFrameChannelId.tsx");

export default function getFrameChannelId(frame) {
  frame = undefined;
  if (frame != null) {
    frame = frame.frame;
  }
  let surface;
  if (frame != null) {
    surface = frame.surface;
  }
  const channel = ChannelStore.getChannel(getChannelIdForEmbeddedSurfaceDefault(surface));
  let type;
  if (channel != null) {
    type = channel.type;
  }
  let id;
  if (type === ChannelTypes.GUILD_APP) {
    let applicationId;
    if (frame != null) {
      applicationId = frame.applicationId;
    }
    if (channel.application_id === applicationId) {
      id = channel.id;
    }
  }
  return id;
};