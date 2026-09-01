// discord_app/modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import calculateFractionalPremiumInfoDefault from "../../../billing/hooks/useFractionalPremiumInfo.tsx";
import closure_3 from "../../../../stores/UserStore.tsx";
import { FractionalPremiumStates } from "../../PremiumConstants.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [closure_3];
  const obj = initialize;
  return (
    calculateFractionalPremiumInfoDefault().fractionalState === FractionalPremiumStates.NONE &&
    !initialize.useStateFromStores(items, () => {
      currentUser = currentUser.getCurrentUser();
      let isPremiumGroupMemberResult;
      if (currentUser != null) {
        isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
      }
      return true === isPremiumGroupMemberResult;
    })
  );
}
