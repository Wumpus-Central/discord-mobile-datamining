// _runtime/00362_shouldUseTurboAnimatedModule.js
import getAll from "get" /* 30 */;
import shouldUseTurboAnimatedModuleDefault from "shouldUseTurboAnimatedModule" /* 360 */;

let value = null;
if (shouldUseTurboAnimatedModuleDefault()) {
  value = getAll.get("NativeAnimatedTurboModule");
  const importAllResult = getAll;
}

export default value;