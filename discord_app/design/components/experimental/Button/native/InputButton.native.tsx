// === Module 8814: InputButton ===

// Module 8814 (InputButton)
import ThemesDefault from "Themes" /* 712 */;
import CollapsingText from "CollapsingText" /* 4816 */;
import MINIMUM_HIT_AREA from "MINIMUM_HIT_AREA" /* 4819 */;
import useInputStyles from "useInputStyles" /* 6109 */;
import closure_3 from "_objectWithoutProperties" /* 109 */;
import { Text } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_2 = ["size", "isRound", "text", "value", "icon", "iconPosition", "accessibilityLabel", "accessibilityValue", "maxFontSizeMultiplier"];
let obj = { buttonText: { flexGrow: 1, flexShrink: 1, width: "100%" }, buttonTextPlaceholder: null, buttonTextValue: null };
obj = { color: ThemesDefault.colors.INPUT_PLACEHOLDER_TEXT_DEFAULT };
obj[1] = obj;
createCacheKey = { color: ThemesDefault.colors.REDESIGN_BUTTON_TERTIARY_TEXT };
obj[2] = createCacheKey;
let closure_6 = createCacheKey.createStyles(obj);
const forwardRefResult = importAllResult.forwardRef((size, ref) => {
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
    maxFontSizeMultiplier = MINIMUM_HIT_AREA.BUTTON_DEFAULT_MAX_FONT_SIZE_MULTIPLIER;
  }
  const tmp4 = callback(size, closure_2);
  let obj = useInputStyles;
  const inputStyles = obj.useInputStyles({ size: str, isRound: undefined !== isRound && isRound, hasLeadingIcon: tmp7 });
  const tmp9 = callback2();
  if (null != icon) {
    if (tmp7) {
      obj = { paddingStart: null };
      obj[0] = inputStyles.leadingIcon.paddingEnd;
    } else {
      obj = { paddingEnd: null };
      obj[0] = inputStyles.trailingIcon.paddingStart;
    }
  } else {
    const obj2 = {};
    const merged = Object.assign(tmp4);
    obj2.ref = ref;
    obj2.size = str;
    obj2.variant = "tertiary";
    obj2.icon = icon;
    obj2.iconPosition = str2;
    const items = [, ];
    ({ padding: arr[0], radius: arr[1] } = inputStyles);
    obj2.pillStyle = items;
    if (accessibilityLabel == null) {
      str = undefined;
      if (text != null) {
        str = text.toString();
      }
      accessibilityLabel = str;
    }
    obj2.accessibilityLabel = accessibilityLabel;
    if (accessibilityValue == null) {
      const obj3 = { text: null };
      obj3[0] = value;
      accessibilityValue = obj3;
    }
    obj2.accessibilityValue = accessibilityValue;
    const items1 = [inputStyles.text, tmp9.buttonText, , ];
    const obj4 = { style: null, numberOfLines: 1, maxFontSizeMultiplier: null, children: null };
    items1[2] = null != value ? tmp9.buttonTextValue : tmp9.buttonTextPlaceholder;
    items1[3] = {};
    obj4[0] = items1;
    obj4[2] = maxFontSizeMultiplier;
    if (value == null) {
      value = text;
    }
    obj4[3] = value;
    obj2.textElement = <Text style={null} numberOfLines={1} maxFontSizeMultiplier={null}>{null}</Text>;
    return jsx(CollapsingText.BaseTextButton, {});
  }
});
const result = require("set").fileFinishedImporting("design/components/experimental/Button/native/InputButton.native.tsx");

export const InputButton = forwardRefResult;