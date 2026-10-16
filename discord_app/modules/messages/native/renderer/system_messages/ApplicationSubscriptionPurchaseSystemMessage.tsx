// === Module 8282: ApplicationSubscriptionPurchaseSystemMessage ===

// Module 8282 (ApplicationSubscriptionPurchaseSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8199 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8201 */;
import createCommonMessageDefault from "createCommonMessage" /* 8203 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 8233 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export const createApplicationSubscriptionPurchaseSystemMessage = function createApplicationSubscriptionPurchaseSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: null };
  const obj3 = ApplicationSubscriptionSystemMessageUtils;
  obj2.content = obj3.getApplicationSubscriptionSystemMessageASTContent({ application: message.application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) });
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
};