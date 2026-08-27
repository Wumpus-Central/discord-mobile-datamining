// === Module 10744: MODAL_KEY ===

// Module 10744 (MODAL_KEY)
import _modDef4676 from "module_4676" /* 4676 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;

const require = arg1;
const ShopProductPurchaseSuccessModal = "ShopProductPurchaseSuccessModal";
const result = require("set").fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx");

export default {
  open(closure_0) {
    _modDef4676.pushLazy(callback(function*() {
      yield v0(closure_1_2[3])(closure_1_2[2], closure_1_2.paths);
      return arg1.default;
    }), closure_0, ShopProductPurchaseSuccessModal);
  },
  close() {
    _modDef4676.popWithKey(ShopProductPurchaseSuccessModal);
  }
};
export const MODAL_KEY = "ShopProductPurchaseSuccessModal";