// discord_app/modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx
const result = require("formatUsernameOnClick").fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export const createApplicationSubscriptionPurchaseSystemMessage = function createApplicationSubscriptionPurchaseSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = require("useAuthorWithProcessedColor.tsx") /* getMessageAuthorWithProcessedColor */;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  obj = { application: message.application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: require("formatUsernameOnClick.tsx")({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = require("../../../../premium_apps/ApplicationSubscriptionSystemMessageUtils.tsx") /* getApplicationSubscriptionSystemMessageASTContent */.getApplicationSubscriptionSystemMessageASTContent(obj);
  const merged = Object.assign(require("createCommonMessage.tsx")(roleStyle));
  return obj;
};