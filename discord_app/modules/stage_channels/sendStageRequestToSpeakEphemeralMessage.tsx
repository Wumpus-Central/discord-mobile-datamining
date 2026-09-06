// discord_app/modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

({ MessageFlags: c2, MessageStates: c3, MessageTypes: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/stage_channels/sendStageRequestToSpeakEphemeralMessage.tsx");

export const sendStageRequestToSpeakEphemeralMessage = function sendStageRequestToSpeakEphemeralMessage(
  channelId,
  user,
  requestToSpeakTimestamp,
) {
  let obj = {
    type: "MESSAGE_CREATE",
    channelId,
    message: null,
    optimistic: false,
    sendMessageOptions: null,
    isPushNotification: false,
  };
  obj = {
    id: SnowflakeUtilsDefault.fromTimestamp(Date.parse(requestToSpeakTimestamp)),
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
  obj.message = obj;
  obj.sendMessageOptions = {};
  obj.dispatch(obj);
};
