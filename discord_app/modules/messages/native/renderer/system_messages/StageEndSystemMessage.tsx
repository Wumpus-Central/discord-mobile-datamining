// discord_app/modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { createCommonMessage } from "createCommonMessage.tsx";
import { formatUsernameOnClick } from "formatUsernameOnClick.tsx";
import { getMessageAuthorWithProcessedColor } from "useAuthorWithProcessedColor.tsx";
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx");

export const createStageEndSystemMessage = function createStageEndSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, topic: null };
  obj[1] = formatUsernameOnClick({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[2] = message.content;
  obj[0] = intl.formatToParts(getSystemLocale /* getSystemLocale */.t.vMJhvG, obj);
  const merged = Object.assign(createCommonMessage(roleStyle));
  return obj;
};