// _runtime/metro/01636___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const obj = { uiViewClassName: "RNCSafeAreaView", validAttributes: { mode: true, edges: true } };

export default setRuntimeConfigProvider.get("RNCSafeAreaView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
