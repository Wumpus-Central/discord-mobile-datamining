// === Module 7650: TextAreaField ===

// Module 7650 (TextAreaField)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let obj = { area: { height: 128, textAlignVertical: "top" }, maxLengthIndicator: null };
obj = { position: "absolute", bottom: require("Themes").space.PX_4, right: require("Themes").space.PX_16 };
obj[1] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const forwardRefResult = require("noop").forwardRef((isDisabled, ref) => {
  let focusProps;
  let innerRef;
  let inputProps;
  let isFocused;
  let state;
  let label = isDisabled;
  let obj = dependencyMap;
  let obj1 = require(6743) /* useInputStyles */;
  obj = { size: "lg", isRound: false, isDisabled: isDisabled.isDisabled };
  const inputStyles = obj1.useInputStyles(obj);
  const tmp2 = callback2();
  const maxLength = isDisabled.maxLength;
  let obj3 = require(6737) /* useTextFieldState */;
  const textField = obj3.useTextField(isDisabled, ref);
  ({ state, inputProps, innerRef } = textField);
  let obj4 = require(3899) /* getNodeText */;
  const focus = obj4.useFocus();
  let diff;
  ({ focusProps, isFocused } = focus);
  if (null != maxLength) {
    diff = maxLength - state.value.length;
  }
  const result = _8Q_k1s(7651);
  obj = { currentLength: state.value.length, maxLength, message: null };
  const intl = _8Q_k1s(1236).intl;
  obj[2] = intl.string(_8Q_k1s(1236).t.c2Jqed);
  const characterLimitAnnouncement = result.useCharacterLimitAnnouncement(obj);
  obj1 = {};
  const merged = Object.assign(label);
  obj1.isFocused = isFocused;
  const obj2 = {};
  const result1 = _8Q_k1s(3899);
  const merged1 = Object.assign(result1.mergeProps(inputProps, focusProps));
  obj2.ref = innerRef;
  const items = [, , ];
  ({ padding: arr[0], text: arr[1] } = inputStyles);
  items[2] = tmp2.area;
  obj2.style = items;
  obj2.placeholderTextColor = inputStyles.placeholderText.color;
  obj2.multiline = true;
  const items1 = [callback(_8Q_k1s(6746).NativeTextInput, obj2), ];
  if (null == diff) {
    items1[1] = null;
    obj1.children = items1;
    return closure_4(_8Q_k1s(6743).InputFieldContainer, obj1);
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
    if (typeof label.label === "y") {
      const intl2 = _8Q_k1s(1236).intl;
      obj = { label: null, remainingCharacters: null };
      label = label.label;
      obj[0] = label;
      obj[1] = diff;
      let formatToPlainStringResult = intl2.formatToPlainString(_8Q_k1s, obj);
    } else {
      const intl3 = _8Q_k1s(1236).intl;
      const obj5 = { remainingCharacters: null };
      obj5[0] = diff;
      formatToPlainStringResult = intl3.formatToPlainString(_8Q_k1s(1236).t.fR1cof, obj5);
    }
    obj4[2] = formatToPlainStringResult;
    obj4[3] = diff;
    obj4 = tmp9(_8Q_k1s(4189).Text, obj4);
    obj3[1] = obj4;
    tmp9(View, obj3);
    const tmp13 = View;
  }
});
let result = require("jsxProd").fileFinishedImporting("design/components/TextField/native/TextAreaField.native.tsx");

export const TextAreaField = forwardRefResult;