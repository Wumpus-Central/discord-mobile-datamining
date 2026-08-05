// discord_app/modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx
const result = require("CollectiblesItemType").fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameCTA.tsx");

export default function useShouldShowPremiumProfileFrameCTA(location) {
  const _location = location.location;
  let tmp2 = require("useShouldShowPremiumProfileFrameEA.tsx")(_location) && !require("useCanPurchaseFrames.tsx")(_location);
  if (tmp2) {
    tmp2 = location.product.type === require("../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx") /* CollectiblesItemType */.CollectiblesItemType.PROFILE_FRAME;
  }
  return tmp2;
};