// discord_app/modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx
import useAuthorWithProcessedColor from "useAuthorWithProcessedColor.tsx";
import formatUsernameOnClickDefault from "formatUsernameOnClick.tsx";
import createCommonMessageDefault from "createCommonMessage.tsx";
import getNumSubscriptionsPurchasedFromSystemMessageDefault from "../../../../premium/getNumSubscriptionsPurchasedFromSystemMessage.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/messages/native/renderer/system_messages/UserPremiumGuildSubscriptionSystemMessage.tsx",
);

export const createUserPremiumGuildSubscriptionSystemMessage = function createUserPremiumGuildSubscriptionSystemMessage(
  roleStyle,
) {
  const message = roleStyle.message;
  const tmp3 = getNumSubscriptionsPurchasedFromSystemMessageDefault(message);
  let obj = useAuthorWithProcessedColor;
  const messageAuthorWithProcessedColor = obj.getMessageAuthorWithProcessedColor(message);
  const tmp6 = formatUsernameOnClickDefault({
    message,
    author: messageAuthorWithProcessedColor,
    roleStyle: roleStyle.roleStyle,
  });
  if (tmp3 > 1) {
    const intl2 = tmp4(1114).intl;
    obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6, numSubscriptions: tmp3 };
    let formatToPartsResult = intl2.formatToParts(tmp4(1114).t.rbj006, obj);
  } else {
    const intl = tmp4(1114).intl;
    obj = { username: messageAuthorWithProcessedColor.nick, usernameOnClick: tmp6 };
    formatToPartsResult = intl.formatToParts(tmp4(1114).t.ihxM9x, obj);
  }
  const merged = Object.assign(createCommonMessageDefault(roleStyle));
  return { content: formatToPartsResult };
};
