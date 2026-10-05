// === Module 17627: sendStageRequestToSpeakEphemeralMessage ===

// Module 17627 (sendStageRequestToSpeakEphemeralMessage)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
({ MessageFlags: c2, MessageStates: c3, MessageTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx");

export const sendStageRequestToSpeakEphemeralMessage = function sendStageRequestToSpeakEphemeralMessage(channelId, user, requestToSpeakTimestamp) {
  let obj2;
  let obj3;
  const obj = { type: "MESSAGE_CREATE", channelId, message: obj2, optimistic: false, sendMessageOptions: {}, isPushNotification: false };
  obj2 = { id: obj3.fromTimestamp(Date.parse(requestToSpeakTimestamp)), type: constants3.STAGE_RAISE_HAND, flags: constants.EPHEMERAL, content: "", channel_id: channelId, author: user, attachments: [], embeds: [], pinned: false, mentions: [], mention_channels: [], mention_roles: [], mention_everyone: false, timestamp: requestToSpeakTimestamp, state: constants2.SENT, tts: false };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  obj3 = SnowflakeUtilsDefault;
  dispatch(obj);
};