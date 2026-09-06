// discord_app/design/components/TextField/native/BaseTextField.native.tsx
import mergeProps from "../../../utils/native/mergeProps.native.tsx";
import useFocus from "../../../utils/native/useFocus.native.tsx";
import InputFieldContainer from "../../Input/native/InputFieldContainer.native.tsx";
import NativeTextInput from "../../Input/native/NativeTextInput.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
  const ref = noop.useRef(null);
  let tmp6 = null;
  if (size.enableAndroidSanitizedInputWorkaround) {
    ({ secureTextEntry, keyboardType, autoComplete } = size);
    if (secureTextEntry === undefined) {
      secureTextEntry = false;
    }
    if (keyboardType === undefined) {
      keyboardType = "default";
    }
    let tmpResult = tmp(1115);
    let str = "off";
    if (!tmpResult.isAndroid()) {
      str = autoComplete;
    }
    obj = { autoComplete: str, secureTextEntry: null, keyboardType: null };
    tmpResult = tmp(1115);
    obj.secureTextEntry = tmpResult.isAndroid() || secureTextEntry;
    const tmp7 = tmpResult.isAndroid() || secureTextEntry;
    let str2 = "visible-password";
    if (!tmpResult1.isAndroid()) {
      str2 = keyboardType;
    }
    obj.keyboardType = str2;
    tmp6 = obj;
    tmpResult1 = tmp(1115);
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
  const items1 = [size.leading, ,];
  obj2 = {};
  const merged1 = Object.assign(tmp6);
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
  const tmp11 = React3;
  const tmp9 = React4;
  const tmpResult2 = mergeProps;
  obj2.ref = mergeProps.mergeRefs(ref, ref2);
  const items2 = [, ,];
  ({ padding: arr3[0], text: arr3[1] } = inputStyles);
  items2[2] = size.inputStyle;
  obj2.style = items2;
  obj2.placeholderTextColor = inputStyles.placeholderText.color;
  items1[1] = tmp11(NativeTextInput.NativeTextInput, obj2);
  items1[2] = size.trailing;
  obj1.children = items1;
  return tmp9(InputFieldContainer.InputFieldContainer, obj1);
});
