// _runtime/metro/04932__.js
import _modDef4933 from "04933__.js";
import _objectWithoutProperties from "00109__objectWithoutProperties.js";
import noop from "00019__.js";

const require = fn;
let closure_3 = [
  "obscureBackground",
  "hideNavigationBar",
  "onFocus",
  "onBlur",
  "onSearchButtonPress",
  "onCancelButtonPress",
  "onChangeText",
];
const View = fn(17).View;
const jsx = fn(21).jsx;

export default noop.forwardRef(function SearchBar(autoCapitalize, ref) {
  ref = noop.useRef(null);
  const imperativeHandle = noop.useImperativeHandle(ref, () => ({
    blur() {
      closure_1_1((arg0) => {
        const Commands = closure_1_0(dependencyMap[4]).Commands;
        return Commands.blur(arg0);
      });
    },
    focus() {
      closure_1_1((arg0) => {
        const Commands = closure_1_0(dependencyMap[4]).Commands;
        return Commands.focus(arg0);
      });
    },
    toggleCancelButton(arg0) {
      closure_0 = arg0;
      closure_1_1((arg0) => {
        const Commands = ref(4933).Commands;
        return Commands.toggleCancelButton(arg0, closure_0);
      });
    },
    clearText() {
      closure_1_1((arg0) => {
        const Commands = closure_1_0(dependencyMap[4]).Commands;
        return Commands.clearText(arg0);
      });
    },
    setText(arg0) {
      closure_0 = arg0;
      closure_1_1((arg0) => {
        const Commands = ref(4933).Commands;
        return Commands.setText(arg0, closure_0);
      });
    },
    cancelSearch() {
      closure_1_1((arg0) => {
        const Commands = closure_1_0(dependencyMap[4]).Commands;
        return Commands.cancelSearch(arg0);
      });
    },
  }));
  const items = [ref];
  importDefault = noop.useCallback((fn) => {
    const current = ref.current;
    if (current) {
      fn(current);
    } else {
      const _console = console;
      console.warn("Reference to native search bar component has not been updated yet");
    }
  }, items);
  if (ref(4924).isSearchBarAvailableForCurrentPlatform) {
    let obj = {};
    const merged = Object.assign(autoCapitalize);
    let str2 = autoCapitalize.autoCapitalize;
    if (str2 == null) {
      str2 = "systemDefault";
    }
    obj.autoCapitalize = str2;
    ({ obscureBackground, hideNavigationBar, onFocus, onBlur, onSearchButtonPress, onCancelButtonPress, onChangeText } =
      obj);
    obj = { ref };
    const tmp14 = _objectWithoutProperties(obj, closure_3);
    const merged1 = Object.assign(tmp14);
    let tmp3Result = tmp3(4924);
    obj.obscureBackground = tmp3Result.parseBooleanToOptionalBooleanNativeProp(obscureBackground);
    tmp3Result = tmp3(4924);
    obj.hideNavigationBar = tmp3Result.parseBooleanToOptionalBooleanNativeProp(hideNavigationBar);
    obj.onSearchFocus = onFocus;
    obj.onSearchBlur = onBlur;
    obj.onSearchButtonPress = onSearchButtonPress;
    obj.onCancelButtonPress = onCancelButtonPress;
    obj.onChangeText = onChangeText;
    return jsx(_modDef4933, { ref });
  } else {
    let _console = console;
    console.warn("Importing SearchBar is only valid on iOS and Android devices.");
    return View;
  }
});
