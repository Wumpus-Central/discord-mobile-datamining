// === Module 9385: CollectiblesTargetedOfferPromotionUtils ===

// Module 9385 (CollectiblesTargetedOfferPromotionUtils)
import util from "util" /* 1113 */;
import StorefrontTypes from "StorefrontTypes" /* 7188 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 8430 */;
import CollectiblesUtils from "CollectiblesUtils" /* 8431 */;
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9351 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesTargetedOfferPromotionUtils.tsx");

export function isCollectiblesTargetedOfferPromotion(tenantMetadata) {
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
export function getTargetedOfferPromotionPurchaseCtaText(targetedOfferPromotionForCollectiblesProduct) {
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
  let tmp4 = null;
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER) {
    let discount1;
    if (targetedOfferPromotionForCollectiblesProduct != null) {
      const rewardConfig = targetedOfferPromotionForCollectiblesProduct.rewardConfig;
      if (rewardConfig != null) {
        discount1 = rewardConfig.discount;
      }
    }
    tmp4 = null;
    if (null != discount1) {
      const rewardConfig2 = targetedOfferPromotionForCollectiblesProduct.rewardConfig;
      let type1;
      if (rewardConfig2 != null) {
        const discount = rewardConfig2.discount;
        if (discount != null) {
          type1 = discount.type;
        }
      }
      let tmp7 = type1 === StorefrontTypes.StorefrontDiscountTypes.PERCENT;
      if (tmp7) {
        tmp7 = 100 === targetedOfferPromotionForCollectiblesProduct.rewardConfig.discount.amount;
      }
      const intl = util.intl;
      const string = intl.string;
      let t = util.t;
      if (tmp7) {
        t = t["302tKP"];
        let stringResult = string(t);
      } else {
        stringResult = string(t["7EGhnE"]);
      }
    }
  }
  return tmp4;
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
  if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER) {
    let discount;
    if (targetedOfferPromotionForCollectiblesProduct != null) {
      const rewardConfig = targetedOfferPromotionForCollectiblesProduct.rewardConfig;
      if (rewardConfig != null) {
        discount = rewardConfig.discount;
      }
    }
    return null != discount && discount.fiatEnabled;
  } else {
    return false;
  }
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