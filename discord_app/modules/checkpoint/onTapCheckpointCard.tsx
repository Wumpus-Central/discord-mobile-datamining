// === Module 13665: onTapCheckpointCard ===

// Module 13665 (onTapCheckpointCard)
import CheckpointExperiments from "CheckpointExperiments" /* 6575 */;
import Tracking from "Tracking" /* 13666 */;
import openCheckpoint from "openCheckpoint" /* 13669 */;
import ChannelStore from "ChannelStore" /* 4992 */;

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