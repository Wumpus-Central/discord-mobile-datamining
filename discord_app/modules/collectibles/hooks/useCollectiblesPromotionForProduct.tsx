// === Module 15299: useCollectiblesPromotionForProduct ===

// Module 15299 (useCollectiblesPromotionForProduct)
import Constants from "Constants" /* 1072 */;
import CollectiblesPromotionUtils from "CollectiblesPromotionUtils" /* 15300 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants.COLLECTIBLES_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesPromotionForProduct.tsx");

export function useCollectiblesPromotionForProduct(selectedProduct) {
  let promotionForCollectiblesProduct = null;
  if (null != selectedProduct) {
    promotionForCollectiblesProduct = CollectiblesPromotionUtils.getPromotionForCollectiblesProduct(selectedProduct, tmp2);
  }
  return promotionForCollectiblesProduct;
}