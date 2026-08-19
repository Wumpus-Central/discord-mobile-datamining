// discord_app/modules/premium/useIsPremiumSubscriber.tsx
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import { PremiumTypes } from "PremiumConstants.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = function useIsPremiumSubscriber(TIER_2) {
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  const items = [closure_2];
  return TIER_2(589).useStateFromStores(items, () => {
    const currentUser = closure_1_2.getCurrentUser();
    return TIER_2(dependencyMap[3]).isPremiumExactly(currentUser, TIER_2);
  });
};