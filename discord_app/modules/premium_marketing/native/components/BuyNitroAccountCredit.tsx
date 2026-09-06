// === Module 13407: BuyNitroAccountCredit ===

// Module 13407 (BuyNitroAccountCredit)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import SetUtils from "SetUtils" /* 1974 */;
import PremiumAccountCreditDefault from "PremiumAccountCredit" /* 13348 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;
import EntitlementStore from "EntitlementStore" /* 7394 */;

require = fn;
let closure_6 = fn(1373).PREMIUM_SUBSCRIPTION_APPLICATION;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { creditList: null };
obj = { borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS };
obj.creditList = obj;
let closure_8 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium_marketing/native/components/BuyNitroAccountCredit.tsx");

export default noop.memo(function BuyNitroAccountCredit() {
  let obj = initialize;
  const items = [EntitlementStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    forApplication = forApplication.getForApplication(closure_1_6);
    if (forApplication == null) {
      const _Set = Set;
      forApplication = new Set();
    }
    return forApplication;
  }, [], SetUtils.areSetsEqual);
  const tmp = closure_8();
  const items1 = [SubscriptionStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const items2 = [UserStore];
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
  return jsx(PremiumAccountCreditDefault, { creditListContainerStyle: tmp.creditList, currentSubscription: stateFromStores1, entitlements: stateFromStores, hasPremiumGroup: stateFromStores2 });
});