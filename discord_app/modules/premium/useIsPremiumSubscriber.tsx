// === Module 11567: useIsPremiumSubscriber ===

// Module 11567 (useIsPremiumSubscriber)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2107 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const PremiumTypes = fn(1387).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export function useIsPremiumSubscriber() {
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  items = [UserStore];
  return TIER_2(504).useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    return PremiumTypeUtils.isPremiumExactly(currentUser, TIER_2);
  });
}