// === Module 14404: StageStartSystemMessage ===

// Module 14404 (StageStartSystemMessage)
import util from "util" /* 1112 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12000 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14372 */;
import createCommonMessageDefault from "createCommonMessage" /* 14373 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageStartSystemMessage.tsx");

export function createStageStartSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: null };
  const intl = util.intl;
  obj2.content = intl.formatToParts(util.t.aZtRW8, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }), topic: message.content });
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
}