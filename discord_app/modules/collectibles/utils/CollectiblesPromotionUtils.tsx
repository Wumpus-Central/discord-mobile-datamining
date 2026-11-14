// === Module 9449: CollectiblesPromotionUtils ===

// Module 9449 (CollectiblesPromotionUtils)
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9417 */;
import CollectiblesCollectAndClaimPromotionUtils from "CollectiblesCollectAndClaimPromotionUtils" /* 9450 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 9452 */;
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
export function isPromotionInInvoicePreview(getDiscountIdIfExists, rewardConfig) {
  let id;
  if (rewardConfig != null) {
    rewardConfig = rewardConfig.rewardConfig;
    if (rewardConfig != null) {
      const discount = rewardConfig.discount;
      if (discount != null) {
        id = discount.id;
      }
    }
  }
  let tmp2 = null != id;
  if (tmp2) {
    let discountIdIfExists;
    if (getDiscountIdIfExists != null) {
      discountIdIfExists = getDiscountIdIfExists.getDiscountIdIfExists();
    }
    const _String = String;
    tmp2 = discountIdIfExists === String(id);
  }
  return tmp2;
}
export function hasFiatDiscountPromotion(rewardConfig) {
  let fiatEnabled;
  if (rewardConfig != null) {
    rewardConfig = rewardConfig.rewardConfig;
    if (rewardConfig != null) {
      const discount = rewardConfig.discount;
      if (discount != null) {
        fiatEnabled = discount.fiatEnabled;
      }
    }
  }
  return true === fiatEnabled;
}