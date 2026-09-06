// _runtime/metro/01628___INTERNAL_VIEW_CONFIG.js
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

const obj = {
  uiViewClassName: "KeyboardGestureArea",
  validAttributes: {
    interpolator: true,
    showOnSwipeUp: true,
    enableSwipeToDismiss: true,
    offset: true,
    textInputNativeID: true,
  },
};

export default setRuntimeConfigProvider.get("KeyboardGestureArea", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
