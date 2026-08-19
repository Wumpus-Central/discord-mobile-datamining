// discord_app/design/components/TextField/native/TextAreaField.native.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import getNodeText from "../../../utils/native.tsx";
import Text from "../../Text/native/Text.tsx";
import useTextFieldState from "useTextField.native.tsx";
import useInputStyles from "../../Input/native/InputFieldContainer.native.tsx";
import useKeyboardBlurring from "../../Input/native/NativeTextInput.native.tsx";
import useCharacterLimitAnnouncement from "../../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/useCharacterLimitAnnouncement.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = fn;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { position: "absolute", bottom: ThemesDefault.space.PX_4, right: ThemesDefault.space.PX_16 };
obj[1] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((isDisabled, ref) => {
  let label = isDisabled;
  let prop = require;
  obj1 = useInputStyles;
  let obj = { size: "lg", isRound: false, isDisabled: isDisabled.isDisabled };
  const inputStyles = obj1.useInputStyles(obj);
  const tmp3 = callback2();
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
  obj = { currentLength: state.value.length, maxLength, message: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.c2Jqed);
  const characterLimitAnnouncement = useCharacterLimitAnnouncement.useCharacterLimitAnnouncement(obj);
  obj1 = {};
  const merged = Object.assign(label);
  obj1.isFocused = isFocused;
  const obj2 = {};
  const propResult = useCharacterLimitAnnouncement;
  const merged1 = Object.assign(getNodeText.mergeProps(inputProps, focusProps));
  obj2.ref = innerRef;
  const items = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp3.area;
  obj2.style = items;
  obj2.placeholderTextColor = inputStyles.placeholderText.color;
  obj2.multiline = true;
  const items1 = [callback(useKeyboardBlurring.NativeTextInput, obj2), ];
  if (null == diff) {
    items1[1] = null;
    obj1.children = items1;
    return callback(useInputStyles.InputFieldContainer, obj1);
  } else {
    obj3 = { style: null, children: null };
    obj3[0] = tmp3.maxLengthIndicator;
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
      prop = getSystemLocale.t["8Q+k1s"];
      obj = { label: null, remainingCharacters: null };
      label = label.label;
      obj[0] = label;
      obj[1] = diff;
      let formatToPlainStringResult = intl2.formatToPlainString(prop, obj);
    } else {
      const intl3 = getSystemLocale.intl;
      const obj5 = { remainingCharacters: null };
      obj5[0] = diff;
      formatToPlainStringResult = intl3.formatToPlainString(getSystemLocale.t.fR1cof, obj5);
    }
    obj4[2] = formatToPlainStringResult;
    obj4[3] = diff;
    obj4 = callback(Text.Text, obj4);
    obj3[1] = obj4;
    callback(View, obj3);
  }
  const propResult1 = getNodeText;
});
const result = require("obj132").fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TextAreaField = forwardRefResult;