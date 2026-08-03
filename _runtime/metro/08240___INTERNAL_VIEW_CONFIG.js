// === Module 8240: __INTERNAL_VIEW_CONFIG ===

// Module 8240 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNSVGFeComposite", validAttributes: { x: true, y: true, width: true, height: true, result: true, in1: true, in2: true, operator1: true, k1: true, k2: true, k3: true, k4: true } };

export default setRuntimeConfigProvider.get("RNSVGFeComposite", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;