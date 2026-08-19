// === Module 11674: useCanPurchaseBoosts ===

// Module 11674 (useCanPurchaseBoosts)
import initialize from "initialize" /* 589 */;
import calculateFractionalPremiumInfoDefault from "calculateFractionalPremiumInfo" /* 5356 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { FractionalPremiumStates } from "GuildFeatures" /* 1924 */;

require = fn;
const result = require("obj132").fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [closure_3];
  return calculateFractionalPremiumInfoDefault().fractionalState === FractionalPremiumStates.NONE && !initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};