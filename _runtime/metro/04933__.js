// === Module 4933: ? ===

// Module 4933
import _mod26 from "module_26" /* 26 */;
import renderElement from "renderElement" /* 114 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

({ codegenNativeCommands, codegenNativeComponent } = get_ActivityIndicator);
let Commands = { uiViewClassName: "RNSSearchBar", directEventTypes: { topSearchFocus: { registrationName: "onSearchFocus" }, topSearchBlur: { registrationName: "onSearchBlur" }, topSearchButtonPress: { registrationName: "onSearchButtonPress" }, topCancelButtonPress: { registrationName: "onCancelButtonPress" }, topChangeText: { registrationName: "onChangeText" }, topClose: { registrationName: "onClose" }, topOpen: { registrationName: "onOpen" } }, validAttributes: null };
Commands = { hideWhenScrolling: true, autoCapitalize: true, placeholder: true, placement: true, allowToolbarIntegration: true, obscureBackground: true, hideNavigationBar: true, cancelButtonText: true, barTintColor: _mod26.colorAttribute, tintColor: _mod26.colorAttribute, textColor: _mod26.colorAttribute, autoFocus: true, disableBackButtonOverride: true, inputType: true, hintTextColor: _mod26.colorAttribute, headerIconColor: _mod26.colorAttribute, shouldShowHintSearchIcon: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onSearchFocus: true, onSearchBlur: true, onSearchButtonPress: true, onCancelButtonPress: true, onChangeText: true, onClose: true, onOpen: true }));
Commands.validAttributes = Commands;
Commands = {
  blur(arg0) {
    renderElement.dispatchCommand(arg0, "blur", []);
  },
  focus(arg0) {
    renderElement.dispatchCommand(arg0, "focus", []);
  },
  clearText(arg0) {
    renderElement.dispatchCommand(arg0, "clearText", []);
  },
  toggleCancelButton(arg0, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(arg0, "toggleCancelButton", items);
  },
  setText(arg0, arg1) {
    const items = [arg1];
    renderElement.dispatchCommand(arg0, "setText", items);
  },
  cancelSearch(arg0) {
    renderElement.dispatchCommand(arg0, "cancelSearch", []);
  }
};

export default module_65.get("RNSSearchBar", () => obj);
export const __INTERNAL_VIEW_CONFIG = Commands;
export { Commands };