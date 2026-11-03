// discord_app/modules/collectibles/hooks/useCollectiblesPromotionForProduct.tsx
import Constants from "../../../Constants.tsx";
import CollectiblesPromotionUtils from "../utils/CollectiblesPromotionUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = Constants.COLLECTIBLES_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/collectibles/hooks/useCollectiblesPromotionForProduct.tsx");

export function useCollectiblesPromotionForProduct(selectedProduct) {
  let promotionForCollectiblesProduct = null;
  if (null != selectedProduct) {
    promotionForCollectiblesProduct = CollectiblesPromotionUtils.getPromotionForCollectiblesProduct(
      selectedProduct,
      tmp2,
    );
  }
  return promotionForCollectiblesProduct;
}
