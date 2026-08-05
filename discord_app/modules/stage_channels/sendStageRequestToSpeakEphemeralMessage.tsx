import { dispatcher } from "../../Dispatcher.tsx";
import { DISCORD_EPOCH } from "../../utils/SnowflakeUtils.tsx";
// discord_app/modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx
import ME from "ME";

let c3;
let c4;
let obj1;
({ MessageFlags: obj1, MessageStates: c3, MessageTypes: c4 } = ME);
const result = require("DISCORD_EPOCH").fileFinishedImporting("modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx");

export const sendStageRequestToSpeakEphemeralMessage = function sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp) {
  let obj = dispatcher;
  obj = { type: "MESSAGE_CREATE", channelId, message: null, optimistic: false, sendMessageOptions: null, isPushNotification: false };
  obj = { id: null, type: null, flags: null, content: "", channel_id: null, author: null, attachments: null, embeds: null, pinned: false, mentions: null, mention_channels: null, mention_roles: null, mention_everyone: false, timestamp: null, state: null, tts: false };
  obj[0] = DISCORD_EPOCH.fromTimestamp(Date.parse(requestToSpeakTimestamp));
  obj[1] = constants3.STAGE_RAISE_HAND;
  obj[2] = constants.EPHEMERAL;
  obj[4] = channelId;
  obj[5] = user;
  obj[6] = [];
  obj[7] = [];
  obj[9] = [];
  obj[10] = [];
  obj[11] = [];
  obj[13] = requestToSpeakTimestamp;
  obj[14] = constants2.SENT;
  obj[2] = obj;
  obj[4] = {};
  obj.dispatch(obj);
};