// === Module 8011: NewThreadSystemMessage ===

// Module 8011 (NewThreadSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7960 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7962 */;
import createCommonMessageDefault from "createCommonMessage" /* 7964 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx");

export const createNewThreadSystemMessage = function createNewThreadSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const messageReference = message.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  const channel = ChannelStore.getChannel(channel_id);
  const intl = tmp(1114).intl;
  obj = { actorName: messageAuthorWithProcessedColor.nick, actorHook: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), threadName: null, threadOnClick: null };
  if (null != channel) {
    let content = tmp(4713).computeChannelName(channel, UserStore, RelationshipStore);
    const tmpResult = tmp(4713);
  } else {
    content = message.content;
  }
  obj.threadName = content;
  const messageReference2 = message.messageReference;
  let channel_id1;
  if (messageReference2 != null) {
    channel_id1 = messageReference2.channel_id;
  }
  obj = { content: intl.formatToParts(tmp(1114).t.veX9jq, obj), threadOnClick: { action: "bindOpenThreadChannel", threadId: channel_id1, medium: true } };
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};