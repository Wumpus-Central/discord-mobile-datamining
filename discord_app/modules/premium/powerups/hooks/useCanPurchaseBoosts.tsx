// discord_app/modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { FractionalPremiumStates } from "GuildFeatures";

const require = arg1;
const result = require("calculateFractionalPremiumInfo").fileFinishedImporting("modules/premium/powerups/hooks/useCanPurchaseBoosts.tsx");

export default function useCanPurchaseBoosts() {
  const items = [mergeGuildAvatar];
  const obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  return require("../../../billing/hooks/useFractionalPremiumInfo.tsx")().fractionalState === FractionalPremiumStates.NONE && !require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let isPremiumGroupMemberResult;
    if (currentUser != null) {
      isPremiumGroupMemberResult = currentUser.isPremiumGroupMember();
    }
    return true === isPremiumGroupMemberResult;
  });
};