// discord_app/modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";

const require = arg1;
const ShopProductPurchaseSuccessModal = "ShopProductPurchaseSuccessModal";
const result = require("CancelButton").fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx");

export default {
  open(closure_0) {
    ModalActionCreators.pushLazy(callback(function*() {
      yield v0(outer1_2[3])(outer1_2[2], outer1_2.paths);
      return arg1.default;
    }), closure_0, ShopProductPurchaseSuccessModal);
  },
  close() {
    ModalActionCreators.popWithKey(ShopProductPurchaseSuccessModal);
  }
};
export const MODAL_KEY = "ShopProductPurchaseSuccessModal";