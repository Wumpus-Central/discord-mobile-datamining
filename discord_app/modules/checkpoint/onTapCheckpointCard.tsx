// === Module 13116: onTapCheckpointCard ===

// Module 13116 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6746 */;
import Tracking from "Tracking" /* 13117 */;
import openCheckpoint from "openCheckpoint" /* 13124 */;
import ChannelStore from "ChannelStore" /* 5159 */;

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