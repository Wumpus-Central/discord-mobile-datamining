// discord_app/modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const ShopProductPurchaseSuccessModal = "ShopProductPurchaseSuccessModal";
let obj = {
  open(merged) {
    let paths;
    const obj = ModalActionCreatorsDefault;
    obj.pushLazy(
      _asyncToGenerator(async () => {
        let c0;
        let c1;
        await require("asyncRequire")(paths[2], paths.paths);
        return value.default;
      }),
      merged,
      ShopProductPurchaseSuccessModal,
    );
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(ShopProductPurchaseSuccessModal);
  },
};
const result = size.fileFinishedImporting("modules/collectibles/native/ProductPurchaseSuccessActionCreators.tsx");

export default obj;
export const MODAL_KEY = "ShopProductPurchaseSuccessModal";
