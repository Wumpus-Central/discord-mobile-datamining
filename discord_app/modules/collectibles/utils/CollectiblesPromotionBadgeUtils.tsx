// discord_app/modules/collectibles/utils/CollectiblesPromotionBadgeUtils.tsx
import StorefrontTypes from "../../storefront/StorefrontTypes.tsx";
import StorefrontCollectiblesTypes from "../../storefront/collectibles/StorefrontCollectiblesTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromotionBadgeUtils.tsx");

export function shouldShowPromotionBadge(collectiblesPromotionForProduct) {
  let type;
  if (collectiblesPromotionForProduct != null) {
    const tenantMetadata = collectiblesPromotionForProduct.tenantMetadata;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        type = collectibles.type;
      }
    }
  }
  if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
    return (
      collectiblesPromotionForProduct.rewardStatus ===
      StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.IN_PROGRESS
    );
  } else if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
    return true;
  } else {
    return false;
  }
}
