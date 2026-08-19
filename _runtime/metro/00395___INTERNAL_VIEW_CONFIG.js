// === Module 395: __INTERNAL_VIEW_CONFIG ===

// Module 395 (__INTERNAL_VIEW_CONFIG)
import result from "result" /* 26 */;
import setRuntimeConfigProviderAll from "setRuntimeConfigProvider" /* 65 */;
import pointsDiffer from "pointsDiffer" /* 78 */;

const obj = { diff: pointsDiffer.default };
obj[0] = obj;
obj[19] = result.colorAttribute;
obj[20] = result.colorAttribute;
obj[21] = result.colorAttribute;
obj[24] = result.colorAttribute;
obj[29] = result.colorAttribute;
obj[32] = result.colorAttribute;
obj[3] = obj;

export default setRuntimeConfigProviderAll.get("RCTScrollView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;