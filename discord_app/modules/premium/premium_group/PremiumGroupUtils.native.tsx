// === Module 7493: PremiumGroupUtils ===

// Module 7493 (PremiumGroupUtils)
import util from "util" /* 1115 */;
import _modDef3199 from "module_3199" /* 3199 */;
import UserUtils from "UserUtils" /* 4678 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
const PremiumGroupConstants = fn(4502);
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: hasOwnProperty } = PremiumGroupConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.native.tsx");
for (const key10025 in require("module_7494")) {
  arg5[key10025] = require("module_7494")[key10025];
  continue;
}

export const getPremiumGroupInviteEmbedText = function getPremiumGroupInviteEmbedText(isSender) {
  ({ sender, channel } = isSender);
  const tmp = React4();
  if (isSender.isSender) {
    let tmp8 = null;
    if (null != channel) {
      const recipients = channel.recipients;
      let found;
      if (recipients != null) {
        found = recipients.find((item) => item !== sender.id);
      }
      const user = UserStore.getUser(found);
      let nameFromUserResult = null;
      if (null != user) {
        nameFromUserResult = UserUtils.nameFromUser(user);
      }
      tmp8 = nameFromUserResult;
    }
    let tmp15 = null;
    if (null != tmp8) {
      const obj2 = { message: null, header: null, body: null };
      const intl4 = util.intl;
      const obj3 = { receiverName: tmp8, premiumGroupProductName: tmp };
      obj2.message = intl4.format(_modDef3199.MkcFjx, obj3);
      const intl5 = util.intl;
      const obj4 = { premiumGroupProductName: tmp };
      obj2.header = intl5.formatToPlainString(_modDef3199["5uwv8J"], obj4);
      const intl6 = util.intl;
      const obj6 = { receiverName: tmp8 };
      obj2.body = intl6.formatToPlainString(_modDef3199["AmE0B/"], obj6);
      tmp15 = obj2;
    }
    return tmp15;
  } else {
    const nameFromUserResult1 = UserUtils.nameFromUser(sender);
    const obj7 = { message: null, header: null, body: null };
    const intl = util.intl;
    const obj8 = { senderName: nameFromUserResult1, premiumGroupProductName: tmp, helpCenterLink };
    obj7.message = intl.format(_modDef3199["51Kv/4"], obj8);
    const intl2 = util.intl;
    obj7.header = intl2.string(_modDef3199.ssge1y);
    const intl3 = util.intl;
    const obj9 = { senderName: nameFromUserResult1, premiumGroupProductName: tmp };
    obj7.body = intl3.formatToPlainString(_modDef3199.tej76V, obj9);
    return obj7;
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