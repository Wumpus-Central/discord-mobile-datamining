// === Module 8083: ApplicationSubscriptionPurchaseSystemMessage ===

// Module 8083 (ApplicationSubscriptionPurchaseSystemMessage)
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8012 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8014 */;
import createCommonMessageDefault from "createCommonMessage" /* 8016 */;
import ApplicationSubscriptionSystemMessageUtils from "ApplicationSubscriptionSystemMessageUtils" /* 8047 */;
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