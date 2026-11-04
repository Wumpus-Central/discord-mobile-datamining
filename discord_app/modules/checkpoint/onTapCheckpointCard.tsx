// === Module 13653: onTapCheckpointCard ===

// Module 13653 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6223 */;
import Tracking from "Tracking" /* 13654 */;
import openCheckpoint from "openCheckpoint" /* 13657 */;
import ChannelStore from "ChannelStore" /* 4990 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/onTapCheckpointCard.tsx");

export function onTapCheckpointCard(arg0) {
  ({ message, authorId } = arg0);
  if (obj.getIsCheckpointEnabled("onTapCheckpointCard")) {
    const result = Tracking.trackCheckpoint2026CardClicked(authorId, ChannelStore.getChannel(message.channel_id));
    const tmpResult = Tracking;
    openCheckpoint.openCheckpoint("message_component");
    const tmpResult2 = openCheckpoint;
  }
  obj = CheckpointExperiments;
}