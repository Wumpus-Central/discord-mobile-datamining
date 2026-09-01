// discord_app/modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx
import set from "../../../../_runtime/00002_set.js";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import useCanPurchaseFramesDefault from "useCanPurchaseFrames.tsx";
import useShouldShowPremiumProfileFrameEADefault from "useShouldShowPremiumProfileFrameEA.tsx";

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = useShouldShowPremiumProfileFrameEADefault(_location) && !useCanPurchaseFramesDefault(_location);
  if (tmp2) {
    tmp2 = location.product.type === CollectiblesItemType.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
}
