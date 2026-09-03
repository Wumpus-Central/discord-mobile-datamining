// === Module 6089: StorefrontPromotionRewardType ===

// Module 6089 (StorefrontPromotionRewardType)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/storefront/StorefrontTypes.tsx");

export const StorefrontPromotionRewardType = { DISCOUNT: 1, [1]: "DISCOUNT", FIXED_PRICE: 2, [2]: "FIXED_PRICE", ACTION: 3, [3]: "ACTION" };
export const StorefrontPromotionRewardEligibilityStatus = { EARNED: 1, [1]: "EARNED", IN_PROGRESS: 2, [2]: "IN_PROGRESS", NOT_ELIGIBLE: 3, [3]: "NOT_ELIGIBLE", CONSUMED: 4, [4]: "CONSUMED" };
export const StorefrontDiscountTypes = { FLAT: 1, [1]: "FLAT", PERCENT: 2, [2]: "PERCENT" };
export const StorefrontPurchaseType = { SELF_PURCHASE: 0, [0]: "SELF_PURCHASE", GIFT: 1, [1]: "GIFT" };
export const StorefrontPriceVariant = { NORMAL: 0, [0]: "NORMAL", DISCOUNTED: 1, [1]: "DISCOUNTED" };
export const StorefrontPromotionCollectiblesIcon = { TAG: "TAG", NITRO: "NITRO" };
export const StorefrontPromotionCollectiblesFlavor = { DEFAULT: "default", NITRO: "nitro" };