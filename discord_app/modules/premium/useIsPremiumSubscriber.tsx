// === Module 9505: useIsPremiumSubscriber ===

// Module 9505 (useIsPremiumSubscriber)
import closure_2 from "mergeGuildAvatar" /* 1922 */;
import { PremiumTypes } from "GuildFeatures" /* 1924 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = function useIsPremiumSubscriber(TIER_2) {
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  const items = [closure_2];
  return TIER_2(589).useStateFromStores(items, () => {
    const currentUser = closure_1_2.getCurrentUser();
    return TIER_2(closure_1_1[3]).isPremiumExactly(currentUser, TIER_2);
  });
};