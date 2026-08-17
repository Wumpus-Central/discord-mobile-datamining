// _runtime/00359_shouldUseTurboAnimatedModule.js
import getAll from "get" /* 30 */;
import shouldUseTurboAnimatedModuleDefault from "shouldUseTurboAnimatedModule" /* 360 */;

let value = null;
if (!shouldUseTurboAnimatedModuleDefault()) {
  value = getAll.get("NativeAnimatedModule");
  const importAllResult = getAll;
}

export default value;