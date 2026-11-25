// === Module 14355: StageSpeakerSystemMessage ===

// Module 14355 (StageSpeakerSystemMessage)
import util from "util" /* 1112 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 11952 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14320 */;
import createCommonMessageDefault from "createCommonMessage" /* 14321 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx");

export function createStageSpeakerSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: null };
  const intl = util.intl;
  obj2.content = intl.formatToParts(util.t.V4uCm4, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) });
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
}