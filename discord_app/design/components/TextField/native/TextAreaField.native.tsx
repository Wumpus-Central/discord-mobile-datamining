// discord_app/design/components/TextField/native/TextAreaField.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../utils/native.tsx";
import useTextField from "useTextField.native.tsx";
import InputFieldContainer from "../../Input/native/InputFieldContainer.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const util = prop(1115);
const Text_Text = prop(4635);
const NativeTextInput = prop(6729);
const useCharacterLimitAnnouncement = prop(7194);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4639);
let obj = { area: { height: 128, textAlignVertical: "top" }, maxLengthIndicator: null };
const rect = { position: "absolute", bottom: nativeDefault.space.PX_4, right: nativeDefault.space.PX_16 };
obj.maxLengthIndicator = rect;
let closure_5 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TextAreaField = noop.forwardRef((isDisabled, arg1) => {
  let prop = require;
  let obj = dependencyMap;
  const inputStyles = InputFieldContainer.useInputStyles({
    size: "lg",
    isRound: false,
    isDisabled: isDisabled.isDisabled,
  });
  const tmp3 = closure_5();
  const maxLength = isDisabled.maxLength;
  const obj3 = { size: "lg", isRound: false, isDisabled: isDisabled.isDisabled };
  const textField = useTextField.useTextField(isDisabled, arg1);
  ({ state, inputProps, innerRef } = textField);
  const focus = native.useFocus();
  let diff;
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - state.value.length;
  }
  const nodeText = native.getNodeText(isDisabled.label);
  const propResult = native;
  const obj6 = { currentLength: state.value.length, maxLength, message: null };
  const intl = util.intl;
  obj6.message = intl.string(util.t.c2Jqed);
  const characterLimitAnnouncement = useCharacterLimitAnnouncement.useCharacterLimitAnnouncement(obj6);
  const obj7 = {};
  const merged = Object.assign(isDisabled);
  obj7.isFocused = isFocused;
  const obj8 = {};
  const propResult1 = useCharacterLimitAnnouncement;
  const merged1 = Object.assign(native.mergeProps(inputProps, focusProps));
  obj8.ref = innerRef;
  const items = [, ,];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp3.area;
  obj8.style = items;
  obj8.placeholderTextColor = inputStyles.placeholderText.color;
  obj8.multiline = true;
  const items1 = [React3(NativeTextInput.NativeTextInput, obj8)];
  if (null == diff) {
    items1[1] = null;
    obj7.children = items1;
    return React4(InputFieldContainer.InputFieldContainer, obj7);
  } else {
    const obj9 = { style: tmp3.maxLengthIndicator, children: null };
    let str3 = "text-muted";
    let str = "text-muted";
    if (null != maxLength) {
      str = str3;
      if (null != diff) {
        let str2 = "text-feedback-critical";
        if (diff > 0) {
          if (diff < maxLength / 9) {
            str3 = "text-feedback-warning";
          }
          str2 = str3;
        }
        str = str2;
      }
    }
    let obj10 = { variant: "text-xs/semibold", color: str, accessibilityLabel: null, children: null };
    if (null != nodeText) {
      const intl3 = util.intl;
      prop = util.t["8Q+k1s"];
      obj = { label: nodeText, remainingCharacters: diff };
      let formatToPlainStringResult = intl3.formatToPlainString(prop, obj);
    } else {
      const intl2 = util.intl;
      const obj11 = { remainingCharacters: diff };
      formatToPlainStringResult = intl2.formatToPlainString(util.t.fR1cof, obj11);
    }
    obj10.accessibilityLabel = formatToPlainStringResult;
    obj10.children = diff;
    obj10 = React3(Text_Text.Text, obj10);
    obj9.children = obj10;
    React3(View, obj9);
  }
  const propResult2 = native;
});
