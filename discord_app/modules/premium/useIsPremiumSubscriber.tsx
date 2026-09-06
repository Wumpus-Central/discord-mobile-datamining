// discord_app/modules/premium/useIsPremiumSubscriber.tsx
import PremiumTypeUtils from "../../utils/PremiumTypeUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = function useIsPremiumSubscriber(TIER_2) {
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  const items = [UserStore];
  return TIER_2(504).useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    return PremiumTypeUtils.isPremiumExactly(currentUser, TIER_2);
  });
};
