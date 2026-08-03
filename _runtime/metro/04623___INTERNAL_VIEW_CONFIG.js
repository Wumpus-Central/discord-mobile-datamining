import get_ActivityIndicator from "get ActivityIndicator";
import weakSet from "weakSet";
import setRuntimeConfigProvider from "setRuntimeConfigProvider";

let codegenNativeCommands;
let codegenNativeComponent;
({ codegenNativeCommands, codegenNativeComponent } = get_ActivityIndicator);
let obj = { uiViewClassName: "RNSSearchBar", directEventTypes: { topSearchFocus: { registrationName: "onSearchFocus" }, topSearchBlur: { registrationName: "onSearchBlur" }, topSearchButtonPress: { registrationName: "onSearchButtonPress" }, topCancelButtonPress: { registrationName: "onCancelButtonPress" }, topChangeText: { registrationName: "onChangeText" }, topClose: { registrationName: "onClose" }, topOpen: { registrationName: "onOpen" } }, validAttributes: null };
obj = { hideWhenScrolling: true, autoCapitalize: true, placeholder: true, placement: true, allowToolbarIntegration: true, obscureBackground: true, hideNavigationBar: true, cancelButtonText: true, barTintColor: require("result").colorAttribute, tintColor: require("result").colorAttribute, textColor: require("result").colorAttribute, autoFocus: true, disableBackButtonOverride: true, inputType: true, hintTextColor: require("result").colorAttribute, headerIconColor: require("result").colorAttribute, shouldShowHintSearchIcon: true };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onSearchFocus: true, onSearchBlur: true, onSearchButtonPress: true, onCancelButtonPress: true, onChangeText: true, onClose: true, onOpen: true }));
obj[2] = obj;
obj = {
  blur(arg0) {
    require(114) /* renderElement */.dispatchCommand(arg0, "blur", []);
  },
  focus(arg0) {
    require(114) /* renderElement */.dispatchCommand(arg0, "focus", []);
  },
  clearText(arg0) {
    require(114) /* renderElement */.dispatchCommand(arg0, "clearText", []);
  },
  toggleCancelButton(arg0, arg1) {
    const items = [arg1];
    require(114) /* renderElement */.dispatchCommand(arg0, "toggleCancelButton", items);
  },
  setText(arg0, arg1) {
    const items = [arg1];
    require(114) /* renderElement */.dispatchCommand(arg0, "setText", items);
  },
  cancelSearch(arg0) {
    require(114) /* renderElement */.dispatchCommand(arg0, "cancelSearch", []);
  }
};

export default setRuntimeConfigProvider.get("RNSSearchBar", () => obj);
export const __INTERNAL_VIEW_CONFIG = obj;
export const Commands = obj;