// === Module 5754: ? ===

// Module 5754
import _mod26 from "module_26" /* 26 */;
import renderElement from "renderElement" /* 114 */;
import react_native from "react-native" /* 17 */;
import DynamicallyInjectedByGestureHandler from "DynamicallyInjectedByGestureHandler" /* 106 */;
import module_65 from "module_65" /* 65 */;

let codegenNativeCommands;
let codegenNativeComponent;
let obj2;
({ codegenNativeCommands, codegenNativeComponent } = react_native);
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSSearchBar", directEventTypes: { topSearchFocus: { registrationName: "onSearchFocus" }, topSearchBlur: { registrationName: "onSearchBlur" }, topSearchButtonPress: { registrationName: "onSearchButtonPress" }, topCancelButtonPress: { registrationName: "onCancelButtonPress" }, topChangeText: { registrationName: "onChangeText" }, topClose: { registrationName: "onClose" }, topOpen: { registrationName: "onOpen" } }, validAttributes: obj2 };
obj2 = { hideWhenScrolling: true, autoCapitalize: true, placeholder: true, placement: true, allowToolbarIntegration: true, obscureBackground: true, hideNavigationBar: true, cancelButtonText: true, barTintColor: _mod26.colorAttribute, tintColor: _mod26.colorAttribute, textColor: _mod26.colorAttribute, autoFocus: true, disableBackButtonOverride: true, inputType: true, hintTextColor: _mod26.colorAttribute, headerIconColor: _mod26.colorAttribute, shouldShowHintSearchIcon: true };
const merged = Object.assign(DynamicallyInjectedByGestureHandler.ConditionallyIgnoredEventHandlers({ onSearchFocus: true, onSearchBlur: true, onSearchButtonPress: true, onCancelButtonPress: true, onChangeText: true, onClose: true, onOpen: true }));
const obj3 = {
  blur(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "blur", []);
  },
  focus(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "focus", []);
  },
  clearText(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "clearText", []);
  },
  toggleCancelButton(nodeFromPublicInstance, arg1) {
    const items = [arg1];
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "toggleCancelButton", items);
  },
  setText(nodeFromPublicInstance, arg1) {
    const items = [arg1];
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "setText", items);
  },
  cancelSearch(nodeFromPublicInstance) {
    const obj = renderElement;
    obj.dispatchCommand(nodeFromPublicInstance, "cancelSearch", []);
  }
};

export default module_65.get("RNSSearchBar", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = obj3;