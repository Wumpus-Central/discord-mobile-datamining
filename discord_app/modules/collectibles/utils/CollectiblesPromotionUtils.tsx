// === Module 9382: CollectiblesPromotionUtils ===

// Module 9382 (CollectiblesPromotionUtils)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9351 */;
import CollectiblesCollectAndClaimPromotionUtils from "CollectiblesCollectAndClaimPromotionUtils" /* 9383 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 9385 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromotionUtils.tsx");

export function getPromotionForCollectiblesProduct(selectedProduct, tenantMetadata, arg2) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  if (null != tmp) {
    return tmp;
  } else {
    let type;
    if (tenantMetadata != null) {
      tenantMetadata = tenantMetadata.tenantMetadata;
      if (tenantMetadata != null) {
        const collectibles = tenantMetadata.collectibles;
        if (collectibles != null) {
          type = collectibles.type;
        }
      }
    }
    if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.COLLECT_AND_CLAIM === type) {
      return CollectiblesCollectAndClaimPromotionUtils.getCollectAndClaimPromotionForCollectiblesProduct(selectedProduct, tenantMetadata);
    } else if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
      return CollectiblesTargetedOfferPromotionUtils.getTargetedOfferPromotionForCollectiblesProduct(selectedProduct, tenantMetadata);
    } else {
      return null;
    }
  }
}