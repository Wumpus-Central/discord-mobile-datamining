// discord_app/modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { FractionalPremiumStates } from "GuildFeatures";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { calculateFractionalPremiumInfo } from "../../../billing/hooks/useFractionalPremiumInfo.tsx";

const require = arg1;
const result = require("calculateFractionalPremiumInfo").fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [mergeGuildAvatar];
  const obj = initialize /* initialize */;
  return calculateFractionalPremiumInfo().fractionalState === FractionalPremiumStates.NONE && !initialize /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};