// === Module 1628: __INTERNAL_VIEW_CONFIG ===

// Module 1628 (__INTERNAL_VIEW_CONFIG)
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

const obj = { uiViewClassName: "KeyboardGestureArea", validAttributes: { interpolator: true, showOnSwipeUp: true, enableSwipeToDismiss: true, offset: true, textInputNativeID: true } };

export default setRuntimeConfigProvider.get("KeyboardGestureArea", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;