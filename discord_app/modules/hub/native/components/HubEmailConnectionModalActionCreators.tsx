// === Module 12214: ? ===

// Module 12214
import _modDef4689 from "module_4689" /* 4689 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;

const require = arg1;
const HUB_EMAIL_CONNECTION_MODAL_KEY = "HUB_EMAIL_CONNECTION_MODAL_KEY";
const result = require("set").fileFinishedImporting("modules/hub/native/components/HubEmailConnectionModalActionCreators.tsx");

export default {
  open(closure_0) {
    closure_0 = arg1;
    _modDef4689.pushLazy(callback(function*() {
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
    _modDef4689.popWithKey(HUB_EMAIL_CONNECTION_MODAL_KEY);
  }
};