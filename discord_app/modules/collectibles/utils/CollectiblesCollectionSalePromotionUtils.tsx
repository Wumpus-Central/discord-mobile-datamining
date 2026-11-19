// discord_app/modules/collectibles/utils/CollectiblesCollectionSalePromotionUtils.tsx
import StorefrontTypes from "../../storefront/StorefrontTypes.tsx";
import StorefrontPromotionRecord from "../../storefront/records/StorefrontPromotionRecord.tsx";
import CollectiblesPromoPriceUtils from "CollectiblesPromoPriceUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
