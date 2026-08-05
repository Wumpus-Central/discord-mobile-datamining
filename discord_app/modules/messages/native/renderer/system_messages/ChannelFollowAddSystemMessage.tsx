// discord_app/modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx");

export const createChannelFollowAddSystemMessage = function createChannelFollowAddSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require("useAuthorWithProcessedColor.tsx") /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: null, webhookName: null, webhookNameOnClick: null };
  obj[1] = require("formatUsernameOnClick.tsx")({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  obj[2] = message.content;
  obj[3] = { action: "bindGuildMenu", messageReference: message.messageReference, medium: true };
  obj[0] = intl.formatToParts(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.xH8qGO, obj);
  const merged = Object.assign(require("createCommonMessage.tsx")(roleStyle));
  return obj;
};