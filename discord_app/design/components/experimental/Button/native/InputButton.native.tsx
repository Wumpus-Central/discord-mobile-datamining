// === Module 9035: InputButton ===

// Module 9035 (InputButton)
import nativeDefault from "native" /* 576 */;
import BaseTextButton from "BaseTextButton" /* 5057 */;
import ButtonConstants from "ButtonConstants" /* 5061 */;
import InputFieldContainer from "InputFieldContainer" /* 6722 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["size", "isRound", "text", "value", "icon", "iconPosition", "accessibilityLabel", "accessibilityValue", "maxFontSizeMultiplier"];
const Text = fn(17).Text;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj = { buttonText: { flexGrow: 1, flexShrink: 1, width: "100%" }, buttonTextPlaceholder: { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT }, buttonTextValue: null };
let obj3 = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.buttonTextValue = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let closure_6 = createStyles.createStyles(obj);
let obj4 = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
let size = fn(2);
const result = size.fileFinishedImporting("design/components/experimental/Button/native/InputButton.native.tsx");

export const InputButton = noop.forwardRef((size, ref) => {
  size = size.size;
  let str = "lg";
  if (undefined !== size) {
    str = size;
  }
  const isRound = size.isRound;
  ({ text, value, icon, iconPosition } = size);
  let str2 = "start";
  if (undefined !== iconPosition) {
    str2 = iconPosition;
  }
  ({ accessibilityLabel, accessibilityValue, maxFontSizeMultiplier } = size);
  if (undefined === maxFontSizeMultiplier) {
    maxFontSizeMultiplier = ButtonConstants.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const tmp4 = _objectWithoutProperties(size, closure_2);
  const obj2 = { size: str, isRound: undefined !== isRound && isRound, hasLeadingIcon: "start" === str2 };
  const inputStyles = InputFieldContainer.useInputStyles(obj2);
  const tmp9 = closure_6();
  if (null != icon) {
    if (tmp7) {
      const obj3 = { paddingStart: inputStyles.leadingIcon.paddingEnd };
    } else {
      const obj4 = { paddingEnd: inputStyles.trailingIcon.paddingStart };
    }
  } else {
    const obj6 = {};
    const merged = Object.assign(tmp4);
    obj6.ref = ref;
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
    const items1 = [inputStyles.text, tmp9.buttonText, , ];
    const obj8 = { style: null, numberOfLines: 1, maxFontSizeMultiplier: null, children: null };
    items1[2] = null != value ? tmp9.buttonTextValue : tmp9.buttonTextPlaceholder;
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
  const tmp = undefined !== isRound && isRound;
});