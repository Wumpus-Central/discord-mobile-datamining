// discord_app/modules/premium_marketing/native/components/BuyNitroAccountCredit.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import SetUtils from "../../../../../discord_common/js/shared/utils/SetUtils.tsx";
import PremiumAccountCreditDefault from "../../../premium/native/PremiumAccountCredit.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import SubscriptionStore from "../../../../stores/billing/SubscriptionStore.tsx";
import EntitlementStore from "../../../../stores/game_store/EntitlementStore.tsx";

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
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      forApplication = forApplication.getForApplication(closure_1_6);
      if (forApplication == null) {
        const _Set = Set;
        forApplication = new Set();
      }
      return forApplication;
    },
    [],
    SetUtils.areSetsEqual,
  );
  const tmp = closure_8();
  const items1 = [SubscriptionStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () =>
    premiumTypeSubscription.getPremiumTypeSubscription(),
  );
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
  obj = {
    creditListContainerStyle: tmp.creditList,
    currentSubscription: stateFromStores1,
    entitlements: stateFromStores,
    hasPremiumGroup: stateFromStores2,
  };
  return jsx(PremiumAccountCreditDefault, {
    creditListContainerStyle: tmp.creditList,
    currentSubscription: stateFromStores1,
    entitlements: stateFromStores,
    hasPremiumGroup: stateFromStores2,
  });
});
