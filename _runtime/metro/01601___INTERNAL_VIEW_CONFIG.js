// _runtime/metro/01601___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "KeyboardBackgroundView", validAttributes: {} };

export default setRuntimeConfigProvider.get("KeyboardBackgroundView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;