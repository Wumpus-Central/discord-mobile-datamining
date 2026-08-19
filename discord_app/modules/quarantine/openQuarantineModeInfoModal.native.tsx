// === Module 6780: openQuarantineModeInfoModal ===

// Module 6780 (openQuarantineModeInfoModal)
import noopAll from "noop" /* 19 */;
import getBestActiveInput from "getBestActiveInput" /* 4237 */;
import _modDef4656 from "module_4656" /* 4656 */;
import { Keyboard } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/quarantine/openQuarantineModeInfoModal.native.tsx");

export default function openQuarantineModeInfoModal() {
  Keyboard.dismiss();
  let obj = getBestActiveInput;
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return callback(paths[6])(paths[5], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return closure_1_4(closure_0, {});
        };
      });
    }
  };
  _modDef4656.openLazy(obj);
};