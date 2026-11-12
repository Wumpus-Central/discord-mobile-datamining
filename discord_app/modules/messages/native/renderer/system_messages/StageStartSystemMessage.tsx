// === Module 9199: StageStartSystemMessage ===

// Module 9199 (StageStartSystemMessage)
import util from "util" /* 1113 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 9121 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 9123 */;
import createCommonMessageDefault from "createCommonMessage" /* 9125 */;
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