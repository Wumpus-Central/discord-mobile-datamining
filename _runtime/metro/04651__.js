import _objectWithoutProperties from "_objectWithoutProperties";
import importDefaultResult from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["obscureBackground", "hideNavigationBar", "onFocus", "onBlur", "onSearchButtonPress", "onCancelButtonPress", "onChangeText"];
let c5 = importDefaultResult;

export default importDefaultResult.forwardRef(function SearchBar(autoCapitalize, ref) {
  let hideNavigationBar;
  let obscureBackground;
  let onBlur;
  let onCancelButtonPress;
  let onChangeText;
  let onFocus;
  let onSearchButtonPress;
  ref = importDefaultResult.useRef(null);
  const imperativeHandle = importDefaultResult.useImperativeHandle(ref, () => ({
    blur() {
      callback((arg0) => {
        const Commands = callback(table[4]).Commands;
        return Commands.blur(arg0);
      });
    },
    focus() {
      callback((arg0) => {
        const Commands = callback(table[4]).Commands;
        return Commands.focus(arg0);
      });
    },
    toggleCancelButton(arg0) {
      let closure_0 = arg0;
      callback((arg0) => {
        const Commands = callback(outer1_2[4]).Commands;
        return Commands.toggleCancelButton(arg0, callback);
      });
    },
    clearText() {
      callback((arg0) => {
        const Commands = callback(table[4]).Commands;
        return Commands.clearText(arg0);
      });
    },
    setText(arg0) {
      let closure_0 = arg0;
      callback((arg0) => {
        const Commands = callback(outer1_2[4]).Commands;
        return Commands.setText(arg0, callback);
      });
    },
    cancelSearch() {
      callback((arg0) => {
        const Commands = callback(table[4]).Commands;
        return Commands.cancelSearch(arg0);
      });
    }
  }));
  const items = [ref];
  const importDefault = importDefaultResult.useCallback((arg0) => {
    const current = ref.current;
    if (current) {
      arg0(current);
    } else {
      const _console = console;
      console.warn("Reference to native search bar component has not been updated yet");
    }
  }, items);
  if (ref(4643).isSearchBarAvailableForCurrentPlatform) {
    let obj = {};
    const merged = Object.assign(autoCapitalize);
    let str2 = autoCapitalize.autoCapitalize;
    if (str2 == null) {
      str2 = "systemDefault";
    }
    obj.autoCapitalize = str2;
    ({ obscureBackground, hideNavigationBar, onFocus, onBlur, onSearchButtonPress, onCancelButtonPress, onChangeText } = obj);
    obj = { ref: null };
    obj[0] = ref;
    const tmp14 = callback(obj, closure_3);
    const merged1 = Object.assign(tmp14);
    let tmp3Result = tmp3(4643);
    obj.obscureBackground = tmp3Result.parseBooleanToOptionalBooleanNativeProp(obscureBackground);
    tmp3Result = tmp3(4643);
    obj.hideNavigationBar = tmp3Result.parseBooleanToOptionalBooleanNativeProp(hideNavigationBar);
    obj.onSearchFocus = onFocus;
    obj.onSearchBlur = onBlur;
    obj.onSearchButtonPress = onSearchButtonPress;
    obj.onCancelButtonPress = onCancelButtonPress;
    obj.onChangeText = onChangeText;
    return jsx(importDefault(4652), { ref: null });
  } else {
    let _console = console;
    console.warn("Importing SearchBar is only valid on iOS and Android devices.");
    return View;
  }
});