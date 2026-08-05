// discord_app/modules/messages/native/renderer/system_messages/StageTopicSystemMessage.tsx
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/StageTopicSystemMessage.tsx");

export const createStageTopicSystemMessage = function createStageTopicSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require("useAuthorWithProcessedColor.tsx") /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, topic: null };
  obj[1] = require("formatUsernameOnClick.tsx")({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[2] = message.content;
  obj[0] = intl.formatToParts(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.ro3RM0, obj);
  const merged = Object.assign(require("createCommonMessage.tsx")(roleStyle));
  return obj;
};