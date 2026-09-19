// === Module 8284: StageEndSystemMessage ===

// Module 8284 (StageEndSystemMessage)
import util from "util" /* 1115 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8217 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8219 */;
import createCommonMessageDefault from "createCommonMessage" /* 8221 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx");

export const createStageEndSystemMessage = function createStageEndSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: null };
  const intl = util.intl;
  obj2.content = intl.formatToParts(util.t.vMJhvG, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content });
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
};