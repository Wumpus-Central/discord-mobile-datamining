// === Module 7868: createStageTopicSystemMessage ===

// Module 7868 (createStageTopicSystemMessage)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7802 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7804 */;
import createCommonMessageDefault from "createCommonMessage" /* 7805 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageTopicSystemMessage.tsx");

export const createStageTopicSystemMessage = function createStageTopicSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = getSystemLocale.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content };
  obj[0] = intl.formatToParts(getSystemLocale.t.ro3RM0, obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};