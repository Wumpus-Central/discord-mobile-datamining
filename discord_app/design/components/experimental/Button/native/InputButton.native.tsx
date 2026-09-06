// discord_app/design/components/experimental/Button/native/InputButton.native.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import BaseTextButton from "../../../Button/native/BaseTextButton.native.tsx";
import ButtonConstants from "../../../Button/native/ButtonConstants.native.tsx";
import InputFieldContainer from "../../../Input/native/InputFieldContainer.native.tsx";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = [
  "size",
  "isRound",
  "text",
  "value",
  "icon",
  "iconPosition",
  "accessibilityLabel",
  "accessibilityValue",
  "maxFontSizeMultiplier",
];
const Text = fn(17).Text;
const jsx = fn(21).jsx;
fn(4560);
let obj = {
  buttonText: { flexGrow: 1, flexShrink: 1, width: "100%" },
  buttonTextPlaceholder: null,
  buttonTextValue: null,
};
obj = { color: nativeDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj.buttonTextPlaceholder = obj;
const createStyles = { color: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
obj.buttonTextValue = createStyles;
let closure_6 = createStyles.createStyles(obj);
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
  let obj = { size: str, isRound: undefined !== isRound && isRound, hasLeadingIcon: "start" === str2 };
  const inputStyles = obj.useInputStyles(obj);
  const tmp9 = closure_6();
  if (null != icon) {
    if (tmp7) {
      obj = { paddingStart: inputStyles.leadingIcon.paddingEnd };
    } else {
      const obj1 = { paddingEnd: inputStyles.trailingIcon.paddingStart };
    }
  } else {
    const obj3 = {};
    const merged = Object.assign(tmp4);
    obj3.ref = ref;
    obj3.size = str;
    obj3.variant = "tertiary";
    obj3.icon = icon;
    obj3.iconPosition = str2;
    const items = [,];
    ({ padding: arr[0], radius: arr[1] } = inputStyles);
    obj3.pillStyle = items;
    if (accessibilityLabel == null) {
      str = undefined;
      if (text != null) {
        str = text.toString();
      }
      accessibilityLabel = str;
    }
    obj3.accessibilityLabel = accessibilityLabel;
    if (accessibilityValue == null) {
      const obj4 = { text: value };
      accessibilityValue = obj4;
    }
    obj3.accessibilityValue = accessibilityValue;
    const items1 = [inputStyles.text, tmp9.buttonText, ,];
    const obj5 = { style: null, numberOfLines: 1, maxFontSizeMultiplier: null, children: null };
    items1[2] = null != value ? tmp9.buttonTextValue : tmp9.buttonTextPlaceholder;
    items1[3] = {};
    obj5.style = items1;
    obj5.maxFontSizeMultiplier = maxFontSizeMultiplier;
    if (value == null) {
      value = text;
    }
    obj5.children = value;
    obj3.textElement = (
      <Text style={null} numberOfLines={1} maxFontSizeMultiplier={null}>
        {null}
      </Text>
    );
    return jsx(BaseTextButton.BaseTextButton, {});
  }
  const tmp = undefined !== isRound && isRound;
});
