// === Module 8845: CollectiblesSequencedOfferPromotionUtils ===

// Module 8845 (CollectiblesSequencedOfferPromotionUtils)
import StorefrontTypes from "StorefrontTypes" /* 6735 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 8807 */;
import CollectiblesPromoPriceUtils from "CollectiblesPromoPriceUtils" /* 8843 */;
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils" /* 8846 */;
import size from "module_2" /* 2 */;

function isSequencedOfferRewardAvailable(rewardStatus) {
  let tmp = null != rewardStatus;
  if (tmp) {
    tmp = null != closure_2(rewardStatus);
  }
  if (tmp) {
    let tmp5 = rewardStatus.rewardStatus !== StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.CONSUMED;
    if (tmp5) {
      tmp5 = rewardStatus.rewardStatus !== StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.NOT_ELIGIBLE;
    }
    if (tmp5) {
      let actionType;
      if (rewardStatus != null) {
        const rewardConfig = rewardStatus.rewardConfig;
        if (rewardConfig != null) {
          const action = rewardConfig.action;
          if (action != null) {
            actionType = action.actionType;
          }
        }
      }
      let tmp7 = actionType === StorefrontTypes.StorefrontPromotionActionType.NON_COMMERCE_ORBS_BACK;
      if (!tmp7) {
        tmp7 = null != CollectiblesPromotionDiscountUtils.getPromotionFiatPercentOff(rewardStatus);
        const tmp3Result = CollectiblesPromotionDiscountUtils;
      }
      tmp5 = tmp7;
    }
    tmp = tmp5;
  }
  return tmp;
}
let closure_2 = StorefrontPromotionRecord.getCollectiblesCollectionSequencedOffer;
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesSequencedOfferPromotionUtils.tsx");

export function isOrbsBackPromotion(rewardConfig) {
  let actionType;
  if (rewardConfig != null) {
    rewardConfig = rewardConfig.rewardConfig;
    if (rewardConfig != null) {
      const action = rewardConfig.action;
      if (action != null) {
        actionType = action.actionType;
      }
    }
  }
  return actionType === StorefrontTypes.StorefrontPromotionActionType.NON_COMMERCE_ORBS_BACK;
}
export { isSequencedOfferRewardAvailable };
export function getSequencedOfferPromotionForCollectiblesProduct(skuId, appliesToAllSkus) {
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (!obj.isBundleProduct(skuId)) {
    if (appliesToAllSkus.appliesToAllSkus) {
      let tmp8 = null;
      if (tmp3Result.isStorefrontPromotionActive(appliesToAllSkus, timestamp)) {
        tmp8 = null;
        if (isSequencedOfferRewardAvailable(appliesToAllSkus)) {
          tmp8 = appliesToAllSkus;
        }
      }
      tmp3Result = CollectiblesPromoPriceUtils;
    } else {
      const skuIds = appliesToAllSkus.skuIds;
      let hasItem;
      if (skuIds != null) {
        hasItem = skuIds.includes(skuId.skuId);
      }
      tmp8 = null;
    }
    let tmp5 = tmp8;
  } else {
    tmp5 = null;
  }
  return tmp5;
}