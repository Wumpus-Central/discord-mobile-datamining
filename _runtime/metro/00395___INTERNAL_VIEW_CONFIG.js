// _runtime/metro/00395___INTERNAL_VIEW_CONFIG.js
import result from "../00026_result.js";
import setRuntimeConfigProviderAll from "../00065_setRuntimeConfigProvider.js";
import pointsDiffer from "../00078_pointsDiffer.js";

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