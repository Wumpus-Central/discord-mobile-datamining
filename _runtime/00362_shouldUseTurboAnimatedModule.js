// _runtime/00362_shouldUseTurboAnimatedModule.js
import _modAll30 from "metro/00030__.js";
import shouldUseTurboAnimatedModuleDefault from "00360_shouldUseTurboAnimatedModule.js";

let value = null;
if (shouldUseTurboAnimatedModuleDefault()) {
  const importAllResult = _modAll30;
  value = importAllResult.get("NativeAnimatedTurboModule");
}

export default value;
