// === Module 8132: TextAreaField ===

// Module 8132 (TextAreaField)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getNodeText from "getNodeText" /* 4102 */;
import Text from "Text" /* 4739 */;
import useTextFieldState from "useTextFieldState" /* 7377 */;
import useInputStyles from "useInputStyles" /* 7383 */;
import useKeyboardBlurring from "useKeyboardBlurring" /* 7386 */;
import useCharacterLimitAnnouncement from "useCharacterLimitAnnouncement" /* 8133 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { area: { height: 128, textAlignVertical: "top" }, maxLengthIndicator: null };
obj = { position: "absolute", bottom: ThemesDefault.space.PX_4, right: ThemesDefault.space.PX_16 };
obj[1] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((isDisabled, ref) => {
  let label = isDisabled;
  let obj = dependencyMap;
  obj1 = useInputStyles;
  obj = { size: "lg", isRound: false, isDisabled: isDisabled.isDisabled };
  const inputStyles = obj1.useInputStyles(obj);
  const tmp2 = callback2();
  const maxLength = isDisabled.maxLength;
  let obj3 = useTextFieldState;
  const textField = obj3.useTextField(isDisabled, ref);
  ({ state, inputProps, innerRef } = textField);
  let obj4 = getNodeText;
  const focus = obj4.useFocus();
  let diff;
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - state.value.length;
  }
  const result = useCharacterLimitAnnouncement;
  obj = { currentLength: state.value.length, maxLength, message: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.c2Jqed);
  const characterLimitAnnouncement = result.useCharacterLimitAnnouncement(obj);
  obj1 = {};
  const merged = Object.assign(label);
  obj1.isFocused = isFocused;
  const obj2 = {};
  const result1 = getNodeText;
  const merged1 = Object.assign(result1.mergeProps(inputProps, focusProps));
  obj2.ref = innerRef;
  const items = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp2.area;
  obj2.style = items;
  obj2.placeholderTextColor = inputStyles.placeholderText.color;
  obj2.multiline = true;
  const items1 = [callback(useKeyboardBlurring.NativeTextInput, obj2), ];
  if (null == diff) {
    items1[1] = null;
    obj1.children = items1;
    return closure_4(useInputStyles.InputFieldContainer, obj1);
  } else {
    obj3 = { style: null, children: null };
    obj3[0] = tmp2.maxLengthIndicator;
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
    obj4 = { variant: "text-xs/semibold", color: null, accessibilityLabel: null, children: null };
    obj4[1] = str;
    if (typeof label.label === "string") {
      const intl2 = getSystemLocale.intl;
      obj = { label: null, remainingCharacters: null };
      label = label.label;
      obj[0] = label;
      obj[1] = diff;
      let formatToPlainStringResult = intl2.formatToPlainString(_8Q_k1s, obj);
    } else {
      const intl3 = getSystemLocale.intl;
      const obj5 = { remainingCharacters: null };
      obj5[0] = diff;
      formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t.fR1cof, obj5);
    }
    obj4[2] = formatToPlainStringResult;
    obj4[3] = diff;
    obj4 = tmp9(Text.Text, obj4);
    obj3[1] = obj4;
    tmp9(View, obj3);
    const tmp13 = View;
  }
});
let result = require("set").fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TextAreaField = forwardRefResult;