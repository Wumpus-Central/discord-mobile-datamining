// discord_app/modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
const ShopProductPurchaseSuccessModal = "ShopProductPurchaseSuccessModal";
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx");

export default {
  open(merged) {
    ModalActionCreatorsDefault.pushLazy(
      asyncGeneratorStep(async () => {
        await require("asyncRequireImpl")(paths[2], paths.paths);
        return arg1.default;
      }),
      merged,
      ShopProductPurchaseSuccessModal,
    );
  },
  close() {
    ModalActionCreatorsDefault.popWithKey(ShopProductPurchaseSuccessModal);
  },
};
export const MODAL_KEY = "ShopProductPurchaseSuccessModal";
