// === Module 8971: CollectiblesCollectionSalePromotionUtils ===

// Module 8971 (CollectiblesCollectionSalePromotionUtils)
import StorefrontTypes from "StorefrontTypes" /* 6854 */;
import StorefrontPromotionRecord from "StorefrontPromotionRecord" /* 8927 */;
import CollectiblesPromoPriceUtils from "CollectiblesPromoPriceUtils" /* 8963 */;
import size from "module_2" /* 2 */;

let closure_2 = StorefrontPromotionRecord.getCollectiblesCollectionSale;
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesCollectionSalePromotionUtils.tsx");

export function getCollectionSalePromotionForCollectiblesProduct(skuId, rewardStatus) {
  if (timestamp === undefined) {
    const _Date = Date;
    timestamp = Date.now();
  }
  let tmp3 = null;
  if (null != closure_2(rewardStatus)) {
    tmp3 = null;
    if (rewardStatus.rewardStatus === StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.EARNED) {
      tmp3 = null;
      if (tmp4Result.isStorefrontPromotionActive(rewardStatus, timestamp)) {
        const skuIds = rewardStatus.skuIds;
        let hasItem;
        if (skuIds != null) {
          hasItem = skuIds.includes(skuId.skuId);
        }
        tmp3 = null;
        if (true === hasItem) {
          tmp3 = rewardStatus;
        }
      }
      tmp4Result = CollectiblesPromoPriceUtils;
    }
  }
  return tmp3;
}