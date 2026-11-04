// discord_app/modules/checkpoint/onTapCheckpointCard.tsx
import CheckpointExperiments from "CheckpointExperiments.tsx";
import Tracking from "tracking/Tracking.tsx";
import openCheckpoint from "openCheckpoint.native.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";

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
