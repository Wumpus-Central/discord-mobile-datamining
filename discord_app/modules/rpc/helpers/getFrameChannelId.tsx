// === Module 15743: getFrameChannelId ===

// Module 15743 (getFrameChannelId)
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6778 */;
import ChannelStore from "ChannelStore" /* 4823 */;

const ChannelTypes = fn(1087).ChannelTypes;
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