// === Module 6866: NativeTextInput ===

// Module 6866 (NativeTextInput)
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1480 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, TextInput: hasOwnProperty, StyleSheet: metroRequire, View: closure_7 } = get_ActivityIndicator);
const KeyboardThemes = fn(1074).KeyboardThemes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/NativeTextInput.native.tsx");

export const useKeyboardBlurring = function useKeyboardBlurring(ref) {
  closure_0 = ref;
  const items = [ref];
  const effect = noop.useEffect(() => {
    let systemKeyboardOpen = ref(defaultValue[5]).getKeyboardIsOpen();
    return subscribeToKeyboardUIStore((systemKeyboardOpen) => {
      systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
      if (!tmp) {
        const current = ref.current;
        if (current != null) {
          current.blur();
        }
      }
      tmp = systemKeyboardOpen === systemKeyboardOpen || systemKeyboardOpen;
    });
  }, items);
};
export const NativeTextInput = noop.forwardRef((value, ref2) => {
  const ref = noop.useRef(null);
  const items = [ref];
  const effect = noop.useEffect(() => {
    let systemKeyboardOpen = ref(defaultValue[5]).getKeyboardIsOpen();
    return subscribeToKeyboardUIStore((systemKeyboardOpen) => {
      systemKeyboardOpen = systemKeyboardOpen.systemKeyboardOpen;
      if (!tmp) {
        const current = ref.current;
        if (current != null) {
          current.blur();
        }
      }
      tmp = systemKeyboardOpen === systemKeyboardOpen || systemKeyboardOpen;
    });
  }, items);
  value = value.value;
  importDefault = value;
  const defaultValue = value.defaultValue;
  const items1 = [ref, value, defaultValue];
  const effect1 = noop.useEffect(() => {
    const current = ref.current;
    if (current != null) {
      let tmp = c1;
      if (c1 == null) {
        tmp = defaultValue;
      }
      const obj = { text: tmp };
      current.setNativeProps(obj);
    }
  }, items1);
  const tmp4 = require("useBottomSheetKeyboardHandling")(value);
  const mountLayoutEffect = ref(defaultValue[6]).useMountLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { text };
      current.setNativeProps(obj);
    }
  });
  closure_129_0 = ref;
  let obj = ref(defaultValue[6]);
  const isScreenReaderEnabled = ref(defaultValue[7]).useIsScreenReaderEnabled();
  closure_129_1 = isScreenReaderEnabled;
  const items2 = [ref];
  const items3 = [isScreenReaderEnabled];
  const callback = noop.useCallback(() => {
    const current = ref.current;
    let focusResult;
    if (current != null) {
      focusResult = current.focus();
    }
    return focusResult;
  }, items2);
  const memo = noop.useMemo(() => {
    const obj = {};
    const merged = Object.assign(absoluteFillObject.absoluteFillObject);
    let str = "flex";
    if (c1) {
      str = "none";
    }
    obj.display = str;
    return obj;
  }, items3);
  ref(defaultValue[9]);
  if (null != value.keyboardAppearance) {
    const obj3 = {};
    let merged = Object.assign(tmp6(tmp3[10]).mergeProps(value, tmp4, { value: "Array", defaultValue: "PX_16" }));
    const obj4 = { value: "Array", defaultValue: "PX_16" };
    const tmp6Result = tmp6(tmp3[10]);
    obj3.ref = tmp6(tmp3[10]).mergeRefs(ref, ref2);
    const tmp19 = closure_10(closure_5, obj3);
    let tmp21Result = tmp19;
    if (!value.multiline) {
      const obj5 = { style: { flexBasis: 0, flexGrow: 1 }, children: null };
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
      const obj6 = { pointerEvents: str, onPress: callback, style: memo };
      items4[1] = closure_10(closure_4, obj6);
      obj5.children = items4;
      tmp21Result = closure_11(closure_7, obj5);
    }
    return tmp21Result;
  } else {
    value.keyboardAppearance = tmp6(tmp3[10]).isThemeDark(tmp12) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
    const tmp6Result4 = tmp6(tmp3[10]);
  }
  const obj2 = ref(defaultValue[7]);
});