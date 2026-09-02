// _runtime/metro/08318___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const obj = {
  uiViewClassName: "RNSVGFilter",
  validAttributes: { name: true, x: true, y: true, height: true, width: true, filterUnits: true, primitiveUnits: true },
};

export default setRuntimeConfigProvider.get("RNSVGFilter", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
