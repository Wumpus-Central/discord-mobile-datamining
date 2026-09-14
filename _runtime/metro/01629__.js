// _runtime/metro/01629__.js
import renderElement from "../00114_renderElement.js";
import weakSet from "../00106_weakSet.js";
import 00065__ from "00065__.js";

const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "KeyboardControllerView", directEventTypes: { topKeyboardMoveStart: { registrationName: "onKeyboardMoveStart" }, topKeyboardMove: { registrationName: "onKeyboardMove" }, topKeyboardMoveEnd: { registrationName: "onKeyboardMoveEnd" }, topKeyboardMoveInteractive: { registrationName: "onKeyboardMoveInteractive" }, topFocusedInputLayoutChanged: { registrationName: "onFocusedInputLayoutChanged" }, topFocusedInputTextChanged: { registrationName: "onFocusedInputTextChanged" }, topFocusedInputSelectionChanged: { registrationName: "onFocusedInputSelectionChanged" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onKeyboardMoveStart: true, onKeyboardMove: true, onKeyboardMoveEnd: true, onKeyboardMoveInteractive: true, onFocusedInputLayoutChanged: true, onFocusedInputTextChanged: true, onFocusedInputSelectionChanged: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { enabled: true, statusBarTranslucent: true, navigationBarTranslucent: true, preserveEdgeToEdge: true };

export default module_65.get("KeyboardControllerView", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  synchronizeFocusedInputLayout(current) {
    renderElement.dispatchCommand(current, "synchronizeFocusedInputLayout", []);
  }
};