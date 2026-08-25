// === Module 12368: useShouldShowPremiumProfileFrameCTA ===

// Module 12368 (useShouldShowPremiumProfileFrameCTA)
import set from "set" /* 2 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1950 */;
import useCanPurchaseFramesDefault from "useCanPurchaseFrames" /* 9549 */;
import useShouldShowPremiumProfileFrameEADefault from "useShouldShowPremiumProfileFrameEA" /* 12369 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = useShouldShowPremiumProfileFrameEADefault(_location) && !useCanPurchaseFramesDefault(_location);
  if (tmp2) {
    tmp2 = location.product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};