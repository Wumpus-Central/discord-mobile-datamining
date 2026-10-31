// === Module 11416: useIsPremiumSubscriber ===

// Module 11416 (useIsPremiumSubscriber)
import PremiumTypeUtils from "PremiumTypeUtils" /* 1983 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
const PremiumTypes = fn(1385).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export function useIsPremiumSubscriber() {
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  const items = [UserStore];
  return TIER_2(504).useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    return PremiumTypeUtils.isPremiumExactly(currentUser, TIER_2);
  });
}