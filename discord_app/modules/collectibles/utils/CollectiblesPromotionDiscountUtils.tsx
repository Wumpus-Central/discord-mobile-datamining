// === Module 11254: CollectiblesPromotionDiscountUtils ===

// Module 11254 (CollectiblesPromotionDiscountUtils)
import StorefrontTypes from "StorefrontTypes" /* 7595 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesPromotionDiscountUtils.tsx");

export function getPromotionFiatPercentOff(collectiblesPromotionForProduct) {
  let discount;
  if (collectiblesPromotionForProduct != null) {
    const rewardConfig = collectiblesPromotionForProduct.rewardConfig;
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
    amount = null;
    if (true === discount.fiatEnabled) {
      amount = discount.amount;
    }
  }
  return amount;
}