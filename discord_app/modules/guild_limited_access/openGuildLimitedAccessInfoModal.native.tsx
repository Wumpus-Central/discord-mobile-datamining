// === Module 4655: openGuildLimitedAccessInfoModal ===

// Module 4655 (openGuildLimitedAccessInfoModal)
import noopAll from "noop" /* 19 */;
import _modDef4656 from "module_4656" /* 4656 */;
import { Keyboard } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_limited_access/openGuildLimitedAccessInfoModal.native.tsx");

export default function openGuildLimitedAccessInfoModal(arg0) {
  const _require = arg0;
  Keyboard.dismiss();
  let obj = _require(4237);
  const bestActiveInput = obj.getBestActiveInput();
  if (bestActiveInput != null) {
    bestActiveInput.blur();
  }
  obj = {
    importer() {
      return callback(dependencyMap[6])(dependencyMap[5], dependencyMap.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj.guildId = closure_0;
          return closure_2_4(closure_0, obj);
        };
      });
    }
  };
  _modDef4656.openLazy(obj);
};