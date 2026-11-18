// discord_app/modules/collectibles/utils/CollectiblesSequencedOfferPromotionUtils.tsx
import StorefrontTypes from "../../storefront/StorefrontTypes.tsx";
import StorefrontPromotionRecord from "../../storefront/records/StorefrontPromotionRecord.tsx";
import CollectiblesPromoPriceUtils from "CollectiblesPromoPriceUtils.tsx";
import CollectiblesPromotionDiscountUtils from "CollectiblesPromotionDiscountUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
        tmp7 = null != CollectiblesPromotionDiscountUtils.getPromotionPercentOff(rewardStatus);
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
export function getSequencedOfferPromotionForCollectiblesProduct(selectedProduct, appliesToAllSkus) {
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  if (!obj.isBundleProduct(selectedProduct)) {
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
      tmp8 = null;
    }
    let tmp5 = tmp8;
  } else {
    tmp5 = null;
  }
  return tmp5;
}
