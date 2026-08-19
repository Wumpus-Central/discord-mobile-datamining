// === Module 7347: BaseTextField ===

// Module 7347 (BaseTextField)
import importAllResult from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
let c3 = importAllResult;
({ jsx: c4, jsxs: c5 } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((size, ref2) => {
  let obj = ref(7345);
  obj = { size: size.size, isRound: size.isRound, hasLeadingIcon: null != size.leadingIcon, isRefreshEnabled: onChangeText(1367)("InputFieldContainer") };
  const inputStyles = obj.useInputStyles(obj);
  let obj2 = ref(4102);
  const focus = obj2.useFocus();
  ({ focusProps, isFocused } = focus);
  ref = importAllResult.useRef(null);
  let tmp7 = null;
  if (size.enableAndroidSanitizedInputWorkaround) {
    ({ secureTextEntry, keyboardType, autoComplete } = size);
    if (secureTextEntry === undefined) {
      secureTextEntry = false;
    }
    if (keyboardType === undefined) {
      keyboardType = "default";
    }
    let tmp3Result = tmp3(500);
    let str = "off";
    if (!tmp3Result.isAndroid()) {
      str = autoComplete;
    }
    obj = { autoComplete: null, secureTextEntry: null, keyboardType: null };
    obj[0] = str;
    tmp3Result = tmp3(500);
    obj[1] = tmp3Result.isAndroid() || secureTextEntry;
    const tmp8 = tmp3Result.isAndroid() || secureTextEntry;
    let str2 = "visible-password";
    if (!tmp3Result1.isAndroid()) {
      str2 = keyboardType;
    }
    obj[2] = str2;
    tmp7 = obj;
    tmp3Result1 = tmp3(500);
  }
  onChangeText = size.onChangeText;
  const items = [onChangeText];
  const callback = importAllResult.useCallback((str) => {
    let replaced = str;
    if (null != str) {
      replaced = str.replace(/\r\n?|\n/g, " ");
    }
    if (replaced !== str) {
      const current = ref.current;
      if (current != null) {
        const obj = { text: null };
        obj[0] = replaced;
        current.setNativeProps(obj);
      }
    }
    if (onChangeText != null) {
      tmp4(replaced);
    }
  }, items);
  obj1 = {};
  const merged = Object.assign(size);
  obj1.isFocused = isFocused;
  const items1 = [size.leading, , ];
  obj2 = {};
  const merged1 = Object.assign(tmp7);
  const obj4 = importAllResult;
  const tmp10 = closure_5;
  const tmp12 = closure_4;
  const tmp2 = onChangeText(1367)("InputFieldContainer");
  const merged2 = Object.assign(ref(4101).mergeProps(size, focusProps));
  let replaced = str3;
  if (null != size.value) {
    replaced = str3.replace(/\r\n?|\n/g, " ");
  }
  obj2.value = replaced;
  let replaced1 = str5;
  if (null != size.defaultValue) {
    replaced1 = str5.replace(/\r\n?|\n/g, " ");
  }
  obj2.defaultValue = replaced1;
  obj2.onChangeText = callback;
  const tmp3Result2 = ref(4101);
  obj2.ref = ref(4101).mergeRefs(ref, ref2);
  const items2 = [, , ];
  ({ padding: arr3[0], text: arr3[1] } = inputStyles);
  items2[2] = size.inputStyle;
  obj2.style = items2;
  obj2.placeholderTextColor = inputStyles.placeholderText.color;
  items1[1] = tmp12(ref(7348).NativeTextInput, obj2);
  items1[2] = size.trailing;
  obj1.children = items1;
  return tmp10(ref(7345).InputFieldContainer, obj1);
});
const result = require("set").fileFinishedImporting("design/components/TextField/native/BaseTextField.native.tsx");

export const BaseTextField = forwardRefResult;