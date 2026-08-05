import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { areSetsEqual } from "../../../../../discord_common/js/shared/utils/SetUtils.tsx";
import { AccountCreditTier } from "../../../premium/native/PremiumAccountCredit.tsx";
// discord_app/modules/premium_marketing/native/components/BuyNitroAccountCredit.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import reset from "reset";
import addEntitlement from "addEntitlement";
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_6 } from "GuildFeatures";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let obj = { creditList: null };
obj = { borderRadius: require("Themes").modules.mobile.TABLE_ROW_BORDER_RADIUS };
obj[0] = obj;
let closure_8 = createCacheKey.createStyles(obj);
const memoResult = require("noop").memo(function BuyNitroAccountCredit() {
  let obj = initialize /* initialize */;
  const items = [addEntitlement];
  const stateFromStores = obj.useStateFromStores(items, () => {
    forApplication = forApplication.getForApplication(closure_6);
    if (forApplication == null) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], areSetsEqual /* areSetsEqual */.areSetsEqual);
  const tmp = callback();
  const items1 = [reset];
  const stateFromStores1 = initialize /* initialize */.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const obj2 = initialize /* initialize */;
  const items2 = [mergeGuildAvatar];
  const stateFromStores2 = initialize /* initialize */.useStateFromStores(items2, () => {
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
  return jsx(AccountCreditTier, { creditListContainerStyle: tmp.creditList, currentSubscription: stateFromStores1, entitlements: stateFromStores, hasPremiumGroup: stateFromStores2 });
});
const result = require("reset").fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroAccountCredit.tsx");

export default memoResult;