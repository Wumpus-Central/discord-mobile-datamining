// === Module 14204: useIsPremiumSubscriber ===

// Module 14204 (useIsPremiumSubscriber)
import PremiumTypeUtils from "PremiumTypeUtils" /* 2108 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const PremiumTypes = fn(1388).PremiumTypes;
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