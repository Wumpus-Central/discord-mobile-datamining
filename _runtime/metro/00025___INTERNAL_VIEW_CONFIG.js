// === Module 25: __INTERNAL_VIEW_CONFIG ===

// Module 25 (__INTERNAL_VIEW_CONFIG)
import result from "result" /* 26 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { styleAttr: true, typeAttr: true, indeterminate: true, progress: true, animating: true, color: result.colorAttribute, testID: true };
obj[1] = obj;

export default setRuntimeConfigProvider.get("AndroidProgressBar", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;