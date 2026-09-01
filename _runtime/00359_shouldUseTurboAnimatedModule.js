// _runtime/00359_shouldUseTurboAnimatedModule.js
import getAll from "00030_get.js";
import shouldUseTurboAnimatedModuleDefault from "00360_shouldUseTurboAnimatedModule.js";

let value = null;
if (!shouldUseTurboAnimatedModuleDefault()) {
  value = getAll.get("NativeAnimatedModule");
  const importAllResult = getAll;
}

export default value;
