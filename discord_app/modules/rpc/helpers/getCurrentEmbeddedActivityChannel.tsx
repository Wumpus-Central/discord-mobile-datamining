// === Module 15416: getCurrentEmbeddedActivityChannel ===

// Module 15416 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2067 */;
import ChannelStore from "ChannelStore" /* 2068 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};