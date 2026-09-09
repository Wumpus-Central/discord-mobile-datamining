// === Module 11109: ProductPurchaseSuccessActionCreators ===

// Module 11109 (ProductPurchaseSuccessActionCreators)
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4777 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = fn;
const ShopProductPurchaseSuccessModal = "ShopProductPurchaseSuccessModal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx");

export default {
  open(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncGeneratorStep(async () => {
      await require("asyncRequireImpl")(paths[2], paths.paths);
      return value.default;
    }), merged, ShopProductPurchaseSuccessModal);
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(ShopProductPurchaseSuccessModal);
  }
};
export const MODAL_KEY = "ShopProductPurchaseSuccessModal";