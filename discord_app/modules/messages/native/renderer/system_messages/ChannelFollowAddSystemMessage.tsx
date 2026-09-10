// === Module 8058: ChannelFollowAddSystemMessage ===

// Module 8058 (ChannelFollowAddSystemMessage)
import util from "util" /* 1114 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8012 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8014 */;
import createCommonMessageDefault from "createCommonMessage" /* 8016 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = util.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), webhookName: message.content, webhookNameOnClick: { action: "bindGuildMenu", messageReference: message.messageReference, medium: true } };
  obj.content = intl.formatToParts(util.t.xH8qGO, obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};