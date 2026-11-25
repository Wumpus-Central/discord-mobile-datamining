// === Module 13442: useCanPurchaseBoosts ===

// Module 13442 (useCanPurchaseBoosts)
import initialize from "initialize" /* 504 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 6327 */;
import UserStore from "UserStore" /* 1386 */;

require = fn;
const FractionalPremiumStates = fn(1388).FractionalPremiumStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  items = [UserStore];
  return useFractionalPremiumInfoDefault().fractionalState === FractionalPremiumStates.NONE && !initialize.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};