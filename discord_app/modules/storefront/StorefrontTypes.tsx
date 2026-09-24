// discord_app/modules/storefront/StorefrontTypes.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/storefront/StorefrontTypes.tsx");

export const StorefrontPromotionRewardType = {
  DISCOUNT: 1,
  [1]: "DISCOUNT",
  FIXED_PRICE: 2,
  [2]: "FIXED_PRICE",
  ACTION: 3,
  [3]: "ACTION",
  BENEFIT: 4,
  [4]: "BENEFIT",
};
export const StorefrontPromotionRewardEligibilityStatus = {
  EARNED: 1,
  [1]: "EARNED",
  IN_PROGRESS: 2,
  [2]: "IN_PROGRESS",
  NOT_ELIGIBLE: 3,
  [3]: "NOT_ELIGIBLE",
  CONSUMED: 4,
  [4]: "CONSUMED",
};
export const StorefrontPromotionActionType = {
  COMMERCE_ORBS_BACK: 1,
  [1]: "COMMERCE_ORBS_BACK",
  NON_COMMERCE_ORBS_BACK: 2,
  [2]: "NON_COMMERCE_ORBS_BACK",
  PROMO_CODE: 3,
  [3]: "PROMO_CODE",
  INTERNAL_SKU: 4,
  [4]: "INTERNAL_SKU",
  EXTERNAL_SKU: 5,
  [5]: "EXTERNAL_SKU",
};
export const StorefrontPromotionActionDeliveryMode = { GRANT: 1, [1]: "GRANT", CLAIM: 2, [2]: "CLAIM" };
export const StorefrontPromotionRedemptionStatus = {
  PENDING: 0,
  [0]: "PENDING",
  CONSUMED: 1,
  [1]: "CONSUMED",
  VOIDED: 2,
  [2]: "VOIDED",
  COMPLETED: 3,
  [3]: "COMPLETED",
};
export const StorefrontPromotionRedemptionRewardStatus = {
  PENDING: "pending",
  GRANTED: "granted",
  FAILED: "failed",
  VOIDED: "voided",
  UNCLAIMED: "unclaimed",
};
export const StorefrontOfferType = {
  ORB_REDEMPTION: 1,
  [1]: "ORB_REDEMPTION",
  ORBS_BACK: 2,
  [2]: "ORBS_BACK",
  DISCOUNT: 3,
  [3]: "DISCOUNT",
};
export const StorefrontDiscountTypes = { FLAT: 1, [1]: "FLAT", PERCENT: 2, [2]: "PERCENT" };
export const StorefrontPurchaseType = { SELF_PURCHASE: 0, [0]: "SELF_PURCHASE", GIFT: 1, [1]: "GIFT" };
export const StorefrontPriceVariant = { NORMAL: 0, [0]: "NORMAL", DISCOUNTED: 1, [1]: "DISCOUNTED" };
