// _runtime/metro/01629__.js
import renderElement from "../00114_renderElement.js";
import weakSet from "../00106_weakSet.js";
import 00065__ from "00065__.js";

let Commands = { uiViewClassName: "KeyboardControllerView", directEventTypes: { topKeyboardMoveStart: { registrationName: "onKeyboardMoveStart" }, topKeyboardMove: { registrationName: "onKeyboardMove" }, topKeyboardMoveEnd: { registrationName: "onKeyboardMoveEnd" }, topKeyboardMoveInteractive: { registrationName: "onKeyboardMoveInteractive" }, topFocusedInputLayoutChanged: { registrationName: "onFocusedInputLayoutChanged" }, topFocusedInputTextChanged: { registrationName: "onFocusedInputTextChanged" }, topFocusedInputSelectionChanged: { registrationName: "onFocusedInputSelectionChanged" } }, validAttributes: null };
Commands = { enabled: true, statusBarTranslucent: true, navigationBarTranslucent: true, preserveEdgeToEdge: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onKeyboardMoveStart: true, onKeyboardMove: true, onKeyboardMoveEnd: true, onKeyboardMoveInteractive: true, onFocusedInputLayoutChanged: true, onFocusedInputTextChanged: true, onFocusedInputSelectionChanged: true }));
Commands.validAttributes = Commands;
Commands = {
  synchronizeFocusedInputLayout(current) {
    renderElement.dispatchCommand(current, "synchronizeFocusedInputLayout", []);
  }
};

export default module_65.get("KeyboardControllerView", () => obj);
export const __INTERNAL_VIEW_CONFIG = Commands;
export { Commands };