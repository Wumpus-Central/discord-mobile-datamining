// discord_app/modules/premium/premium_group/PremiumGroupUtils.native.tsx
import util from "../../../intl/index.native.tsx";
import _modDef3063 from "PremiumGroup.messages.js";
import UserUtils from "../../../utils/UserUtils.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const PremiumGroupConstants = fn(4232);
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: hasOwnProperty } = PremiumGroupConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/PremiumGroupUtils.native.tsx");
for (const key10025 in require("PremiumGroupUtils.shared.tsx")) {
  arg5[key10025] = require("PremiumGroupUtils.shared.tsx")[key10025];
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
        let obj4 = UserUtils;
        nameFromUserResult = obj4.nameFromUser(user);
      }
      tmp8 = nameFromUserResult;
    }
    let tmp15 = null;
    if (null != tmp8) {
      let obj = { message: null, header: null, body: null };
      const intl4 = util.intl;
      obj = { receiverName: tmp8, premiumGroupProductName: tmp };
      obj.message = intl4.format(_modDef3063.MkcFjx, obj);
      const intl5 = util.intl;
      const obj1 = { premiumGroupProductName: tmp };
      obj.header = intl5.formatToPlainString(_modDef3063["5uwv8J"], obj1);
      const intl6 = util.intl;
      const obj2 = { receiverName: tmp8 };
      obj.body = intl6.formatToPlainString(_modDef3063["AmE0B/"], obj2);
      tmp15 = obj;
    }
    return tmp15;
  } else {
    obj = UserUtils;
    const nameFromUserResult1 = obj.nameFromUser(sender);
    const obj3 = { message: null, header: null, body: null };
    const intl = util.intl;
    obj4 = { senderName: nameFromUserResult1, premiumGroupProductName: tmp, helpCenterLink };
    obj3.message = intl.format(_modDef3063["51Kv/4"], obj4);
    const intl2 = util.intl;
    obj3.header = intl2.string(_modDef3063.ssge1y);
    const intl3 = util.intl;
    const obj5 = { senderName: nameFromUserResult1, premiumGroupProductName: tmp };
    obj3.body = intl3.formatToPlainString(_modDef3063.tej76V, obj5);
    return obj3;
  }
};
export function useIsEligibleForPremiumGroupPurchase() {
  return false;
}
export const useCheckoutInstancePremiumGroupPurchaseEligibility =
  function useCheckoutInstancePremiumGroupPurchaseEligibility(arg0) {
    return false;
  };
export function useIsEligibleForPremiumGroupMarketingMaterials() {
  return false;
}
export function useIsEligibleForPremiumGroupNitroTabMarketingMaterials() {
  return false;
}
