// === Module 8850: CollectiblesTargetedOfferPromotionUtils ===

// Module 8850 (CollectiblesTargetedOfferPromotionUtils)
import StorefrontTypes from "StorefrontTypes" /* 6735 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7966 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7967 */;
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 8808 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesTargetedOfferPromotionUtils.tsx");

export function isCollectiblesTargetedOfferPromotion(collectiblesPromotionForProduct) {
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
  return type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER;
}
export function getTargetedOfferPromotionForCollectiblesProduct(isFirstParty, rewardStatus) {
  let tmp = collectiblesPricingPromotionForProduct;
  if (collectiblesPricingPromotionForProduct === undefined) {
    tmp = null;
  }
  let type;
  if (tmp != null) {
    const tenantMetadata = tmp.tenantMetadata;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        type = collectibles.type;
      }
    }
  }
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER) {
    return tmp;
  } else {
    if (null != rewardStatus) {
      if (rewardStatus.rewardStatus === StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.EARNED) {
        let type1;
        if (rewardStatus != null) {
          const tenantMetadata2 = rewardStatus.tenantMetadata;
          if (tenantMetadata2 != null) {
            const collectibles2 = tenantMetadata2.collectibles;
            if (collectibles2 != null) {
              type1 = collectibles2.type;
            }
          }
        }
        if (type1 === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER) {
          const rewardConfig = rewardStatus.rewardConfig;
          let discount;
          if (rewardConfig != null) {
            discount = rewardConfig.discount;
          }
          let tmp7 = null;
          if (null != discount) {
            tmp7 = null;
            if (!tmp3Result.isPremiumCollectiblesProduct(isFirstParty)) {
              let tmp9 = null;
              if (isFirstParty.isFirstParty) {
                if (!tmp3Result3.isBundleProduct(isFirstParty)) {
                  let tmp11 = null;
                  if (discount.fiatEnabled) {
                    tmp11 = null;
                    if (tmp3Result4.getHasNonOrbPrice(isFirstParty)) {
                      tmp11 = rewardStatus;
                    }
                    tmp3Result4 = CollectiblesProductUtils;
                  }
                  let tmp10 = tmp11;
                } else {
                  tmp10 = null;
                }
                tmp9 = tmp10;
                tmp3Result3 = CollectiblesUtils;
              }
              tmp7 = tmp9;
            }
            tmp3Result = CollectiblesUtils;
          }
          return tmp7;
        }
      }
    }
    return null;
  }
}
export function hasFiatExclusiveTargetedOfferPromotion(targetedOfferPromotionForCollectiblesProduct) {
  let type;
  if (targetedOfferPromotionForCollectiblesProduct != null) {
    const tenantMetadata = targetedOfferPromotionForCollectiblesProduct.tenantMetadata;
    if (tenantMetadata != null) {
      const collectibles = tenantMetadata.collectibles;
      if (collectibles != null) {
        type = collectibles.type;
      }
    }
  }
  let tmp2 = type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER;
  if (tmp2) {
    let fiatEnabled;
    if (targetedOfferPromotionForCollectiblesProduct != null) {
      const rewardConfig = targetedOfferPromotionForCollectiblesProduct.rewardConfig;
      if (rewardConfig != null) {
        const discount = rewardConfig.discount;
        if (discount != null) {
          fiatEnabled = discount.fiatEnabled;
        }
      }
    }
    tmp2 = true === fiatEnabled;
  }
  return tmp2;
}
export function getTargetedOfferPromotionFlavorStyleOTPCheckout(arg0) {
  let str = "collectibles";
  if (arg0 === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesFlavor.NITRO) {
    str = "nitro-pink";
  }
  return str;
}
export function getTargetedOfferPromotionFlavorModalGradient(arg0) {
  let str = "purple";
  if (arg0 === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesFlavor.NITRO) {
    str = "nitro-pink";
  }
  return str;
}