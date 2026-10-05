// discord_app/modules/hub/native/components/HubEmailConnectionModalActionCreators.tsx
import ModalActionCreatorsDefault from "../../../../actions/ModalActionCreators.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../../_runtime/metro/00002__.js";

const HUB_EMAIL_CONNECTION_MODAL_KEY = "HUB_EMAIL_CONNECTION_MODAL_KEY";
let obj = {
  open(merged, arg1) {
    let closure_0 = arg1;
    let obj = ModalActionCreatorsDefault;
    obj.pushLazy(
      _asyncToGenerator(async () => {
        let c3;
        let closure_1;
        let value = tmp;
        await value(paths[3])(paths[2], paths.paths);
        value = value.default;
        if (null != closure_129_0) {
          const obj = { animation: closure_129_0 };
          value.modalConfig = obj;
        }
        return value;
      }),
      merged,
      HUB_EMAIL_CONNECTION_MODAL_KEY,
    );
  },
  close() {
    const obj = ModalActionCreatorsDefault;
    obj.popWithKey(HUB_EMAIL_CONNECTION_MODAL_KEY);
  },
};
const result = size.fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModalActionCreators.tsx");

export default obj;
