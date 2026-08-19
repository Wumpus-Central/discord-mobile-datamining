// === Module 11994: useShouldShowPremiumProfileFrameCTA ===

// Module 11994 (useShouldShowPremiumProfileFrameCTA)
import obj132 from "obj132" /* 2 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;
import useCanPurchaseFramesDefault from "useCanPurchaseFrames" /* 9233 */;
import useShouldShowPremiumProfileFrameEADefault from "useShouldShowPremiumProfileFrameEA" /* 11995 */;

const result = obj132.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = useShouldShowPremiumProfileFrameEADefault(_location) && !useCanPurchaseFramesDefault(_location);
  if (tmp2) {
    tmp2 = location.product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};