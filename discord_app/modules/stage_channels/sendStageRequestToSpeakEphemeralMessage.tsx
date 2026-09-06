// === Module 17487: sendStageRequestToSpeakEphemeralMessage ===

// Module 17487 (sendStageRequestToSpeakEphemeralMessage)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ MessageFlags: c2, MessageStates: c3, MessageTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx");

export const sendStageRequestToSpeakEphemeralMessage = function sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp) {
  let obj = { type: "MESSAGE_CREATE", channelId, message: null, optimistic: false, sendMessageOptions: null, isPushNotification: false };
  obj = { id: SnowflakeUtilsDefault.fromTimestamp(Date.parse(requestToSpeakTimestamp)), type: constants3.STAGE_RAISE_HAND, flags: constants.EPHEMERAL, content: "", channel_id: channelId, author: user, attachments: [], embeds: [], pinned: false, mentions: [], mention_channels: [], mention_roles: [], mention_everyone: false, timestamp: requestToSpeakTimestamp, state: constants2.SENT, tts: false };
  obj.message = obj;
  obj.sendMessageOptions = {};
  obj.dispatch(obj);
};