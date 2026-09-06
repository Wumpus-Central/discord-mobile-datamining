// === Module 1619: __INTERNAL_VIEW_CONFIG ===

// Module 1619 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "RNCSafeAreaView", validAttributes: { mode: true, edges: true } };

export default setRuntimeConfigProvider.get("RNCSafeAreaView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;