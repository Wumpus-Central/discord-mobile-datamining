// === Module 6240: BaseTextField ===

// Module 6240 (BaseTextField)
import importAllResult from "noop" /* 19 */;
import jsxProd from "jsxProd" /* 21 */;

const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
const forwardRefResult = importAllResult.forwardRef((size, ref2) => {
  let obj = ref(onChangeText[3]);
  obj = { size: size.size, isRound: size.isRound, hasLeadingIcon: null != size.leadingIcon };
  const inputStyles = obj.useInputStyles(obj);
  let obj2 = ref(onChangeText[4]);
  const focus = obj2.useFocus();
  ({ focusProps, isFocused } = focus);
  ref = importAllResult.useRef(null);
  let tmp6 = null;
  if (size.enableAndroidSanitizedInputWorkaround) {
    ({ secureTextEntry, keyboardType, autoComplete } = size);
    if (secureTextEntry === undefined) {
      secureTextEntry = false;
    }
    if (keyboardType === undefined) {
      keyboardType = "default";
    }
    let tmpResult = tmp(tmp2[2]);
    let str = "off";
    if (!tmpResult.isAndroid()) {
      str = autoComplete;
    }
    obj = { autoComplete: null, secureTextEntry: null, keyboardType: null };
    obj[0] = str;
    tmpResult = tmp(tmp2[2]);
    obj[1] = tmpResult.isAndroid() || secureTextEntry;
    const tmp7 = tmpResult.isAndroid() || secureTextEntry;
    let str2 = "visible-password";
    if (!tmpResult1.isAndroid()) {
      str2 = keyboardType;
    }
    obj[2] = str2;
    tmp6 = obj;
    tmpResult1 = tmp(tmp2[2]);
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
  const merged1 = Object.assign(tmp6);
  const merged2 = Object.assign(ref(onChangeText[6]).mergeProps(size, focusProps));
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
  const obj4 = importAllResult;
  const tmp11 = closure_3;
  const tmp9 = closure_4;
  const tmpResult2 = ref(onChangeText[6]);
  obj2.ref = ref(onChangeText[6]).mergeRefs(ref, ref2);
  const items2 = [, , ];
  ({ padding: arr3[0], text: arr3[1] } = inputStyles);
  items2[2] = size.inputStyle;
  obj2.style = items2;
  obj2.placeholderTextColor = inputStyles.placeholderText.color;
  items1[1] = tmp11(ref(onChangeText[5]).NativeTextInput, obj2);
  items1[2] = size.trailing;
  obj1.children = items1;
  return tmp9(ref(onChangeText[3]).InputFieldContainer, obj1);
});
const result = require("set").fileFinishedImporting("design/components/TextField/native/BaseTextField.native.tsx");

export const BaseTextField = forwardRefResult;