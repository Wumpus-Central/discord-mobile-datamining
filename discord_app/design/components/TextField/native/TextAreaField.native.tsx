// === Module 7343: TextAreaField ===

// Module 7343 (TextAreaField)
import nativeDefault from "native" /* 575 */;
import InputFieldContainer from "InputFieldContainer" /* 7122 */;
import noop from "module_19" /* 19 */;

const util = prop(1113);
const native = prop(4957);
const useToken = prop(5356);
const Text_Text = prop(5383);
const useScaledTextLineHeight = prop(5522);
const useTextField = prop(7110);
const NativeTextInput = prop(7125);
const propsForNativeTextInput = prop(7128);
const useCharacterLimitAnnouncement = prop(7344);
require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4792);
let closure_6 = createStyles.createStyles(() => {
  let num = arg0;
  if (arg0 === undefined) {
    num = 128;
  }
  const obj = { area: { height: num, textAlignVertical: "top" }, maxLengthIndicator: null };
  const rect = { position: "absolute", bottom: nativeDefault.space.PX_4, right: nativeDefault.space.PX_16 };
  obj.maxLengthIndicator = rect;
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TEXT_AREA_HEIGHT = 128;
export function TextAreaField(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  let prop = require;
  let obj = dependencyMap;
  const inputStyles = InputFieldContainer.useInputStyles({ size: "lg", round: false, disabled: merged.disabled });
  let num = inputStyles.padding.paddingVertical;
  if (num == null) {
    num = 0;
  }
  const obj3 = { size: "lg", round: false, disabled: merged.disabled };
  const token = useToken.useToken(nativeDefault.modules.mobile.INPUT_FIELD_TEXT_STYLE_LG);
  const propResult = useToken;
  const tmp5 = closure_6(Math.max(128, 5 * useScaledTextLineHeight.useScaledTextLineHeight(token) + 2 * num));
  const maxLength = merged.maxLength;
  const propResult1 = useScaledTextLineHeight;
  const textField = useTextField.useTextField(merged, ref.ref);
  ({ state, inputProps, innerRef } = textField);
  const propResult2 = useTextField;
  const focus = native.useFocus();
  let diff;
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - state.value.length;
  }
  const propResult3 = native;
  const nodeText = native.getNodeText(merged.label);
  const propResult4 = native;
  const obj4 = { currentLength: state.value.length, maxLength, message: null };
  const intl = util.intl;
  obj4.message = intl.string(util.t.c2Jqed);
  const characterLimitAnnouncement = useCharacterLimitAnnouncement.useCharacterLimitAnnouncement(obj4);
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5.isFocused = isFocused;
  const obj6 = {};
  const propResult5 = useCharacterLimitAnnouncement;
  const propResult6 = propsForNativeTextInput;
  const merged2 = Object.assign(propResult6.propsForNativeTextInput(native.mergeProps(inputProps, focusProps)));
  obj6.ref = innerRef;
  items = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp5.area;
  obj6.style = items;
  obj6.placeholderTextColor = inputStyles.placeholderText.color;
  obj6.multiline = true;
  const items1 = [React4(NativeTextInput.NativeTextInput, obj6), ];
  if (null == diff) {
    items1[1] = null;
    obj5.children = items1;
    return hasOwnProperty(InputFieldContainer.InputFieldContainer, obj5);
  } else {
    const obj7 = { style: tmp5.maxLengthIndicator, children: null };
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
    let obj8 = { variant: "body-xs/semibold", color: str, accessibilityLabel: null, children: null };
    if (null != nodeText) {
      const intl3 = util.intl;
      prop = util.t["8Q+k1s"];
      obj = { label: nodeText, remainingCharacters: diff };
      let formatToPlainStringResult = intl3.formatToPlainString(prop, obj);
    } else {
      const intl2 = util.intl;
      const obj9 = { remainingCharacters: diff };
      formatToPlainStringResult = intl2.formatToPlainString(util.t.fR1cof, obj9);
    }
    obj8.accessibilityLabel = formatToPlainStringResult;
    obj8.children = diff;
    obj8 = React4(Text_Text.Text, obj8);
    obj7.children = obj8;
    React4(View, obj7);
  }
  const propResult7 = native;
}