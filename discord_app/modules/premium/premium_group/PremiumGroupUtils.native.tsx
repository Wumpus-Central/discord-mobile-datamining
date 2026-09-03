// === Module 7970: getPremiumGroupInviteEmbedText ===

// Module 7970 (getPremiumGroupInviteEmbedText)
import messagesProxyDefault from "messagesProxy" /* 3016 */;
import closure_3 from "mergeGuildAvatar" /* 1921 */;
import SubscriptionStatusTypes from "SubscriptionStatusTypes" /* 4153 */;

const require = arg1;
({ getPremiumGroupProductName: c4, HELP_CENTER_LINK: c5 } = SubscriptionStatusTypes);
const result = require("set").fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.native.tsx");
for (const key10025 in require("getPriceString")) {
  let tmp4 = key10025;
  arg5[key10025] = require("getPriceString")[key10025];
  continue;
}

export const getPremiumGroupInviteEmbedText = function getPremiumGroupInviteEmbedText(isSender) {
  ({ sender, channel } = isSender);
  const tmp = callback();
  if (isSender.isSender) {
    let tmp8 = null;
    if (null != channel) {
      const recipients = channel.recipients;
      let found;
      if (recipients != null) {
        found = recipients.find((arg0) => arg0 !== sender.id);
      }
      user = user.getUser(found);
      let nameFromUserResult = null;
      if (null != user) {
        let obj4 = sender(4322);
        nameFromUserResult = obj4.nameFromUser(user);
      }
      tmp8 = nameFromUserResult;
    }
    let tmp15 = null;
    if (null != tmp8) {
      let obj = { message: null, header: null, body: null };
      const intl4 = sender(1233).intl;
      obj = { receiverName: null, premiumGroupProductName: null };
      obj[0] = tmp8;
      obj[1] = tmp;
      obj[0] = intl4.format(messagesProxyDefault.MkcFjx, obj);
      const intl5 = sender(1233).intl;
      obj1 = { premiumGroupProductName: null };
      obj1[0] = tmp;
      obj[1] = intl5.formatToPlainString(messagesProxyDefault["5uwv8J"], obj1);
      const intl6 = sender(1233).intl;
      const obj2 = { receiverName: null };
      obj2[0] = tmp8;
      obj[2] = intl6.formatToPlainString(messagesProxyDefault["AmE0B/"], obj2);
      tmp15 = obj;
    }
    return tmp15;
  } else {
    obj = sender(4322);
    const nameFromUserResult1 = obj.nameFromUser(sender);
    const obj3 = { message: null, header: null, body: null };
    const intl = sender(1233).intl;
    obj4 = { senderName: null, premiumGroupProductName: null, helpCenterLink: null };
    obj4[0] = nameFromUserResult1;
    obj4[1] = tmp;
    obj4[2] = closure_5;
    obj3[0] = intl.format(messagesProxyDefault["51Kv/4"], obj4);
    const intl2 = sender(1233).intl;
    obj3[1] = intl2.string(messagesProxyDefault.ssge1y);
    const intl3 = sender(1233).intl;
    const obj5 = { senderName: null, premiumGroupProductName: null };
    obj5[0] = nameFromUserResult1;
    obj5[1] = tmp;
    obj3[2] = intl3.formatToPlainString(messagesProxyDefault.tej76V, obj5);
    return obj3;
  }
};
export function useIsEligibleForPremiumGroupPurchase() {
  return false;
}
export const useCheckoutInstancePremiumGroupPurchaseEligibility = function useCheckoutInstancePremiumGroupPurchaseEligibility(arg0) {
  return false;
};
export function useIsEligibleForPremiumGroupMarketingMaterials() {
  return false;
}
export function useIsEligibleForPremiumGroupNitroTabMarketingMaterials() {
  return false;
}