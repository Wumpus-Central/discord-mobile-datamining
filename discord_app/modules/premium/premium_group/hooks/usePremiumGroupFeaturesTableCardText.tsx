// discord_app/modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx
import reset from "reset";
import SubscriptionStatusTypes from "SubscriptionStatusTypes";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { create } from "../../../../../discord_common/js/packages/protos/discord_protos/users/v1/user.tsx";
import { usePremiumGroupPrimaryName } from "usePremiumGroupPrimaryName.tsx";

let c4;
let c5;
const require = arg1;
({ getPremiumGroupProductName: c4, HELP_CENTER_LINK: c5 } = SubscriptionStatusTypes);
const result = require("getSystemLocale").fileFinishedImporting("modules/premium/premium_group/hooks/usePremiumGroupFeaturesTableCardText.tsx");

export default function usePremiumGroupFeaturesTableCardText(arg0, arg1) {
  let obj = { useCachedData: true, fetch: arg0 === create /* create */.PremiumSubscriptionGroupRole.MEMBER };
  const tmp4 = usePremiumGroupPrimaryName(obj);
  let obj1 = initialize /* initialize */;
  const items = [reset];
  const stateFromStores = obj1.useStateFromStores(items, () => premiumGroupSubscription.getPremiumGroupSubscription());
  if (arg0 === create /* create */.PremiumSubscriptionGroupRole.UNSPECIFIED) {
    return null;
  } else {
    if (arg0 === tmp(1892).PremiumSubscriptionGroupRole.PRIMARY) {
      let priceString = tmp(7966).getPriceString(stateFromStores, { withIntervals: true });
      const tmpResult = tmp(7966);
    } else {
      priceString = null;
      if (null != tmp4) {
        const intl = tmp(1236).intl;
        obj = { primaryName: null, premiumGroupProductName: null };
        obj[0] = tmp4;
        obj[1] = callback();
        priceString = intl.format(tmp3(2867).Nu9LNm, obj);
      }
    }
    let str = "...";
    if (null != priceString) {
      str = priceString;
    }
    if (arg0 === tmp(1892).PremiumSubscriptionGroupRole.PRIMARY) {
      const intl3 = tmp(1236).intl;
      obj = { helpCenterLink: null, premiumGroupProductName: null };
      obj[0] = closure_5;
      obj[1] = callback();
      let formatResult = intl3.format(tmp3(2867)["+R/K74"], obj);
    } else {
      const intl2 = tmp(1236).intl;
      const tmp3Result = tmp3(2867);
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