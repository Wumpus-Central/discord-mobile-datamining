// === Module 1600: __INTERNAL_VIEW_CONFIG ===

// Module 1600 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "OverKeyboardView", validAttributes: { visible: true } };

export default setRuntimeConfigProvider.get("OverKeyboardView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;