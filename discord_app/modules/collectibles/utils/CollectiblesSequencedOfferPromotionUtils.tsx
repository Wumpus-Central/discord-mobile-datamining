// === Module 11108: CollectiblesSequencedOfferPromotionUtils ===

// Module 11108 (CollectiblesSequencedOfferPromotionUtils)
import StorefrontTypes from "StorefrontTypes" /* 7469 */;
import CollectiblesPromoPriceUtils from "CollectiblesPromoPriceUtils" /* 11106 */;
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils" /* 11109 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 10982 */;
import size from "module_2" /* 2 */;

function isSequencedOfferRewardAvailable(rewardStatus) {
  let tmp = null != rewardStatus;
  if (tmp) {
    tmp = null != React3(rewardStatus);
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
({ doesStorefrontPromotionCoverSku: c2, getCollectiblesCollectionSequencedOffer: c3 } = StorefrontPromotionRecord);
let result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesSequencedOfferPromotionUtils.tsx");

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
export function getSequencedOfferPromotionForCollectiblesProduct(skuId, includeBundles) {
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (!obj.isBundleProduct(skuId)) {
    let tmp7 = null;
    if (React2(includeBundles, skuId.skuId)) {
      tmp7 = null;
      if (tmp3Result.isStorefrontPromotionActive(includeBundles, timestamp)) {
        tmp7 = null;
        if (isSequencedOfferRewardAvailable(includeBundles)) {
          tmp7 = includeBundles;
        }
      }
      tmp3Result = CollectiblesPromoPriceUtils;
    }
    let tmp5 = tmp7;
  } else {
    tmp5 = null;
  }
  return tmp5;
}
export function getActiveSequencedOfferPromotion(arr, arg1, arg2) {
  closure_0 = arg1;
  closure_1 = arg2;
  let found;
  if (arr != null) {
    found = arr.find((item) => {
      const tmp = React3(item);
      let result = null != tmp;
      if (result) {
        result = tmp.collectionId === closure_0;
      }
      if (result) {
        result = CollectiblesPromoPriceUtils.isStorefrontPromotionActive(item, closure_1);
      }
      return result;
    });
  }
  if (found == null) {
    found = null;
  }
  return found;
}