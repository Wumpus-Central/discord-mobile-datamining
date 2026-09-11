// === Module 8101: StageEndSystemMessage ===

// Module 8101 (StageEndSystemMessage)
import util from "util" /* 1114 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8034 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8036 */;
import createCommonMessageDefault from "createCommonMessage" /* 8038 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx");

export const createStageEndSystemMessage = function createStageEndSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = util.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content };
  obj.content = intl.formatToParts(util.t.vMJhvG, obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};