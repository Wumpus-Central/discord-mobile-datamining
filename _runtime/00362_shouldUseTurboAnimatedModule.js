// _runtime/00362_shouldUseTurboAnimatedModule.js
import getAll from "00030_get.js";
import shouldUseTurboAnimatedModuleDefault from "00360_shouldUseTurboAnimatedModule.js";

let value = null;
if (shouldUseTurboAnimatedModuleDefault()) {
  value = getAll.get("NativeAnimatedTurboModule");
  const importAllResult = getAll;
}

export default value;
