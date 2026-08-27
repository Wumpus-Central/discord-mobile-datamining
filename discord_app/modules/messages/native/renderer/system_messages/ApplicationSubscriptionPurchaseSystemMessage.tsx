// === Module 7871: createApplicationSubscriptionPurchaseSystemMessage ===

// Module 7871 (createApplicationSubscriptionPurchaseSystemMessage)
import set from "set" /* 2 */;
import getMessageAuthorWithProcessedColor from "getMessageAuthorWithProcessedColor" /* 7802 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 7804 */;
import createCommonMessageDefault from "createCommonMessage" /* 7805 */;
import getApplicationSubscriptionSystemMessageASTContent from "getApplicationSubscriptionSystemMessageASTContent" /* 7836 */;

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