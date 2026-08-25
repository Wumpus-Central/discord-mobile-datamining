// === Module 8290: createApplicationSubscriptionPurchaseSystemMessage ===

// Module 8290 (createApplicationSubscriptionPurchaseSystemMessage)
import set from "set" /* 2 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 8221 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8223 */;
import createCommonMessageDefault from "createCommonMessage" /* 8224 */;
import getApplicationSubscriptionSystemMessageASTContent from "getApplicationSubscriptionSystemMessageASTContent" /* 8255 */;

const result = set.fileFinishedImporting("modules/messages/native/renderer/system_messages/ApplicationSubscriptionPurchaseSystemMessage.tsx");

export const createApplicationSubscriptionPurchaseSystemMessage = function createApplicationSubscriptionPurchaseSystemMessage(roleStyle) {
  const message = roleStyle.message;
  let obj = getMessageAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  obj = { content: null };
  obj = { application: message.application, username: messageAuthorWithProcessedColor.nick, usernameOnClick: formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle }) };
  obj[0] = getApplicationSubscriptionSystemMessageASTContent.getApplicationSubscriptionSystemMessageASTContent(obj);
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return obj;
};