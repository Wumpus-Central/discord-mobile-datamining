// === Module 8867: useCollectiblesPromotionForProduct ===

// Module 8867 (useCollectiblesPromotionForProduct)
import Constants from "Constants" /* 1072 */;
import CollectiblesPricingPromotionUtils from "CollectiblesPricingPromotionUtils" /* 8869 */;
import CollectiblesPromotionUtils from "CollectiblesPromotionUtils" /* 8874 */;
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