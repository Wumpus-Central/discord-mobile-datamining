// === Module 10637: useCanBoostGuildFromMobile ===

// Module 10637 (useCanBoostGuildFromMobile)
import initialize from "initialize" /* 504 */;
import GuildBoostingUtils from "GuildBoostingUtils" /* 9169 */;
import MobileWebRedirectCheckoutUtils from "MobileWebRedirectCheckoutUtils" /* 9647 */;
import canBoostGuildFromMobileDefault from "canBoostGuildFromMobile" /* 10638 */;
import GuildBoostPurchasingUtils from "GuildBoostPurchasingUtils" /* 10639 */;
import GuildBoostSlotStore from "GuildBoostSlotStore" /* 9170 */;
import SubscriptionStore from "SubscriptionStore" /* 2176 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/hooks/useCanBoostGuildFromMobile.tsx");

export default function useCanBoostGuildFromMobile(boostsNeeded) {
  items = [SubscriptionStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => ({ hasFetchedSubscriptions: SubscriptionStore.hasFetchedSubscriptions(), premiumSubscription: SubscriptionStore.getPremiumTypeSubscription() }));
  ({ hasFetchedSubscriptions, premiumSubscription } = stateFromStoresObject);
  const items1 = [GuildBoostSlotStore];
  const stateFromStoresObject1 = initialize.useStateFromStoresObject(items1, () => {
    const obj = { hasFetchedBoostSlots: GuildBoostSlotStore.hasFetched, availableBoostSlotCount: null };
    let num = 0;
    if (GuildBoostSlotStore.hasFetched) {
      num = GuildBoostingUtils.getAvailableGuildBoostSlots(tmp.boostSlots).length;
    }
    obj.availableBoostSlotCount = num;
    return obj;
  });
  ({ hasFetchedBoostSlots, availableBoostSlotCount } = stateFromStoresObject1);
  const obj3 = { hasFetchedSubscriptions, isPurchaseBlocked: null, isWebRedirectCheckoutEnabled: null, hasFetchedBoostSlots: null, availableBoostSlotCount: null, boostsNeeded: null };
  const tmp3 = canBoostGuildFromMobileDefault;
  obj3.isPurchaseBlocked = null != GuildBoostPurchasingUtils.getMobileBoostPurchaseBlockedMessage(premiumSubscription);
  obj3.isWebRedirectCheckoutEnabled = MobileWebRedirectCheckoutUtils.isMobileWebRedirectCheckoutEnabled();
  obj3.hasFetchedBoostSlots = hasFetchedBoostSlots;
  obj3.availableBoostSlotCount = availableBoostSlotCount;
  obj3.boostsNeeded = boostsNeeded;
  return tmp3(obj3);
};