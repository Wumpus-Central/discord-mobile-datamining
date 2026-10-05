// === Module 362: shouldUseTurboAnimatedModule ===

// Module 362 (shouldUseTurboAnimatedModule)
import _modAll30 from "module_30" /* 30 */;
import shouldUseTurboAnimatedModuleDefault from "shouldUseTurboAnimatedModule" /* 360 */;

let value = null;
if (shouldUseTurboAnimatedModuleDefault()) {
  const importAllResult = _modAll30;
  value = importAllResult.get("NativeAnimatedTurboModule");
}

export default value;