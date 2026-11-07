// === Module 15651: usePremiumGroupFeaturesTableCardText ===

// Module 15651 (usePremiumGroupFeaturesTableCardText)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1113 */;
import user from "user" /* 1398 */;
import _modDef3444 from "module_3444" /* 3444 */;
import PremiumGroupUtils from "PremiumGroupUtils" /* 8588 */;
import usePremiumGroupPrimaryNameDefault from "usePremiumGroupPrimaryName" /* 15652 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;

require = fn;
const PremiumGroupConstants = fn(2184);
({ getPremiumGroupProductName: closure_4, HELP_CENTER_LINK: hasOwnProperty } = PremiumGroupConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx");

export default function usePremiumGroupFeaturesTableCardText(arg0, arg1) {
  const tmp4 = usePremiumGroupPrimaryNameDefault({ useCachedData: true, fetch: arg0 === user.PremiumSubscriptionGroupRole.MEMBER });
  const obj = { useCachedData: true, fetch: arg0 === user.PremiumSubscriptionGroupRole.MEMBER };
  items = [SubscriptionStore];
  const stateFromStores = initialize.useStateFromStores(items, () => premiumGroupSubscription.getPremiumGroupSubscription());
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
        const obj3 = { primaryName: tmp4, premiumGroupProductName: React4() };
        priceString = intl.format(_modDef3444.Nu9LNm, obj3);
      }
    }
    let str = "...";
    if (null != priceString) {
      str = priceString;
    }
    if (arg0 === user.PremiumSubscriptionGroupRole.PRIMARY) {
      const intl3 = util.intl;
      const obj4 = { helpCenterLink, premiumGroupProductName: React4() };
      let formatResult = intl3.format(_modDef3444["+R/K74"], obj4);
    } else {
      const intl2 = util.intl;
      const tmp3Result = _modDef3444;
      const obj5 = { helpCenterLink };
      formatResult = intl2.format(arg1 ? tmp3Result["xF+upx"] : tmp3Result.qqfnOm, obj5);
    }
    const obj6 = { subheaderString: str, bodyString: formatResult };
    return obj6;
  }
};