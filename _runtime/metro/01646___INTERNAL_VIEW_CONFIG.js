// _runtime/metro/01646___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const obj = { uiViewClassName: "OverKeyboardView", validAttributes: { visible: true } };

export default setRuntimeConfigProvider.get("OverKeyboardView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
