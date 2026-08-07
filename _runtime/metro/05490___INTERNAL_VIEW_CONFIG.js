// _runtime/metro/05490___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let obj = { uiViewClassName: "RNGestureHandlerButton", validAttributes: null };
obj = { exclusive: true, foreground: true, borderless: true, enabled: true, rippleColor: require("result").colorAttribute, rippleRadius: true, touchSoundDisabled: true, borderWidth: true, borderColor: require("result").colorAttribute, borderStyle: true, pointerEvents: true };
obj[1] = obj;

export default setRuntimeConfigProvider.get("RNGestureHandlerButton", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;