// === Module 9179: ChannelFollowAddSystemMessage ===

// Module 9179 (ChannelFollowAddSystemMessage)
import util from "util" /* 1113 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 9121 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 9123 */;
import createCommonMessageDefault from "createCommonMessage" /* 9125 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: null };
  const intl = util.intl;
  obj2.content = intl.formatToParts(util.t.xH8qGO, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), webhookName: message.content, webhookNameOnClick: { action: "bindGuildMenu", messageReference: message.messageReference, medium: true } });
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
}