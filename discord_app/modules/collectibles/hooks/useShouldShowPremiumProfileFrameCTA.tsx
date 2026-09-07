// === Module 13164: useShouldShowPremiumProfileFrameCTA ===

// Module 13164 (useShouldShowPremiumProfileFrameCTA)
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import useCanPurchaseFramesDefault from "useCanPurchaseFrames" /* 8835 */;
import useShouldShowPremiumProfileFrameEADefault from "useShouldShowPremiumProfileFrameEA" /* 13165 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = useShouldShowPremiumProfileFrameEADefault(_location) && !useCanPurchaseFramesDefault(_location);
  if (tmp2) {
    tmp2 = location.product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};