// === Module 8105: ApplicationSubscriptionPurchaseSystemMessage ===

// Module 8105 (ApplicationSubscriptionPurchaseSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8034 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8036 */;
import createCommonMessageDefault from "createCommonMessage" /* 8038 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 8069 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export const createApplicationSubscriptionPurchaseSystemMessage = function createApplicationSubscriptionPurchaseSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  obj = { application: message.application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj.content = ApplicationSubscriptionSystemMessageUtils.getApplicationSubscriptionSystemMessageASTContent(obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};