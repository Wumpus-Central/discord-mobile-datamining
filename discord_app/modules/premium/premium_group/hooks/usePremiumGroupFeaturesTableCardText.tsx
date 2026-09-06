// === Module 13486: usePremiumGroupFeaturesTableCardText ===

// Module 13486 (usePremiumGroupFeaturesTableCardText)
import initialize from "initialize" /* 504 */;
import user from "user" /* 1379 */;
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
    if (arg0 === tmp(1379).PremiumSubscriptionGroupRole.PRIMARY) {
      let priceString = tmp(8049).getPriceString(stateFromStores, { withIntervals: true });
      const tmpResult = tmp(8049);
    } else {
      priceString = null;
      if (null != tmp4) {
        const intl = tmp(1114).intl;
        obj = { primaryName: tmp4, premiumGroupProductName: React4() };
        priceString = intl.format(tmp3(3063).Nu9LNm, obj);
      }
    }
    let str = "...";
    if (null != priceString) {
      str = priceString;
    }
    if (arg0 === tmp(1379).PremiumSubscriptionGroupRole.PRIMARY) {
      const intl3 = tmp(1114).intl;
      obj = { helpCenterLink, premiumGroupProductName: React4() };
      let formatResult = intl3.format(tmp3(3063)["+R/K74"], obj);
    } else {
      const intl2 = tmp(1114).intl;
      const tmp3Result = tmp3(3063);
      obj1 = { helpCenterLink };
      formatResult = intl2.format(arg1 ? tmp3Result["xF+upx"] : tmp3Result.qqfnOm, obj1);
    }
    const obj2 = { subheaderString: str, bodyString: formatResult };
    return obj2;
  }
};