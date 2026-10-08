// === Module 14552: getCurrentEmbeddedActivityChannel ===

// Module 14552 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import ChannelStore from "ChannelStore" /* 2063 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};