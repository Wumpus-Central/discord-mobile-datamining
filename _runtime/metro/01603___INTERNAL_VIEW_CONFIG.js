// _runtime/metro/01603___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

const obj = { uiViewClassName: "KeyboardToolbarGroupView", validAttributes: {} };

export default setRuntimeConfigProvider.get("KeyboardToolbarGroupView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;