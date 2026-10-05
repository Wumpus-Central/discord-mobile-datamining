// === Module 6109: NativeTextInput ===

// Module 6109 (NativeTextInput)
import c from "c" /* 576 */;
import native from "native" /* 4582 */;
import native2 from "native" /* 4589 */;
import useMountEffect from "useMountEffect" /* 5590 */;
import useBottomSheetKeyboardHandlingDefault from "useBottomSheetKeyboardHandling" /* 6111 */;
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1486 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, TextInput: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const KeyboardThemes = fn(1085).KeyboardThemes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] !== arg0) {
    const fn = function u() {
      systemKeyboardOpen = systemKeyboardOpen(dependencyMap[7]).getKeyboardIsOpen();
      return subscribeToKeyboardUIStore((systemKeyboardOpen) => {
        systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
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
    let tmp3 = items;
    let tmp2 = fn;
  } else {
    tmp2 = cResult[1];
    tmp3 = cResult[2];
  }
  const effect = noop.useEffect(tmp2, tmp3);
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  const effect = noop.useEffect(() => {
    systemKeyboardOpen = systemKeyboardOpen(dependencyMap[7]).getKeyboardIsOpen();
    return subscribeToKeyboardUIStore((systemKeyboardOpen) => {
      systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
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
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((value, arg1) => {
  const cResult = c.c(9);
  value = value.value;
  importDefault = value;
  const defaultValue = value.defaultValue;
  if (cResult[0] === defaultValue) {
    if (cResult[1] === arg1) {
      if (cResult[2] === value) {
        let tmp4 = cResult[3];
        let tmp5 = cResult[4];
      }
      const effect = noop.useEffect(tmp4, tmp5);
      if (cResult[5] === arg1) {
        if (cResult[6] === value) {
          let tmp8 = cResult[7];
        }
        const mountLayoutEffect = useMountEffect.useMountLayoutEffect(tmp8);
        const _Symbol = Symbol;
        if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { value: "Array", defaultValue: "Set" };
          cResult[8] = obj2;
          let tmp11 = obj2;
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
      if (value == null) {
        tmp = defaultValue;
      }
      const obj = { text: tmp };
      current.setNativeProps(obj);
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
  value = value.value;
  importDefault = value;
  const defaultValue = value.defaultValue;
  const items = [arg1, value, defaultValue];
  const effect = noop.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      let tmp = value;
      if (value == null) {
        tmp = defaultValue;
      }
      const obj = { text: tmp };
      current.setNativeProps(obj);
    }
  }, items);
  const mountLayoutEffect = useMountEffect.useMountLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { text: value };
      current.setNativeProps(obj);
    }
  });
  return { value: "Array", defaultValue: "Set" };
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(8);
  let obj = require("c");
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
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
    let tmp3 = fn;
  } else {
    tmp3 = cResult[1];
  }
  const onPress = tmp3;
  let str = "flex";
  if (isScreenReaderEnabled) {
    str = "none";
  }
  if (cResult[2] !== str) {
    const obj3 = {};
    const merged = Object.assign(absoluteFillObject.absoluteFillObject);
    obj3.display = str;
    cResult[2] = str;
    cResult[3] = obj3;
    let tmp4 = obj3;
  } else {
    tmp4 = cResult[3];
  }
  dependencyMap = tmp4;
  if (cResult[4] === arg0) {
    if (cResult[5] === tmp3) {
      if (cResult[6] === tmp4) {
        let tmp8 = cResult[7];
      }
      return tmp8;
    }
  }
  const obj4 = {
    panGestureWrapper(arg0) {
      const obj = { style: { flexBasis: 0, flexGrow: 1 }, children: null };
      const items = [arg0, ];
      const current = ref.current;
      let isFocusedResult;
      if (current != null) {
        isFocusedResult = current.isFocused();
      }
      let str = "auto";
      if (isFocusedResult) {
        str = "none";
      }
      items[1] = v65535(React4, { pointerEvents: str, onPress, style });
      obj.children = items;
      return closure_2_11(React5, obj);
    }
  };
  cResult[4] = arg0;
  cResult[5] = tmp3;
  cResult[6] = tmp4;
  cResult[7] = obj4;
  tmp8 = obj4;
  const obj2 = require("useIsScreenReaderEnabled");
}) : ((arg0) => {
  _require = arg0;
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  let items = [arg0];
  dependencyMap = noop.useCallback(() => {
    const current = ref.current;
    let focusResult;
    if (current != null) {
      focusResult = current.focus();
    }
    return focusResult;
  }, items);
  const items1 = [isScreenReaderEnabled];
  noop = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(timestampProducer.absoluteFillObject);
    let str = "flex";
    if (isScreenReaderEnabled) {
      str = "none";
    }
    obj.display = str;
    return obj;
  }, items1);
  return {
    panGestureWrapper(arg0) {
      const obj = { style: { flexBasis: 0, flexGrow: 1 }, children: null };
      const items = [arg0, ];
      const current = ref.current;
      let isFocusedResult;
      if (current != null) {
        isFocusedResult = current.isFocused();
      }
      let str = "auto";
      if (isFocusedResult) {
        str = "none";
      }
      items[1] = v65535(React4, { pointerEvents: str, onPress, style });
      obj.children = items;
      return closure_2_11(React5, obj);
    }
  };
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/NativeTextInput.native.tsx");

export const useKeyboardBlurring = tmp4;
export const NativeTextInput = noop.forwardRef((keyboardAppearance, ref2) => {
  const ref = noop.useRef(null);
  closure_12(ref);
  const tmp4 = useBottomSheetKeyboardHandlingDefault(keyboardAppearance);
  native2;
  if (null != keyboardAppearance.keyboardAppearance) {
    const obj = {};
    const merged = Object.assign(native.mergeProps(keyboardAppearance, tmp4, tmp5));
    const tmp6Result = native;
    obj.ref = native.mergeRefs(ref, ref2);
    const tmp15 = v65535(hasOwnProperty, obj);
    let panGestureWrapperResult = tmp15;
    if (!keyboardAppearance.multiline) {
      panGestureWrapperResult = closure_14(ref).panGestureWrapper(tmp15);
    }
    return panGestureWrapperResult;
  } else {
    keyboardAppearance.keyboardAppearance = native.isThemeDark(tmp8) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
    const tmp6Result4 = native;
  }
  tmp5 = closure_13(keyboardAppearance, ref);
});