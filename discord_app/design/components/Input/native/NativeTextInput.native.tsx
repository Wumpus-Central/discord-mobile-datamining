// === Module 7297: NativeTextInput ===

// Module 7297 (NativeTextInput)
import noop from "module_19" /* 19 */;
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore" /* 1497 */;

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, TextInput: hasOwnProperty, StyleSheet: closure_6, View: metroImportDefault } = get_ActivityIndicator);
const KeyboardThemes = fn(1071).KeyboardThemes;
const jsxProd = fn(21);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Input/native/NativeTextInput.native.tsx");

export function useKeyboardBlurring(ref) {
  closure_0 = ref;
  items = [ref];
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
}
export const NativeTextInput = function TextInput(ref) {
  const iter = Object.assign(ref, Object.assign({ ref: 0 }));
  ref = noop.useRef(null);
  items = [ref];
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
  value = iter.value;
  importDefault = value;
  const defaultValue = iter.defaultValue;
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
  const tmp4 = require("useBottomSheetKeyboardHandling")(iter);
  const mountLayoutEffect = ref(defaultValue[6]).useMountLayoutEffect(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { text };
      current.setNativeProps(obj);
    }
  });
  closure_129_0 = ref;
  let obj = ref(defaultValue[6]);
  const items2 = [ref];
  const isScreenReaderEnabled = ref(defaultValue[7]).useIsScreenReaderEnabled();
  const callback = noop.useCallback(() => {
    const current = ref.current;
    let focusResult;
    if (current != null) {
      focusResult = current.focus();
    }
    return focusResult;
  }, items2);
  ref(defaultValue[9]);
  if (null != iter.keyboardAppearance) {
    const obj3 = {};
    const merged = Object.assign(tmp6(tmp3[10]).mergeProps(iter, tmp4, { value: "displayName", defaultValue: "isArray" }));
    const obj4 = { value: "displayName", defaultValue: "isArray" };
    const tmp6Result = tmp6(tmp3[10]);
    obj3.ref = tmp6(tmp3[10]).mergeRefs(ref, ref.ref);
    const tmp17 = closure_10(closure_5, obj3);
    let tmp19Result = tmp17;
    if (!iter.multiline) {
      const obj5 = { style: { flexBasis: 0, flexGrow: 1 }, children: null };
      const items3 = [tmp17, ];
      let tmp13Result = null;
      if (!isScreenReaderEnabled) {
        let current = ref.current;
        let isFocusedResult;
        if (current != null) {
          isFocusedResult = current.isFocused();
        }
        let str = "auto";
        if (isFocusedResult) {
          str = "none";
        }
        const obj6 = { pointerEvents: str, onPress: callback, style: absoluteFillObject.absoluteFillObject };
        tmp13Result = closure_10(closure_4, obj6);
      }
      items3[1] = tmp13Result;
      obj5.children = items3;
      tmp19Result = closure_11(closure_7, obj5);
    }
    return tmp19Result;
  } else {
    iter.keyboardAppearance = tmp6(tmp3[10]).isThemeDark(tmp11) ? KeyboardThemes.DARK : KeyboardThemes.LIGHT;
    const tmp6Result4 = tmp6(tmp3[10]);
  }
  const obj2 = ref(defaultValue[7]);
};