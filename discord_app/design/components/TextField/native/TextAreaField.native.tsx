// === Module 7086: TextAreaField ===

// Module 7086 (TextAreaField)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 4264 */;
import useTextField from "useTextField" /* 6614 */;
import InputFieldContainer from "InputFieldContainer" /* 6621 */;
import noop from "module_19" /* 19 */;

const util = prop(1114);
const Text_Text = prop(4556);
const NativeTextInput = prop(6624);
const useCharacterLimitAnnouncement = prop(7087);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4560);
let obj = { area: { height: 128, textAlignVertical: "top" }, maxLengthIndicator: null };
const rect = { position: "absolute", bottom: nativeDefault.space.PX_4, right: nativeDefault.space.PX_16 };
obj.maxLengthIndicator = rect;
let closure_5 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TextAreaField = noop.forwardRef((isDisabled, ref) => {
  let prop = require;
  let obj1 = InputFieldContainer;
  let obj = { size: "lg", isRound: false, isDisabled: isDisabled.isDisabled };
  const inputStyles = obj1.useInputStyles(obj);
  const tmp3 = closure_5();
  const maxLength = isDisabled.maxLength;
  let obj3 = useTextField;
  const textField = obj3.useTextField(isDisabled, ref);
  ({ state, inputProps, innerRef } = textField);
  let obj4 = native;
  const focus = obj4.useFocus();
  let diff;
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - state.value.length;
  }
  const nodeText = native.getNodeText(isDisabled.label);
  const propResult = native;
  obj = { currentLength: state.value.length, maxLength, message: null };
  const intl = util.intl;
  obj.message = intl.string(util.t.c2Jqed);
  const characterLimitAnnouncement = useCharacterLimitAnnouncement.useCharacterLimitAnnouncement(obj);
  obj1 = {};
  const merged = Object.assign(isDisabled);
  obj1.isFocused = isFocused;
  const obj2 = {};
  const propResult1 = useCharacterLimitAnnouncement;
  const tmp9 = React4;
  const merged1 = Object.assign(native.mergeProps(inputProps, focusProps));
  obj2.ref = innerRef;
  const items = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp3.area;
  obj2.style = items;
  obj2.placeholderTextColor = inputStyles.placeholderText.color;
  obj2.multiline = true;
  const items1 = [React3(NativeTextInput.NativeTextInput, obj2), ];
  if (null == diff) {
    items1[1] = null;
    obj1.children = items1;
    return tmp9(InputFieldContainer.InputFieldContainer, obj1);
  } else {
    obj3 = { style: tmp3.maxLengthIndicator, children: null };
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
    obj4 = { variant: "text-xs/semibold", color: str, accessibilityLabel: null, children: null };
    if (null != nodeText) {
      const intl3 = util.intl;
      prop = util.t["8Q+k1s"];
      obj = { label: nodeText, remainingCharacters: diff };
      let formatToPlainStringResult = intl3.formatToPlainString(prop, obj);
    } else {
      const intl2 = util.intl;
      const obj5 = { remainingCharacters: diff };
      formatToPlainStringResult = intl2.formatToPlainString(util.t.fR1cof, obj5);
    }
    obj4.accessibilityLabel = formatToPlainStringResult;
    obj4.children = diff;
    obj4 = tmp11(Text_Text.Text, obj4);
    obj3.children = obj4;
    tmp11(View, obj3);
  }
});