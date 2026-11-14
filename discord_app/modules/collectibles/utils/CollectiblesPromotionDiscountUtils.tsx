// discord_app/modules/collectibles/utils/CollectiblesPromotionDiscountUtils.tsx
import StorefrontTypes from "../../storefront/StorefrontTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
