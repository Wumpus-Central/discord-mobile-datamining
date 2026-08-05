// _runtime/metro/05384___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "RNGestureHandlerRootView", validAttributes: { unstable_forceActive: true } };

export default setRuntimeConfigProvider.get("RNGestureHandlerRootView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;