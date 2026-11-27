// === Module 14400: NewThreadSystemMessage ===

// Module 14400 (NewThreadSystemMessage)
import util from "util" /* 1112 */;
import useChannelName from "useChannelName" /* 5659 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12008 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14379 */;
import createCommonMessageDefault from "createCommonMessage" /* 14380 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore from "UserStore" /* 1387 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx");

export function createNewThreadSystemMessage(roleStyle) {
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
}