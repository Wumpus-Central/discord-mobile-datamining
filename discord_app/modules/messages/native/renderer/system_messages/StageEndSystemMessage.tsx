// === Module 8286: createStageEndSystemMessage ===

// Module 8286 (createStageEndSystemMessage)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8221 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8223 */;
import createCommonMessageDefault from "createCommonMessage" /* 8224 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx");

export const createStageEndSystemMessage = function createStageEndSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = getSystemLocale.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content };
  obj[0] = intl.formatToParts(getSystemLocale.t.vMJhvG, obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};