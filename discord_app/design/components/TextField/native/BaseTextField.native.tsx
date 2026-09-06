// === Module 6623: BaseTextField ===

// Module 6623 (BaseTextField)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import mergeProps from "mergeProps" /* 4267 */;
import useFocus from "useFocus" /* 4268 */;
import InputFieldContainer from "InputFieldContainer" /* 6621 */;
import NativeTextInput from "NativeTextInput" /* 6624 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/BaseTextField.native.tsx");

export const BaseTextField = noop.forwardRef((size, ref2) => {
  let obj = { size: size.size, isRound: size.isRound, hasLeadingIcon: null != size.leadingIcon };
  const inputStyles = obj.useInputStyles(obj);
  let obj2 = useFocus;
  const focus = obj2.useFocus();
  ({ focusProps, isFocused } = focus);
  let tmp6 = null;
  if (size.enableAndroidSanitizedInputWorkaround) {
    ({ secureTextEntry, keyboardType, autoComplete } = size);
    if (secureTextEntry === undefined) {
      secureTextEntry = false;
    }
    if (keyboardType === undefined) {
      keyboardType = "default";
    }
    let tmpResult = PlatformUtils;
    let str = "off";
    if (!tmpResult.isAndroid()) {
      str = autoComplete;
    }
    obj = { autoComplete: str, secureTextEntry: null, keyboardType: null };
    tmpResult = PlatformUtils;
    obj.secureTextEntry = tmpResult.isAndroid() || secureTextEntry;
    const tmp7 = tmpResult.isAndroid() || secureTextEntry;
    let str2 = "visible-password";
    if (!tmpResult1.isAndroid()) {
      str2 = keyboardType;
    }
    obj.keyboardType = str2;
    tmp6 = obj;
    tmpResult1 = PlatformUtils;
  }
  const onChangeText = size.onChangeText;
  const items = [onChangeText];
  const callback = noop.useCallback((str) => {
    let replaced = str;
    if (null != str) {
      replaced = str.replace(/\r\n?|\n/g, " ");
    }
    if (replaced !== str) {
      const current = ref.current;
      if (current != null) {
        const obj = { text: replaced };
        current.setNativeProps(obj);
      }
    }
    if (onChangeText != null) {
      tmp4(replaced);
    }
  }, items);
  const obj1 = {};
  const merged = Object.assign(size);
  obj1.isFocused = isFocused;
  const items1 = [size.leading, , ];
  obj2 = {};
  const merged1 = Object.assign(tmp6);
  const ref = noop.useRef(null);
  const merged2 = Object.assign(mergeProps.mergeProps(size, focusProps));
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
  const tmpResult2 = mergeProps;
  obj2.ref = mergeProps.mergeRefs(ref, ref2);
  const items2 = [, , ];
  ({ padding: arr3[0], text: arr3[1] } = inputStyles);
  items2[2] = size.inputStyle;
  obj2.style = items2;
  obj2.placeholderTextColor = inputStyles.placeholderText.color;
  items1[1] = React3(NativeTextInput.NativeTextInput, obj2);
  items1[2] = size.trailing;
  obj1.children = items1;
  return React4(InputFieldContainer.InputFieldContainer, obj1);
});