// === Module 8987: InputButton ===

// Module 8987 (InputButton)
import nativeDefault from "native" /* 575 */;
import BaseTextButton from "BaseTextButton" /* 5630 */;
import ButtonConstants from "ButtonConstants" /* 5635 */;
import InputFieldContainer from "InputFieldContainer" /* 7091 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["size", "round", "text", "value", "icon", "iconPosition", "accessibilityLabel", "accessibilityValue", "maxFontSizeMultiplier"];
const Text = fn(17).Text;
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj2 = { buttonText: { flexGrow: 1, flexShrink: 1, width: "100%" }, buttonTextPlaceholder: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT }, buttonTextValue: null };
let obj3 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj2.buttonTextValue = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let closure_6 = createStyles.createStyles(obj2);
let size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/InputButton.native.tsx");

export function InputButton(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const size = merged.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  const round = merged.round;
  ({ text, value, icon, iconPosition } = merged);
  let str2 = "start";
  if (undefined !== iconPosition) {
    str2 = iconPosition;
  }
  ({ accessibilityLabel, accessibilityValue, maxFontSizeMultiplier } = merged);
  if (undefined === maxFontSizeMultiplier) {
    maxFontSizeMultiplier = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const tmp5 = _objectWithoutProperties(merged, closure_2);
  const obj2 = { size: str, round: undefined !== round && round, hasLeadingIcon: "start" === str2 };
  const inputStyles = InputFieldContainer.useInputStyles(obj2);
  const tmp10 = closure_6();
  if (null != icon) {
    if (tmp8) {
      const obj3 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
    } else {
      const obj4 = { paddingEnd: inputStyles.trailingIcon.paddingStart };
    }
  } else {
    const obj6 = {};
    const merged1 = Object.assign(tmp5);
    obj6.ref = ref.ref;
    obj6.size = str;
    obj6.variant = "tertiary";
    obj6.icon = icon;
    obj6.iconPosition = str2;
    const items = [, ];
    ({ padding: arr[0], radius: arr[1] } = inputStyles);
    obj6.pillStyle = items;
    if (accessibilityLabel == null) {
      let str1;
      if (text != null) {
        str1 = text.toString();
      }
      accessibilityLabel = str1;
    }
    obj6.accessibilityLabel = accessibilityLabel;
    if (accessibilityValue == null) {
      const obj7 = { text: value };
      accessibilityValue = obj7;
    }
    obj6.accessibilityValue = accessibilityValue;
    const items1 = [inputStyles.text, tmp10.buttonText, , ];
    const obj8 = { style: null, numberOfLines: 1, maxFontSizeMultiplier: null, children: null };
    items1[2] = null != value ? tmp10.buttonTextValue : tmp10.buttonTextPlaceholder;
    items1[3] = {};
    obj8.style = items1;
    obj8.maxFontSizeMultiplier = maxFontSizeMultiplier;
    if (value == null) {
      value = text;
    }
    obj8.children = value;
    obj6.textElement = <Text style={null} numberOfLines={1} maxFontSizeMultiplier={null}>{null}</Text>;
    return jsx(BaseTextButton.BaseTextButton, {});
  }
  const tmp2 = undefined !== round && round;
}