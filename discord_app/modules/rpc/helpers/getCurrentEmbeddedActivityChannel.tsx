// === Module 15714: getCurrentEmbeddedActivityChannel ===

// Module 15714 (getCurrentEmbeddedActivityChannel)
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import ChannelStore from "ChannelStore" /* 4823 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/helpers/getCurrentEmbeddedActivityChannel.tsx");

export default function getCurrentEmbeddedActivityChannel() {
  return ChannelStore.getChannel(EmbeddedActivitiesStore.getConnectedActivityChannelId());
};