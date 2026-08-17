// discord_app/modules/premium_marketing/native/components/BuyNitroAccountCredit.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import areSetsEqual from "../../../../../discord_common/js/shared/utils/SetUtils.tsx";
import AccountCreditTierDefault from "../../../premium/native/PremiumAccountCredit.tsx";
import closure_3 from "../../../../stores/UserStore.tsx";
import closure_4 from "../../../../stores/billing/SubscriptionStore.tsx";
import closure_5 from "../../../../stores/game_store/EntitlementStore.tsx";
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_6 } from "../../../premium/PremiumConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
let obj = { creditList: null };
obj = { borderRadius: ThemesDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS };
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function BuyNitroAccountCredit() {
  let obj = initialize;
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => {
    forApplication = forApplication.getForApplication(closure_6);
    if (forApplication == null) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], areSetsEqual.areSetsEqual);
  const tmp = callback();
  const items1 = [closure_4];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = initialize;
  const items2 = [closure_3];
  const stateFromStores2 = initialize.useStateFromStores(items2, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isPremiumWithPremiumGroup();
    }
    if (flag == null) {
      flag = false;
    }
    return flag;
  });
  obj = { creditListContainerStyle: tmp.creditList, currentSubscription: stateFromStores1, entitlements: stateFromStores, hasPremiumGroup: stateFromStores2 };
  return jsx(AccountCreditTierDefault, { creditListContainerStyle: tmp.creditList, currentSubscription: stateFromStores1, entitlements: stateFromStores, hasPremiumGroup: stateFromStores2 });
});
const result = require("set").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroAccountCredit.tsx");

export default memoResult;