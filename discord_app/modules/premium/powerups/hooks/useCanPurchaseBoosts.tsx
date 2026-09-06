// === Module 12505: useCanPurchaseBoosts ===

// Module 12505 (useCanPurchaseBoosts)
import initialize from "initialize" /* 504 */;
import calculateFractionalPremiumInfoDefault from "calculateFractionalPremiumInfo" /* 7393 */;
import closure_3 from "mergeGuildAvatar" /* 1371 */;
import { FractionalPremiumStates } from "GuildFeatures" /* 1373 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [closure_3];
  const obj = initialize;
  return calculateFractionalPremiumInfoDefault().fractionalState === FractionalPremiumStates.NONE && !initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};