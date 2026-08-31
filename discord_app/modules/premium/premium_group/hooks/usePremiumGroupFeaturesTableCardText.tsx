// discord_app/modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import create from "../../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import usePremiumGroupPrimaryNameDefault from "usePremiumGroupPrimaryName.tsx";
import closure_3 from "../../../../stores/billing/SubscriptionStore.tsx";
import SubscriptionStatusTypes from "../PremiumGroupConstants.tsx";

require = arg1;
({ getPremiumGroupProductName: c4, HELP_CENTER_LINK: c5 } = SubscriptionStatusTypes);
const result = require("set").fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx");

export default function usePremiumGroupFeaturesTableCardText(arg0, arg1) {
  let obj = { useCachedData: true, fetch: arg0 === create.PremiumSubscriptionGroupRole.MEMBER };
  const tmp4 = usePremiumGroupPrimaryNameDefault(obj);
  obj1 = initialize;
  const items = [closure_3];
  const stateFromStores = obj1.useStateFromStores(items, () => premiumGroupSubscription.getPremiumGroupSubscription());
  if (arg0 === create.PremiumSubscriptionGroupRole.UNSPECIFIED) {
    return null;
  } else {
    if (arg0 === tmp(1938).PremiumSubscriptionGroupRole.PRIMARY) {
      let priceString = tmp(7926).getPriceString(stateFromStores, { withIntervals: true });
      const tmpResult = tmp(7926);
    } else {
      priceString = null;
      if (null != tmp4) {
        const intl = tmp(1236).intl;
        obj = { primaryName: null, premiumGroupProductName: null };
        obj[0] = tmp4;
        obj[1] = callback();
        priceString = intl.format(tmp3(2987).Nu9LNm, obj);
      }
    }
    let str = "...";
    if (null != priceString) {
      str = priceString;
    }
    if (arg0 === tmp(1938).PremiumSubscriptionGroupRole.PRIMARY) {
      const intl3 = tmp(1236).intl;
      obj = { helpCenterLink: null, premiumGroupProductName: null };
      obj[0] = closure_5;
      obj[1] = callback();
      let formatResult = intl3.format(tmp3(2987)["+R/K74"], obj);
    } else {
      const intl2 = tmp(1236).intl;
      const tmp3Result = tmp3(2987);
      obj1 = { helpCenterLink: null };
      obj1[0] = closure_5;
      formatResult = intl2.format(arg1 ? tmp3Result["xF+upx"] : tmp3Result.qqfnOm, obj1);
    }
    const obj2 = { subheaderString: null, bodyString: null };
    obj2[0] = str;
    obj2[1] = formatResult;
    return obj2;
  }
};