// === Module 17002: sendStageRequestToSpeakEphemeralMessage ===

// Module 17002 (sendStageRequestToSpeakEphemeralMessage)
import set from "set" /* 2 */;
import DISCORD_EPOCHDefault from "DISCORD_EPOCH" /* 11 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import ME from "ME" /* 676 */;

({ MessageFlags: obj1, MessageStates: c3, MessageTypes: c4 } = ME);
const result = set.fileFinishedImporting("modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx");

export const sendStageRequestToSpeakEphemeralMessage = function sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp) {
  let obj = dispatcherDefault;
  obj = { type: "MESSAGE_CREATE", channelId, message: null, optimistic: false, sendMessageOptions: null, isPushNotification: false };
  obj = { id: DISCORD_EPOCHDefault.fromTimestamp(Date.parse(requestToSpeakTimestamp)), type: constants3.STAGE_RAISE_HAND, flags: constants.EPHEMERAL, content: "", channel_id: channelId, author: user, attachments: [], embeds: [], pinned: false, mentions: [], mention_channels: [], mention_roles: [], mention_everyone: false, timestamp: requestToSpeakTimestamp, state: constants2.SENT, tts: false };
  obj[2] = obj;
  obj[4] = {};
  obj.dispatch(obj);
};