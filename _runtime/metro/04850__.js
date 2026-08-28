// _runtime/metro/04850__.js
import __INTERNAL_VIEW_CONFIGDefault from "04851___INTERNAL_VIEW_CONFIG.js";
import closure_4 from "00109__objectWithoutProperties.js";
import importDefaultResult from "../00019_noop.js";
import { View } from "../00017_get_ActivityIndicator.js";
import { jsx } from "../react/00021_jsxProd.js";

const require = arg1;
let closure_3 = ["obscureBackground", "hideNavigationBar", "onFocus", "onBlur", "onSearchButtonPress", "onCancelButtonPress", "onChangeText"];
let c5 = importDefaultResult;

export default importDefaultResult.forwardRef(function SearchBar(autoCapitalize, ref) {
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
      closure_0 = arg0;
      callback((arg0) => {
        const Commands = callback(closure_1_2[4]).Commands;
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
      closure_0 = arg0;
      callback((arg0) => {
        const Commands = callback(closure_1_2[4]).Commands;
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
  importDefault = importDefaultResult.useCallback((arg0) => {
    const current = ref.current;
    if (current) {
      arg0(current);
    } else {
      const _console = console;
      console.warn("Reference to native search bar component has not been updated yet");
    }
  }, items);
  if (ref(4842).isSearchBarAvailableForCurrentPlatform) {
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
    let tmp3Result = tmp3(4842);
    obj.obscureBackground = tmp3Result.parseBooleanToOptionalBooleanNativeProp(obscureBackground);
    tmp3Result = tmp3(4842);
    obj.hideNavigationBar = tmp3Result.parseBooleanToOptionalBooleanNativeProp(hideNavigationBar);
    obj.onSearchFocus = onFocus;
    obj.onSearchBlur = onBlur;
    obj.onSearchButtonPress = onSearchButtonPress;
    obj.onCancelButtonPress = onCancelButtonPress;
    obj.onChangeText = onChangeText;
    return jsx(__INTERNAL_VIEW_CONFIGDefault, { ref: null });
  } else {
    let _console = console;
    console.warn("Importing SearchBar is only valid on iOS and Android devices.");
    return View;
  }
});