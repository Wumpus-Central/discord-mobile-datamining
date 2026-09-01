// _runtime/metro/04886___INTERNAL_VIEW_CONFIG.js
import result from "../00026_result.js";
import renderElement from "../00114_renderElement.js";
import get_ActivityIndicator from "../00017_get_ActivityIndicator.js";
import weakSet from "../00106_weakSet.js";
import setRuntimeConfigProvider from "../00065_setRuntimeConfigProvider.js";

({ codegenNativeCommands, codegenNativeComponent } = get_ActivityIndicator);
let obj = {
  uiViewClassName: "RNSSearchBar",
  directEventTypes: {
    topSearchFocus: { registrationName: "onSearchFocus" },
    topSearchBlur: { registrationName: "onSearchBlur" },
    topSearchButtonPress: { registrationName: "onSearchButtonPress" },
    topCancelButtonPress: { registrationName: "onCancelButtonPress" },
    topChangeText: { registrationName: "onChangeText" },
    topClose: { registrationName: "onClose" },
    topOpen: { registrationName: "onOpen" },
  },
  validAttributes: null,
};
obj = {
  hideWhenScrolling: true,
  autoCapitalize: true,
  placeholder: true,
  placement: true,
  allowToolbarIntegration: true,
  obscureBackground: true,
  hideNavigationBar: true,
  cancelButtonText: true,
  barTintColor: result.colorAttribute,
  tintColor: result.colorAttribute,
  textColor: result.colorAttribute,
  autoFocus: true,
  disableBackButtonOverride: true,
  inputType: true,
  hintTextColor: result.colorAttribute,
  headerIconColor: result.colorAttribute,
  shouldShowHintSearchIcon: true,
};
const merged = Object.assign(
  weakSet.ConditionallyIgnoredEventHandlers({
    onSearchFocus: true,
    onSearchBlur: true,
    onSearchButtonPress: true,
    onCancelButtonPress: true,
    onChangeText: true,
    onClose: true,
    onOpen: true,
  }),
);
obj[2] = obj;
obj = {
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
  },
};

export default setRuntimeConfigProvider.get("RNSSearchBar", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;
