// === Module 8288: createStageSpeakerSystemMessage ===

// Module 8288 (createStageSpeakerSystemMessage)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8221 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8223 */;
import createCommonMessageDefault from "createCommonMessage" /* 8224 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx");

export const createStageSpeakerSystemMessage = function createStageSpeakerSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = getSystemLocale.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = intl.formatToParts(getSystemLocale.t.V4uCm4, obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};