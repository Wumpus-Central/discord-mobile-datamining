// === Module 14409: ApplicationSubscriptionPurchaseSystemMessage ===

// Module 14409 (ApplicationSubscriptionPurchaseSystemMessage)
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 10611 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 12000 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 14372 */;
import createCommonMessageDefault from "createCommonMessage" /* 14373 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export function createApplicationSubscriptionPurchaseSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const obj2 = { content: null };
  const obj3 = ApplicationSubscriptionSystemMessageUtils;
  obj2.content = obj3.getApplicationSubscriptionSystemMessageASTContent({ application: message.application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) });
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj2;
}