// === Module 11231: useCollectiblesPromotionForProduct ===

// Module 11231 (useCollectiblesPromotionForProduct)
import Constants from "Constants" /* 1071 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 11204 */;
import CollectiblesPromotionUtils from "CollectiblesPromotionUtils" /* 11232 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants.COLLECTIBLES_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesPromotionForProduct.tsx");

export function useCollectiblesPromotionForProduct(selectedProduct) {
  CollectiblesPricingPromotionUtils;
  let promotionForCollectiblesProduct = null;
  if (null != selectedProduct) {
    promotionForCollectiblesProduct = CollectiblesPromotionUtils.getPromotionForCollectiblesProduct(selectedProduct, tmp2, tmp5);
    const tmp3Result = CollectiblesPromotionUtils;
  }
  return promotionForCollectiblesProduct;
}