// _runtime/metro/01647___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "OverKeyboardView", validAttributes: { visible: true } };

export default setRuntimeConfigProvider.get("OverKeyboardView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;