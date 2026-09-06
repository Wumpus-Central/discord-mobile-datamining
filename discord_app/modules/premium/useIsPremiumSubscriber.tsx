// discord_app/modules/premium/useIsPremiumSubscriber.tsx
import closure_2 from "../../stores/UserStore.tsx";
import { PremiumTypes } from "PremiumConstants.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/useIsPremiumSubscriber.tsx");

export const useIsPremiumSubscriber = function useIsPremiumSubscriber(TIER_2) {
  if (TIER_2 === undefined) {
    TIER_2 = PremiumTypes.TIER_2;
  }
  const items = [closure_2];
  return TIER_2(504).useStateFromStores(items, () => {
    const currentUser = closure_1_2.getCurrentUser();
    return TIER_2(closure_1_1[3]).isPremiumExactly(currentUser, TIER_2);
  });
};
