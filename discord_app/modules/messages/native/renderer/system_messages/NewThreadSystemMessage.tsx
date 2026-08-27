// discord_app/modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx
import getMessageAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import closure_3 from "../../../../../stores/ChannelStore.tsx";
import closure_4 from "../../../../../stores/RelationshipStore.tsx";
import closure_5 from "../../../../../stores/UserStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx");

export const createNewThreadSystemMessage = function createNewThreadSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const messageReference = message.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  channel = channel.getChannel(channel_id);
  const intl = tmp(1236).intl;
  obj = { actorName: messageAuthorWithProcessedColor.nick, actorHook: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), threadName: null, threadOnClick: null };
  if (null != channel) {
    let content = tmp(4639).computeChannelName(channel, closure_5, closure_4);
    const tmpResult = tmp(4639);
  } else {
    content = message.content;
  }
  obj[2] = content;
  const messageReference2 = message.messageReference;
  let channel_id1;
  if (messageReference2 != null) {
    channel_id1 = messageReference2.channel_id;
  }
  obj = { content: intl.formatToParts(tmp(1236).t.veX9jq, obj) };
  obj[3] = { action: "bindOpenThreadChannel", threadId: channel_id1, medium: true };
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};