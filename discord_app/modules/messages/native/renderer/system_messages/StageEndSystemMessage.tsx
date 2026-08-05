// discord_app/modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx");

export const createStageEndSystemMessage = function createStageEndSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require("useAuthorWithProcessedColor.tsx") /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, topic: null };
  obj[1] = require("formatUsernameOnClick.tsx")({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[2] = message.content;
  obj[0] = intl.formatToParts(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.vMJhvG, obj);
  const merged = Object.assign(require("createCommonMessage.tsx")(roleStyle));
  return obj;
};