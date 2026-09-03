// === Module 12517: ? ===

// Module 12517
import _modDef4724 from "module_4724" /* 4724 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;

const require = arg1;
const HUB_EMAIL_CONNECTION_MODAL_KEY = "HUB_EMAIL_CONNECTION_MODAL_KEY";
const result = require("set").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModalActionCreators.tsx");

export default {
  open(closure_0) {
    closure_0 = arg1;
    _modDef4724.pushLazy(callback(function*() {
      closure_1 = tmp5;
      closure_0 = tmp2;
      yield closure_1_0(paths[3])(paths[2], paths.paths);
      closure_0 = arg1.default;
      if (null != closure_0) {
        const obj = { animation: null };
        obj[0] = closure_0;
        closure_0.modalConfig = obj;
      }
      return closure_0;
    }), closure_0, HUB_EMAIL_CONNECTION_MODAL_KEY);
  },
  close() {
    _modDef4724.popWithKey(HUB_EMAIL_CONNECTION_MODAL_KEY);
  }
};