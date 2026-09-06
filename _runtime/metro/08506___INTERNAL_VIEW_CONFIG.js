// _runtime/metro/08506___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const obj = {
  uiViewClassName: "RNSVGFeOffset",
  validAttributes: { x: true, y: true, width: true, height: true, result: true, in1: true, dx: true, dy: true },
};

export default setRuntimeConfigProvider.get("RNSVGFeOffset", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
