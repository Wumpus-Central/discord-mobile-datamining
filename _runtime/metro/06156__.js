// _runtime/metro/06156__.js
import _mod26 from "00026__.js";
import renderElement from "../00114_renderElement.js";
import get_ActivityIndicator from "00017__.js";
import weakSet from "../00106_weakSet.js";
import 00065__ from "00065__.js";

({ codegenNativeCommands, codegenNativeComponent } = get_ActivityIndicator);
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSSearchBar", directEventTypes: { topSearchFocus: { registrationName: "onSearchFocus" }, topSearchBlur: { registrationName: "onSearchBlur" }, topSearchButtonPress: { registrationName: "onSearchButtonPress" }, topCancelButtonPress: { registrationName: "onCancelButtonPress" }, topChangeText: { registrationName: "onChangeText" }, topClose: { registrationName: "onClose" }, topOpen: { registrationName: "onOpen" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onSearchFocus: true, onSearchBlur: true, onSearchButtonPress: true, onCancelButtonPress: true, onChangeText: true, onClose: true, onOpen: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { hideWhenScrolling: true, autoCapitalize: true, placeholder: true, placement: true, allowToolbarIntegration: true, obscureBackground: true, hideNavigationBar: true, cancelButtonText: true, barTintColor: _mod26.colorAttribute, tintColor: _mod26.colorAttribute, textColor: _mod26.colorAttribute, autoFocus: true, disableBackButtonOverride: true, inputType: true, hintTextColor: _mod26.colorAttribute, headerIconColor: _mod26.colorAttribute, shouldShowHintSearchIcon: true };

export default module_65.get("RNSSearchBar", () => obj);
export { __INTERNAL_VIEW_CONFIG };
export const Commands = {
  blur(nodeFromPublicInstance) {
    renderElement.dispatchCommand(nodeFromPublicInstance, "blur", []);
  },
  focus(nodeFromPublicInstance) {
    renderElement.dispatchCommand(nodeFromPublicInstance, "focus", []);
  },
  clearText(nodeFromPublicInstance) {
    renderElement.dispatchCommand(nodeFromPublicInstance, "clearText", []);
  },
  toggleCancelButton(nodeFromPublicInstance, arg1) {
    items = [arg1];
    renderElement.dispatchCommand(nodeFromPublicInstance, "toggleCancelButton", items);
  },
  setText(nodeFromPublicInstance, arg1) {
    items = [arg1];
    renderElement.dispatchCommand(nodeFromPublicInstance, "setText", items);
  },
  cancelSearch(nodeFromPublicInstance) {
    renderElement.dispatchCommand(nodeFromPublicInstance, "cancelSearch", []);
  }
};