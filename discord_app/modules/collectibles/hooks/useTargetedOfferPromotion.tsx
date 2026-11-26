// === Module 11247: useTargetedOfferPromotion ===

// Module 11247 (useTargetedOfferPromotion)
import Constants from "Constants" /* 1071 */;
import StorefrontTypes from "StorefrontTypes" /* 7595 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 11248 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 11249 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 11250 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants.COLLECTIBLES_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useTargetedOfferPromotion.tsx");

export function useEligibleCollectiblesTargetedOfferPromotion() {
  const tmp2 = usePromotionForApplicationDefault(closure_3);
  let rewardStatus;
  if (tmp2 != null) {
    rewardStatus = tmp2.rewardStatus;
  }
  let tmp5 = null;
  if (rewardStatus === StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.EARNED) {
    tmp5 = null;
    if (tmp4Result.isCollectiblesTargetedOfferPromotion(tmp2)) {
      tmp5 = tmp2;
    }
    tmp4Result = CollectiblesTargetedOfferPromotionUtils;
  }
  return tmp5;
}
export function useTargetedOfferPromotionForCollectiblesProduct(skuId) {
  const tmp2 = usePromotionForApplicationDefault(closure_3);
  let rewardStatus;
  if (tmp2 != null) {
    rewardStatus = tmp2.rewardStatus;
  }
  let tmp5 = null;
  if (rewardStatus === StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.EARNED) {
    tmp5 = null;
    if (tmp4Result.isCollectiblesTargetedOfferPromotion(tmp2)) {
      tmp5 = tmp2;
    }
    tmp4Result = CollectiblesTargetedOfferPromotionUtils;
  }
  const collectiblesPricingPromotionForProduct = CollectiblesPricingPromotionUtils.useCollectiblesPricingPromotionForProduct(skuId);
  const tmp4Result3 = CollectiblesPricingPromotionUtils;
  return CollectiblesTargetedOfferPromotionUtils.getTargetedOfferPromotionForCollectiblesProduct(skuId, tmp5, collectiblesPricingPromotionForProduct);
}
export function useIsFiatExclusiveTargetedOfferPromotion(product) {
  const tmp2 = usePromotionForApplicationDefault(closure_3);
  let rewardStatus;
  if (tmp2 != null) {
    rewardStatus = tmp2.rewardStatus;
  }
  let tmp5 = null;
  if (rewardStatus === StorefrontTypes.StorefrontPromotionRewardEligibilityStatus.EARNED) {
    tmp5 = null;
    if (tmp4Result.isCollectiblesTargetedOfferPromotion(tmp2)) {
      tmp5 = tmp2;
    }
    tmp4Result = CollectiblesTargetedOfferPromotionUtils;
  }
  const collectiblesPricingPromotionForProduct = CollectiblesPricingPromotionUtils.useCollectiblesPricingPromotionForProduct(product);
  const tmp4Result4 = CollectiblesPricingPromotionUtils;
  const targetedOfferPromotionForCollectiblesProduct = CollectiblesTargetedOfferPromotionUtils.getTargetedOfferPromotionForCollectiblesProduct(product, tmp5, collectiblesPricingPromotionForProduct);
  const tmp4Result5 = CollectiblesTargetedOfferPromotionUtils;
  return CollectiblesTargetedOfferPromotionUtils.hasFiatExclusiveTargetedOfferPromotion(targetedOfferPromotionForCollectiblesProduct);
}