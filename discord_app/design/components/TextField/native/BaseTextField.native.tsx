// discord_app/design/components/TextField/native/BaseTextField.native.tsx
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import mergeProps from "../../../utils/native/mergeProps.native.tsx";
import useFocus from "../../../utils/native/useFocus.native.tsx";
import InputFieldContainer from "../../Input/native/InputFieldContainer.native.tsx";
import NativeTextInput from "../../Input/native/NativeTextInput.native.tsx";
import propsForNativeTextInput from "../../Input/native/propsForNativeTextInput.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/BaseTextField.native.tsx");

export function BaseTextField(onChangeText) {
  onChangeText = onChangeText.onChangeText;
  const iter = Object.assign(onChangeText, Object.assign({ ref: 0, onChangeText: 0 }));
  const inputStyles = InputFieldContainer.useInputStyles({
    size: iter.size,
    round: iter.round,
    hasLeadingIcon: null != iter.leadingIcon,
  });
  const obj2 = { size: iter.size, round: iter.round, hasLeadingIcon: null != iter.leadingIcon };
  const focus = useFocus.useFocus();
  ({ focusProps, isFocused } = focus);
  const ref = noop.useRef(null);
  let tmp6 = null;
  if (iter.enableAndroidSanitizedInputWorkaround) {
    ({ secureTextEntry, keyboardType, autoComplete } = iter);
    if (secureTextEntry === undefined) {
      secureTextEntry = false;
    }
    if (keyboardType === undefined) {
      keyboardType = "default";
    }
    let str = "off";
    if (!tmpResult.isAndroid()) {
      str = autoComplete;
    }
    const obj5 = { autoComplete: str, secureTextEntry: null, keyboardType: null };
    tmpResult = PlatformUtils;
    const tmpResult6 = PlatformUtils;
    obj5.secureTextEntry = PlatformUtils.isAndroid() || secureTextEntry;
    const tmp7 = PlatformUtils.isAndroid() || secureTextEntry;
    let str2 = "visible-password";
    if (!tmpResult7.isAndroid()) {
      str2 = keyboardType;
    }
    obj5.keyboardType = str2;
    tmp6 = obj5;
    tmpResult7 = PlatformUtils;
  }
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
  const obj6 = {};
  const merged = Object.assign(iter);
  obj6.isFocused = isFocused;
  const items1 = [iter.leading, ,];
  const obj7 = {};
  const merged1 = Object.assign(tmp6);
  const tmpResult8 = propsForNativeTextInput;
  const merged2 = Object.assign(tmpResult8.propsForNativeTextInput(mergeProps.mergeProps(iter, focusProps)));
  let replaced = str3;
  if (null != iter.value) {
    replaced = str3.replace(/\r\n?|\n/g, " ");
  }
  obj7.value = replaced;
  let replaced1 = str5;
  if (null != iter.defaultValue) {
    replaced1 = str5.replace(/\r\n?|\n/g, " ");
  }
  obj7.defaultValue = replaced1;
  obj7.onChangeText = callback;
  const tmpResult9 = mergeProps;
  obj7.ref = mergeProps.mergeRefs(ref, onChangeText.ref);
  const items2 = [, ,];
  ({ padding: arr3[0], text: arr3[1] } = inputStyles);
  items2[2] = iter.inputStyle;
  obj7.style = items2;
  obj7.placeholderTextColor = inputStyles.placeholderText.color;
  items1[1] = React3(NativeTextInput.NativeTextInput, obj7);
  items1[2] = iter.trailing;
  obj6.children = items1;
  return React4(InputFieldContainer.InputFieldContainer, obj6);
}
