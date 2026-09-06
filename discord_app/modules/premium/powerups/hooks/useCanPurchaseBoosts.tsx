// discord_app/modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import useFractionalPremiumInfoDefault from "../../../billing/hooks/useFractionalPremiumInfo.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const FractionalPremiumStates = fn(1373).FractionalPremiumStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [UserStore];
  return (
    useFractionalPremiumInfoDefault().fractionalState === FractionalPremiumStates.NONE &&
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
