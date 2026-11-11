// discord_app/modules/collectibles/utils/CollectiblesPromotionUtils.tsx
import StorefrontCollectiblesTypes from "../../storefront/collectibles/StorefrontCollectiblesTypes.tsx";
import CollectiblesCollectAndClaimPromotionUtils from "CollectiblesCollectAndClaimPromotionUtils.tsx";
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
      return CollectiblesCollectAndClaimPromotionUtils.getCollectAndClaimPromotionForCollectiblesProduct(
        selectedProduct,
        tenantMetadata,
      );
    } else if (StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER === type) {
      return CollectiblesTargetedOfferPromotionUtils.getTargetedOfferPromotionForCollectiblesProduct(
        selectedProduct,
        tenantMetadata,
      );
    } else {
      return null;
    }
  }
}
