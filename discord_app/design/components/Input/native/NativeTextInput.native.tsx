// === Module 6116: NativeTextInput ===

// Module 6116 (NativeTextInput)
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 4588 */;
import native2 from "native" /* 4595 */;
import useMountEffect from "useMountEffect" /* 5597 */;
import useBottomSheetKeyboardHandlingDefault from "useBottomSheetKeyboardHandling" /* 6118 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1486 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, value;

let c10;
let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
let react = react_mod;
({ Pressable: closure_4, TextInput: hasOwnProperty, StyleSheet: metroRequire, View: metroImportDefault } = react_native);
const KeyboardThemes = Constants.KeyboardThemes;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  let tmp3;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] !== arg0) {
    const fn = function u() {
      let systemKeyboardOpen;
      const obj = systemKeyboardOpen(dependencyMap[7]);
      systemKeyboardOpen = obj.getKeyboardIsOpen();
      return subscribeToKeyboardUIStore((systemKeyboardOpen) => {
        systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
        const tmp = systemKeyboardOpen === systemKeyboardOpen || systemKeyboardOpen;
        if (!tmp) {
          const current = systemKeyboardOpen.current;
          if (current != null) {
            current.blur();
          }
        }
      });
    };
    const items = [arg0];
    cResult[0] = arg0;
    cResult[1] = fn;
    cResult[2] = items;
    tmp3 = items;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = react.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const effect = react.useEffect(() => {
    let systemKeyboardOpen;
    const obj = systemKeyboardOpen(dependencyMap[7]);
    systemKeyboardOpen = obj.getKeyboardIsOpen();
    return subscribeToKeyboardUIStore((systemKeyboardOpen) => {
      systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
      const tmp = systemKeyboardOpen === systemKeyboardOpen || systemKeyboardOpen;
      if (!tmp) {
        const current = systemKeyboardOpen.current;
        if (current != null) {
          current.blur();
        }
      }
    });
  }, items);
});
let closure_12 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((value, arg1) => {
  let closure_0 = arg1;
  let obj = react2;
  const cResult = obj.c(9);
  value = value.value;
  const defaultValue = value.defaultValue;
  if (cResult[0] === defaultValue) {
    if (cResult[1] === arg1) {
      let tmp4;
      let tmp5;
      if (cResult[2] === value) {
        tmp4 = cResult[3];
        tmp5 = cResult[4];
      }
      const effect = react.useEffect(tmp4, tmp5);
      if (cResult[5] === arg1) {
        let tmp8;
        let tmp11;
        if (cResult[6] === value) {
          tmp8 = cResult[7];
        }
        const tmpResult = useMountEffect;
        const mountLayoutEffect = tmpResult.useMountLayoutEffect(tmp8);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { value: "start", defaultValue: "unicodeVersion" };
          cResult[8] = obj2;
          tmp11 = obj2;
        } else {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
      const fn2 = function l() {
        const current = ref.current;
        if (current != null) {
          const obj = { text: value };
          current.setNativeProps(obj);
        }
      };
      cResult[5] = arg1;
      cResult[6] = value;
      cResult[7] = fn2;
      tmp8 = fn2;
    }
  }
  const fn = function s() {
    const current = ref.current;
    if (current != null) {
      let tmp = value;
      const setNativeProps = current.setNativeProps;
      if (value == null) {
        tmp = defaultValue;
      }
      const obj = { text: tmp };
      setNativeProps(obj);
    }
  };
  const items = [arg1, value, defaultValue];
  cResult[0] = defaultValue;
  cResult[1] = arg1;
  cResult[2] = value;
  cResult[3] = fn;
  cResult[4] = items;
  tmp5 = items;
  tmp4 = fn;
}) : ((value, arg1) => {
  let closure_0 = arg1;
  value = value.value;
  const defaultValue = value.defaultValue;
  const items = [arg1, value, defaultValue];
  const effect = react.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      let tmp = value;
      const setNativeProps = current.setNativeProps;
      if (value == null) {
        tmp = defaultValue;
      }
      const obj = { text: tmp };
      setNativeProps(obj);
    }
  }, items);
  let obj = useMountEffect;
  const mountLayoutEffect = obj.useMountLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { text: value };
      current.setNativeProps(obj);
    }
  });
  return { value: "start", defaultValue: "unicodeVersion" };
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let ref;
  let style;
  let tmp3;
  let tmp4;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(8);
  let obj2 = require("useIsScreenReaderEnabled");
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  if (cResult[0] !== arg0) {
    const fn = function n() {
      const current = ref.current;
      let focusResult;
      if (current != null) {
        focusResult = current.focus();
      }
      return focusResult;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  const onPress = tmp3;
  let str = "flex";
  if (isScreenReaderEnabled) {
    str = "none";
  }
  if (cResult[2] !== str) {
    const obj3 = { display: str };
    const merged = Object.assign(absoluteFillObject.absoluteFillObject);
    cResult[2] = str;
    cResult[3] = obj3;
    tmp4 = obj3;
  } else {
    tmp4 = cResult[3];
  }
  dependencyMap = tmp4;
  if (cResult[4] === arg0) {
    if (cResult[5] === tmp3) {
      let tmp8;
      if (cResult[6] === tmp4) {
        tmp8 = cResult[7];
      }
      return tmp8;
    }
  }
  const obj4 = {
    panGestureWrapper(arg0) {
      let items;
      const obj = { style: { flexBasis: 0, flexGrow: 1 }, children: items };
      items = [arg0, ];
      const current = ref.current;
      let isFocusedResult;
      if (current != null) {
        isFocusedResult = current.isFocused();
      }
      let str = "auto";
      if (isFocusedResult) {
        str = "none";
      }
      const obj2 = { pointerEvents: str, onPress, style };
      items[1] = authStore(React3, obj2);
      return unpackModuleId(metroImportDefault, obj);
    }
  };
  cResult[4] = arg0;
  cResult[5] = tmp3;
  cResult[6] = tmp4;
  cResult[7] = obj4;
  tmp8 = obj4;
}) : ((arg0) => {
  let onPress;
  let ref;
  let style;
  _require = arg0;
  let obj = require("useIsScreenReaderEnabled");
  const isScreenReaderEnabled = obj.useIsScreenReaderEnabled();
  let items = [arg0];
  dependencyMap = react.useCallback(() => {
    const current = ref.current;
    let focusResult;
    if (current != null) {
      focusResult = current.focus();
    }
    return focusResult;
  }, items);
  const items1 = [isScreenReaderEnabled];
  react = react.useMemo(() => {
    let str;
    const obj = { display: str };
    const merged = Object.assign(metroRequire.absoluteFillObject);
    str = "flex";
    if (isScreenReaderEnabled) {
      str = "none";
    }
    return obj;
  }, items1);
  let obj2 = {
    panGestureWrapper(arg0) {
      let items;
      const obj = { style: { flexBasis: 0, flexGrow: 1 }, children: items };
      items = [arg0, ];
      const current = ref.current;
      let isFocusedResult;
      if (current != null) {
        isFocusedResult = current.isFocused();
      }
      let str = "auto";
      if (isFocusedResult) {
        str = "none";
      }
      const obj2 = { pointerEvents: str, onPress, style };
      items[1] = authStore(React3, obj2);
      return unpackModuleId(metroImportDefault, obj);
    }
  };
  return obj2;
});
const forwardRefResult = react.forwardRef((keyboardAppearance, ref2) => {
  let tmp6Result4;
  const ref = react.useRef(null);
  closure_12(ref);
  const tmp4 = useBottomSheetKeyboardHandlingDefault(keyboardAppearance);
  const tmp5 = closure_13(keyboardAppearance, ref);
  const panGestureWrapper = closure_14(ref).panGestureWrapper;
  native2;
  if (null == keyboardAppearance.keyboardAppearance) {
    const tmp6Result = native;
    keyboardAppearance.keyboardAppearance = tmp6Result.isThemeDark(tmp8) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
  }
  const obj = { ref: tmp6Result4.mergeRefs(ref, ref2) };
  const tmp6Result3 = native;
  const merged = Object.assign(tmp6Result3.mergeProps(keyboardAppearance, tmp4, tmp5));
  tmp6Result4 = native;
  const tmp11 = authStore(hasOwnProperty, obj);
  let panGestureWrapperResult = tmp11;
  if (!keyboardAppearance.multiline) {
    panGestureWrapperResult = panGestureWrapper(tmp11);
  }
  return panGestureWrapperResult;
});
const result = size.fileFinishedImporting("design/components/Input/native/NativeTextInput.native.tsx");

export const useKeyboardBlurring = tmp4;
export const NativeTextInput = forwardRefResult;