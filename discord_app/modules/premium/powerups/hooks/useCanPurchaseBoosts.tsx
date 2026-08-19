// discord_app/modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import calculateFractionalPremiumInfoDefault from "../../../billing/hooks/useFractionalPremiumInfo.tsx";
import mergeGuildAvatar from "../../../../stores/UserStore.tsx";
import { FractionalPremiumStates } from "../../PremiumConstants.tsx";

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