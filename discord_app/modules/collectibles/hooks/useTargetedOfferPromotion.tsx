// discord_app/modules/collectibles/hooks/useTargetedOfferPromotion.tsx
import Constants from "../../../Constants.tsx";
import StorefrontTypes from "../../storefront/StorefrontTypes.tsx";
import usePromotionForApplicationDefault from "../../storefront/hooks/usePromotionForApplication.tsx";
import CollectiblesPricingPromotionUtils from "../utils/CollectiblesPricingPromotionUtils.tsx";
import CollectiblesTargetedOfferPromotionUtils from "../utils/CollectiblesTargetedOfferPromotionUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
  const collectiblesPricingPromotionForProduct =
    CollectiblesPricingPromotionUtils.useCollectiblesPricingPromotionForProduct(product);
  const tmp4Result3 = CollectiblesPricingPromotionUtils;
  return CollectiblesTargetedOfferPromotionUtils.getTargetedOfferPromotionForCollectiblesProduct(
    product,
    tmp5,
    collectiblesPricingPromotionForProduct,
  );
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
  const collectiblesPricingPromotionForProduct =
    CollectiblesPricingPromotionUtils.useCollectiblesPricingPromotionForProduct(isFirstParty);
  const tmp4Result4 = CollectiblesPricingPromotionUtils;
  const targetedOfferPromotionForCollectiblesProduct =
    CollectiblesTargetedOfferPromotionUtils.getTargetedOfferPromotionForCollectiblesProduct(
      isFirstParty,
      tmp5,
      collectiblesPricingPromotionForProduct,
    );
  const tmp4Result5 = CollectiblesTargetedOfferPromotionUtils;
  return CollectiblesTargetedOfferPromotionUtils.getTargetedOfferPromotionPurchaseCtaText(
    targetedOfferPromotionForCollectiblesProduct,
  );
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
  const collectiblesPricingPromotionForProduct =
    CollectiblesPricingPromotionUtils.useCollectiblesPricingPromotionForProduct(product);
  const tmp4Result4 = CollectiblesPricingPromotionUtils;
  const targetedOfferPromotionForCollectiblesProduct =
    CollectiblesTargetedOfferPromotionUtils.getTargetedOfferPromotionForCollectiblesProduct(
      product,
      tmp5,
      collectiblesPricingPromotionForProduct,
    );
  const tmp4Result5 = CollectiblesTargetedOfferPromotionUtils;
  return CollectiblesTargetedOfferPromotionUtils.hasFiatExclusiveTargetedOfferPromotion(
    targetedOfferPromotionForCollectiblesProduct,
  );
}
