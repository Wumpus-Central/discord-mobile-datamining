// === Module 8363: UserPremiumGuildSubscriptionSystemMessage ===

// Module 8363 (UserPremiumGuildSubscriptionSystemMessage)
import util from "util" /* 1128 */;
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor" /* 8318 */;
import formatUsernameOnClickDefault from "formatUsernameOnClick" /* 8320 */;
import createCommonMessageDefault from "createCommonMessage" /* 8322 */;
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "getNumSubscriptionsPurchasedFromSystemMessage" /* 8364 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx");

export const createUserPremiumGuildSubscriptionSystemMessage = function createUserPremiumGuildSubscriptionSystemMessage(roleStyle) {
  const message = roleStyle.message;
  const tmp3 = getNumSubscriptionsPurchasedFromSystemMessageDefault(message);
  const messageAuthorWithProcessedColor = useAuthorWithProcessedColor.getMessageAuthorWithProcessedColor(message);
  const tmp6 = formatUsernameOnClickDefault({ message, author: messageAuthorWithProcessedColor, roleStyle: roleStyle.roleStyle });
  if (tmp3 > 1) {
    const intl2 = util.intl;
    const obj2 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, numSubscriptions: tmp3 };
    let formatToPartsResult = intl2.formatToParts(util.t.rbj006, obj2);
  } else {
    const intl = util.intl;
    const obj3 = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6 };
    formatToPartsResult = intl.formatToParts(util.t.ihxM9x, obj3);
  }
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: formatToPartsResult };
};