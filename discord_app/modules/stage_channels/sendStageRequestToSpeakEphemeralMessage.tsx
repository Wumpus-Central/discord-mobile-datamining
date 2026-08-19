// discord_app/modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import DISCORD_EPOCHDefault from "../../utils/SnowflakeUtils.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import ME from "../../Constants.tsx";

({ MessageFlags: obj1, MessageStates: c3, MessageTypes: c4 } = ME);
const result = obj132.fileFinishedImporting("modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx");

export const sendStageRequestToSpeakEphemeralMessage = function sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp) {
  const obj = { id: DISCORD_EPOCHDefault.fromTimestamp(Date.parse(requestToSpeakTimestamp)), type: constants3.STAGE_RAISE_HAND, flags: constants.EPHEMERAL, content: "", channel_id: channelId, author: user, attachments: [], embeds: [], pinned: false, mentions: [], mention_channels: [], mention_roles: [], mention_everyone: false, timestamp: requestToSpeakTimestamp, state: constants2.SENT, tts: false };
  obj[2] = obj;
  obj[4] = {};
  obj.dispatch(obj);
};