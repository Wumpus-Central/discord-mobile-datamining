// === Module 13486: usePremiumGroupFeaturesTableCardText ===

// Module 13486 (usePremiumGroupFeaturesTableCardText)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import user from "user" /* 1379 */;
import _modDef3063 from "module_3063" /* 3063 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 8049 */;
import usePremiumGroupPrimaryNameDefault from "usePremiumGroupPrimaryName" /* 13487 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;

require = fn;
const PremiumGroupConstants = fn(4232);
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: hasOwnProperty } = PremiumGroupConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx");

export default function usePremiumGroupFeaturesTableCardText(arg0, arg1) {
  let obj = { useCachedData: true, fetch: arg0 === user.PremiumSubscriptionGroupRole.MEMBER };
  const tmp4 = usePremiumGroupPrimaryNameDefault(obj);
  let obj1 = initialize;
  const items = [SubscriptionStore];
  const stateFromStores = obj1.useStateFromStores(items, () => premiumGroupSubscription.getPremiumGroupSubscription());
  if (arg0 === user.PremiumSubscriptionGroupRole.UNSPECIFIED) {
    return null;
  } else {
    if (arg0 === user.PremiumSubscriptionGroupRole.PRIMARY) {
      let priceString = PremiumGroupUtils.getPriceString(stateFromStores, { withIntervals: true });
      const tmpResult = PremiumGroupUtils;
    } else {
      priceString = null;
      if (null != tmp4) {
        const intl = util.intl;
        obj = { primaryName: tmp4, premiumGroupProductName: React4() };
        priceString = intl.format(_modDef3063.Nu9LNm, obj);
      }
    }
    let str = "...";
    if (null != priceString) {
      str = priceString;
    }
    if (arg0 === user.PremiumSubscriptionGroupRole.PRIMARY) {
      const intl3 = util.intl;
      obj = { helpCenterLink, premiumGroupProductName: React4() };
      let formatResult = intl3.format(_modDef3063["+R/K74"], obj);
    } else {
      const intl2 = util.intl;
      const tmp3Result = _modDef3063;
      obj1 = { helpCenterLink };
      formatResult = intl2.format(arg1 ? tmp3Result["xF+upx"] : tmp3Result.qqfnOm, obj1);
    }
    const obj2 = { subheaderString: str, bodyString: formatResult };
    return obj2;
  }
};