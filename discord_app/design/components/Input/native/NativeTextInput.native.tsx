import importAllResult from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import { KeyboardThemes } from "ME";
import jsxProd from "jsxProd";

let c10;
let c4;
let c5;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
let c3 = importAllResult;
({ Pressable: c4, TextInput: c5, StyleSheet: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((value, ref2) => {
  const ref = importAllResult.useRef(null);
  const items = [ref];
  const effect = importAllResult.useEffect(() => {
    const keyboardIsOpen = ref(defaultValue[5]).getKeyboardIsOpen();
    return outer1_8((systemKeyboardOpen) => {
      systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
      if (!tmp) {
        const current = ref.current;
        if (current != null) {
          current.blur();
        }
      }
    });
  }, items);
  let isScreenReaderEnabled;
  let defaultValue;
  value = value.value;
  isScreenReaderEnabled = value;
  defaultValue = value.defaultValue;
  const items1 = [ref, value, defaultValue];
  const effect1 = importAllResult.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      let tmp = isScreenReaderEnabled;
      if (isScreenReaderEnabled == null) {
        tmp = defaultValue;
      }
      const obj = { text: null };
      obj[0] = tmp;
      current.setNativeProps(obj);
    }
  }, items1);
  let obj = ref(defaultValue[6]);
  const mountLayoutEffect = obj.useMountLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { text: null };
      obj[0] = isScreenReaderEnabled;
      current.setNativeProps(obj);
    }
  });
  isScreenReaderEnabled = undefined;
  let obj1 = ref(defaultValue[7]);
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const items2 = [ref];
  const items3 = [isScreenReaderEnabled];
  const callback = importAllResult.useCallback(() => {
    const current = ref.current;
    let focusResult;
    if (current != null) {
      focusResult = current.focus();
    }
    return focusResult;
  }, items2);
  const memo = importAllResult.useMemo(() => {
    const obj = {};
    const merged = Object.assign(outer1_6.absoluteFillObject);
    let str = "flex";
    if (isScreenReaderEnabled) {
      str = "none";
    }
    obj.display = str;
    return obj;
  }, items3);
  ref(defaultValue[9]);
  if (null != value.keyboardAppearance) {
    obj = {};
    obj = { value: "Array", defaultValue: "HermesInternal" };
    let tmp6Result = tmp6(tmp3[10]);
    let merged = Object.assign(tmp6Result.mergeProps(value, tmp4, obj));
    tmp6Result = tmp6(tmp3[10]);
    obj.ref = tmp6Result.mergeRefs(ref, ref2);
    const tmp19 = callback(closure_5, obj);
    let tmp21Result = tmp19;
    if (!value.multiline) {
      obj1 = { style: null, children: null };
      obj1[0] = { flexBasis: 0, flexGrow: 1 };
      const items4 = [tmp19, ];
      let current = ref.current;
      let isFocusedResult;
      if (current != null) {
        isFocusedResult = current.isFocused();
      }
      let str = "auto";
      if (isFocusedResult) {
        str = "none";
      }
      const obj2 = { pointerEvents: null, onPress: null, style: null };
      obj2[0] = str;
      obj2[1] = callback;
      obj2[2] = memo;
      items4[1] = callback(closure_4, obj2);
      obj1[1] = items4;
      tmp21Result = closure_11(closure_7, obj1);
      const tmp21 = closure_11;
      const tmp22 = closure_7;
      const tmp23 = closure_4;
    }
    return tmp21Result;
  } else {
    value.keyboardAppearance = tmp6(tmp3[10]).isThemeDark(tmp12) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
    const tmp6Result1 = tmp6(tmp3[10]);
  }
});
const result = require("subscribeToKeyboardUIStore").fileFinishedImporting("design/components/Input/native/NativeTextInput.native.tsx");

export const useKeyboardBlurring = function useKeyboardBlurring(ref) {
  let closure_0 = ref;
  const items = [ref];
  const effect = importAllResult.useEffect(() => {
    const keyboardIsOpen = ref(defaultValue[5]).getKeyboardIsOpen();
    return outer1_8((systemKeyboardOpen) => {
      systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
      if (!tmp) {
        const current = ref.current;
        if (current != null) {
          current.blur();
        }
      }
    });
  }, items);
};
export const NativeTextInput = forwardRefResult;