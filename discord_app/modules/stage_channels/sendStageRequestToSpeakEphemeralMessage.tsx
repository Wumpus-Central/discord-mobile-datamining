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
  const obj2 = {
    type: "MESSAGE_CREATE",
    channelId,
    message: null,
    optimistic: false,
    sendMessageOptions: null,
    isPushNotification: false,
  };
  const obj3 = {
    id: null,
    type: null,
    flags: null,
    content: "",
    channel_id: null,
    author: null,
    attachments: null,
    embeds: null,
    pinned: false,
    mentions: null,
    mention_channels: null,
    mention_roles: null,
    mention_everyone: false,
    timestamp: null,
    state: null,
    tts: false,
  };
  const obj = DispatcherDefault;
  obj3.id = SnowflakeUtilsDefault.fromTimestamp(Date.parse(requestToSpeakTimestamp));
  obj3.type = constants3.STAGE_RAISE_HAND;
  obj3.flags = constants.EPHEMERAL;
  obj3.channel_id = channelId;
  obj3.author = user;
  obj3.attachments = [];
  obj3.embeds = [];
  obj3.mentions = [];
  obj3.mention_channels = [];
  obj3.mention_roles = [];
  obj3.timestamp = requestToSpeakTimestamp;
  obj3.state = constants2.SENT;
  obj2.message = obj3;
  obj2.sendMessageOptions = {};
  obj.dispatch(obj2);
};
