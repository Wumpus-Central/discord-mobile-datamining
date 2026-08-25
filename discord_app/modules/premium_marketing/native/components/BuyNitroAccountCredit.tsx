// === Module 12885: ? ===

// Module 12885
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import areSetsEqual from "areSetsEqual" /* 1433 */;
import AccountCreditTierDefault from "AccountCreditTier" /* 7782 */;
import closure_3 from "mergeGuildAvatar" /* 1922 */;
import closure_4 from "reset" /* 4049 */;
import closure_5 from "addEntitlement" /* 7004 */;
import { PREMIUM_SUBSCRIPTION_APPLICATION as closure_6 } from "GuildFeatures" /* 1924 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
import importAllResult from "noop" /* 19 */;

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