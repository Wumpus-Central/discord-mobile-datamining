// === Module 1647: __INTERNAL_VIEW_CONFIG ===

// Module 1647 (__INTERNAL_VIEW_CONFIG)
import renderElement from "renderElement" /* 114 */;
import weakSet from "weakSet" /* 106 */;
import setRuntimeConfigProvider from "setRuntimeConfigProvider" /* 65 */;

let obj = { enabled: true, statusBarTranslucent: true, navigationBarTranslucent: true, preserveEdgeToEdge: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onKeyboardMoveStart: true, onKeyboardMove: true, onKeyboardMoveEnd: true, onKeyboardMoveInteractive: true, onFocusedInputLayoutChanged: true, onFocusedInputTextChanged: true, onFocusedInputSelectionChanged: true }));
obj[2] = obj;
obj = {
  synchronizeFocusedInputLayout(current) {
    renderElement.dispatchCommand(current, "synchronizeFocusedInputLayout", []);
  }
};

export default setRuntimeConfigProvider.get("KeyboardControllerView", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;