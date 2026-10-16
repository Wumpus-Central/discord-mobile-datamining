// === Module 8280: StageSpeakerSystemMessage ===

// Module 8280 (StageSpeakerSystemMessage)
import util from "util" /* 1128 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8199 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8201 */;
import createCommonMessageDefault from "createCommonMessage" /* 8203 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx");

export const createStageSpeakerSystemMessage = function createStageSpeakerSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: null };
  const intl = util.intl;
  obj2.content = intl.formatToParts(util.t.V4uCm4, { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) });
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
};