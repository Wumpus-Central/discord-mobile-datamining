// _runtime/metro/01647___INTERNAL_VIEW_CONFIG.js
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";
import { renderElement } from "../00114_renderElement.js";

let obj = { uiViewClassName: "KeyboardControllerView", directEventTypes: { topKeyboardMoveStart: { registrationName: "onKeyboardMoveStart" }, topKeyboardMove: { registrationName: "onKeyboardMove" }, topKeyboardMoveEnd: { registrationName: "onKeyboardMoveEnd" }, topKeyboardMoveInteractive: { registrationName: "onKeyboardMoveInteractive" }, topFocusedInputLayoutChanged: { registrationName: "onFocusedInputLayoutChanged" }, topFocusedInputTextChanged: { registrationName: "onFocusedInputTextChanged" }, topFocusedInputSelectionChanged: { registrationName: "onFocusedInputSelectionChanged" } }, validAttributes: null };
obj = { enabled: true, statusBarTranslucent: true, navigationBarTranslucent: true, preserveEdgeToEdge: true };
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