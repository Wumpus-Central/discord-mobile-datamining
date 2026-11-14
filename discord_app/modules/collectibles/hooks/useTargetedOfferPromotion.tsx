// === Module 10435: useTargetedOfferPromotion ===

// Module 10435 (useTargetedOfferPromotion)
import Constants from "Constants" /* 1072 */;
import StorefrontTypes from "StorefrontTypes" /* 7251 */;
import usePromotionForApplicationDefault from "usePromotionForApplication" /* 9445 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 9446 */;
import CollectiblesTargetedOfferPromotionUtils from "CollectiblesTargetedOfferPromotionUtils" /* 9452 */;
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
export function useTargetedOfferPromotionForCollectiblesProduct(product) {
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
  const tmp4Result3 = CollectiblesPricingPromotionUtils;
  return CollectiblesTargetedOfferPromotionUtils.getTargetedOfferPromotionForCollectiblesProduct(product, tmp5, collectiblesPricingPromotionForProduct);
}
export function useTargetedOfferPromotionPurchaseCtaText(isFirstParty) {
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
  const collectiblesPricingPromotionForProduct = CollectiblesPricingPromotionUtils.useCollectiblesPricingPromotionForProduct(isFirstParty);
  const tmp4Result4 = CollectiblesPricingPromotionUtils;
  const targetedOfferPromotionForCollectiblesProduct = CollectiblesTargetedOfferPromotionUtils.getTargetedOfferPromotionForCollectiblesProduct(isFirstParty, tmp5, collectiblesPricingPromotionForProduct);
  const tmp4Result5 = CollectiblesTargetedOfferPromotionUtils;
  return CollectiblesTargetedOfferPromotionUtils.getTargetedOfferPromotionPurchaseCtaText(targetedOfferPromotionForCollectiblesProduct);
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