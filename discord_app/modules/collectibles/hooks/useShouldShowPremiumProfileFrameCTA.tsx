import { CollectiblesItemType } from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import { useCanPurchaseFrames } from "useCanPurchaseFrames.tsx";
import { useShouldShowPremiumProfileFrameEA } from "useShouldShowPremiumProfileFrameEA.tsx";
// discord_app/modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = useShouldShowPremiumProfileFrameEA(_location) && !useCanPurchaseFrames(_location);
  if (tmp2) {
    tmp2 = location.product.type === CollectiblesItemType /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};