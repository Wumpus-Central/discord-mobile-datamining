// === Module 7681: NewThreadSystemMessage ===

// Module 7681 (NewThreadSystemMessage)
import util from "util" /* 1126 */;
import useChannelName from "useChannelName" /* 5043 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 7619 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7621 */;
import createCommonMessageDefault from "createCommonMessage" /* 7623 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx");

export const createNewThreadSystemMessage = function createNewThreadSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const messageReference = message.messageReference;
  let channel_id;
  if (messageReference != null) {
    channel_id = messageReference.channel_id;
  }
  const channel = ChannelStore.getChannel(channel_id);
  const intl = util.intl;
  const obj2 = { actorName: messageAuthorWithProcessedColor.nick, actorHook: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), threadName: null, threadOnClick: null };
  if (null != channel) {
    let content = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
    const tmpResult = useChannelName;
  } else {
    content = message.content;
  }
  obj2.threadName = content;
  const messageReference2 = message.messageReference;
  let channel_id1;
  if (messageReference2 != null) {
    channel_id1 = messageReference2.channel_id;
  }
  obj2.threadOnClick = { action: "bindOpenThreadChannel", threadId: channel_id1, medium: true };
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: intl.formatToParts(util.t.veX9jq, obj2) };
};