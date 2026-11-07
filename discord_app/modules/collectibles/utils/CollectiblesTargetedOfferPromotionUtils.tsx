// === Module 9639: CollectiblesTargetedOfferPromotionUtils ===

// Module 9639 (CollectiblesTargetedOfferPromotionUtils)
import util from "util" /* 1113 */;
import StorefrontTypes from "StorefrontTypes" /* 7475 */;
import CollectiblesProductUtils from "CollectiblesProductUtils" /* 7807 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7808 */;
import StorefrontCollectiblesTypes from "StorefrontCollectiblesTypes" /* 9568 */;
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
  if (null != rewardStatus) {
    if (rewardStatus.rewardStatus === StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.EARNED) {
      let type;
      if (rewardStatus != null) {
        const tenantMetadata = rewardStatus.tenantMetadata;
        if (tenantMetadata != null) {
          const collectibles = tenantMetadata.collectibles;
          if (collectibles != null) {
            type = collectibles.type;
          }
        }
      }
      if (type === StorefrontCollectiblesTypes.StorefrontPromotionCollectiblesType.TARGETED_OFFER) {
        const rewardConfig = rewardStatus.rewardConfig;
        let discount;
        if (rewardConfig != null) {
          discount = rewardConfig.discount;
        }
        let tmp3 = null;
        if (null != discount) {
          tmp3 = null;
          if (!tmp8Result.isPremiumCollectiblesProduct(isFirstParty)) {
            let tmp5 = null;
            if (isFirstParty.isFirstParty) {
              if (!tmp8Result3.isBundleProduct(isFirstParty)) {
                let tmp7 = null;
                if (discount.fiatEnabled) {
                  tmp7 = null;
                  if (tmp8Result4.getHasNonOrbPrice(isFirstParty)) {
                    tmp7 = rewardStatus;
                  }
                  tmp8Result4 = CollectiblesProductUtils;
                }
                let tmp6 = tmp7;
              } else {
                tmp6 = null;
              }
              tmp5 = tmp6;
              tmp8Result3 = CollectiblesUtils;
            }
            tmp3 = tmp5;
          }
          tmp8Result = CollectiblesUtils;
        }
        return tmp3;
      }
    }
  }
  return null;
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