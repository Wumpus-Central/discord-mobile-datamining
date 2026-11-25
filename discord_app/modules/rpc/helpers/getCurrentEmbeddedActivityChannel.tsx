// === Module 15830: getCurrentEmbeddedActivityChannel ===

// Module 15830 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4860 */;
import ChannelStore from "ChannelStore" /* 4861 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};