// discord_app/modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c2;
let c3;
let closure_4;
({ MessageFlags: c2, MessageStates: c3, MessageTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx");

export const sendStageRequestToSpeakEphemeralMessage = function sendStageRequestToSpeakEphemeralMessage(
  channelId,
  user,
  requestToSpeakTimestamp,
) {
  let obj2;
  let obj3;
  const obj = {
    type: "MESSAGE_CREATE",
    channelId,
    message: obj2,
    optimistic: false,
    sendMessageOptions: {},
    isPushNotification: false,
  };
  obj2 = {
    id: obj3.fromTimestamp(Date.parse(requestToSpeakTimestamp)),
    type: constants3.STAGE_RAISE_HAND,
    flags: constants.EPHEMERAL,
    content: "",
    channel_id: channelId,
    author: user,
    attachments: [],
    embeds: [],
    pinned: false,
    mentions: [],
    mention_channels: [],
    mention_roles: [],
    mention_everyone: false,
    timestamp: requestToSpeakTimestamp,
    state: constants2.SENT,
    tts: false,
  };
  const dispatch = DispatcherDefault.dispatch;
  DispatcherDefault;
  obj3 = SnowflakeUtilsDefault;
  dispatch(obj);
};
