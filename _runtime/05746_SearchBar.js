// _runtime/05746_SearchBar.js
import react_native from "00017_react-native.js";
import Fragment from "react/00021_Fragment.js";
import _modDef5747 from "metro/05747__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import react from "00019_react.js";

let importDefault;

let closure_3 = [
  "obscureBackground",
  "hideNavigationBar",
  "onFocus",
  "onBlur",
  "onSearchButtonPress",
  "onCancelButtonPress",
  "onChangeText",
  "ref",
];
const View = react_native.View;
const jsx = Fragment.jsx;

export default function SearchBar(ref) {
  let closure_1;
  let hideNavigationBar;
  let obscureBackground;
  let onBlur;
  let onCancelButtonPress;
  let onChangeText;
  let onFocus;
  let onSearchButtonPress;
  const ref1 = react.useRef(null);
  const imperativeHandle = react.useImperativeHandle(ref.ref, () => ({
    blur() {
      closure_1_1((arg0) => {
        const Commands = closure_1_0(closure_1_2[4]).Commands;
        return Commands.blur(arg0);
      });
    },
    focus() {
      closure_1_1((arg0) => {
        const Commands = closure_1_0(closure_1_2[4]).Commands;
        return Commands.focus(arg0);
      });
    },
    toggleCancelButton(arg0) {
      let closure_0 = arg0;
      closure_1_1((arg0) => {
        const Commands = closure_2_0(closure_2_2[4]).Commands;
        return Commands.toggleCancelButton(arg0, closure_0);
      });
    },
    clearText() {
      closure_1_1((arg0) => {
        const Commands = closure_1_0(closure_1_2[4]).Commands;
        return Commands.clearText(arg0);
      });
    },
    setText(arg0) {
      let closure_0 = arg0;
      closure_1_1((arg0) => {
        const Commands = closure_2_0(closure_2_2[4]).Commands;
        return Commands.setText(arg0, closure_0);
      });
    },
    cancelSearch() {
      closure_1_1((arg0) => {
        const Commands = closure_1_0(closure_1_2[4]).Commands;
        return Commands.cancelSearch(arg0);
      });
    },
  }));
  const items = [ref1];
  importDefault = react.useCallback((fn) => {
    const current = ref1.current;
    if (current) {
      fn(current);
    } else {
      const _console = console;
      console.warn("Reference to native search bar component has not been updated yet");
    }
  }, items);
  if (ref1(5739).isSearchBarAvailableForCurrentPlatform) {
    ({ obscureBackground, hideNavigationBar, onFocus, onBlur, onSearchButtonPress, onCancelButtonPress, onChangeText } =
      ref.ref);
    const tmp10 = _objectWithoutProperties(ref.ref, closure_3);
    _modDef5747;
    const merged = Object.assign(tmp10);
    const tmp3Result = ref1(5739);
    const tmp3Result2 = ref1(5739);
    return (
      <tmp13
        ref={ref1}
        obscureBackground={tmp3Result.parseBooleanToOptionalBooleanNativeProp(obscureBackground)}
        hideNavigationBar={tmp3Result2.parseBooleanToOptionalBooleanNativeProp(hideNavigationBar)}
        onSearchFocus={onFocus}
        onSearchBlur={onBlur}
        onSearchButtonPress={onSearchButtonPress}
        onCancelButtonPress={onCancelButtonPress}
        onChangeText={onChangeText}
      />
    );
  } else {
    let _console = console;
    console.warn("Importing SearchBar is only valid on iOS and Android devices.");
    return View;
  }
}
