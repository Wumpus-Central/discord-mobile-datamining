// _runtime/metro/08309___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const obj = {
  uiViewClassName: "RNSVGFeFlood",
  validAttributes: { x: true, y: true, width: true, height: true, result: true, floodColor: true, floodOpacity: true },
};

export default setRuntimeConfigProvider.get("RNSVGFeFlood", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
