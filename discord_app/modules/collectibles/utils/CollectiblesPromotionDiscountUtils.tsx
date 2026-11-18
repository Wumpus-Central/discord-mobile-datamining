// === Module 8873: CollectiblesPromotionDiscountUtils ===

// Module 8873 (CollectiblesPromotionDiscountUtils)
import StorefrontTypes from "StorefrontTypes" /* 6764 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromotionDiscountUtils.tsx");

export function getPromotionPercentOff(rewardConfig) {
  let discount;
  if (rewardConfig != null) {
    rewardConfig = rewardConfig.rewardConfig;
    if (rewardConfig != null) {
      discount = rewardConfig.discount;
    }
  }
  let type;
  if (discount != null) {
    type = discount.type;
  }
  let amount = null;
  if (type === StorefrontTypes.StorefrontDiscountTypes.PERCENT) {
    amount = discount.amount;
  }
  return amount;
}