// === Module 14406: StageTopicSystemMessage ===

// Module 14406 (StageTopicSystemMessage)
import util from "util" /* 1112 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12000 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14372 */;
import createCommonMessageDefault from "createCommonMessage" /* 14373 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageTopicSystemMessage.tsx");

export function createStageTopicSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: null };
  const intl = util.intl;
  obj2.content = intl.formatToParts(util.t.ro3RM0, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content });
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
}