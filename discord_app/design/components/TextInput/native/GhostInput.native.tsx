// === Module 14170: GhostInput ===

// Module 14170 (GhostInput)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 576 */;
import Text from "Text" /* 4556 */;
import Input from "Input" /* 6607 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6608 */;
import useInputStyles from "useInputStyles" /* 6621 */;
import useKeyboardBlurring from "useKeyboardBlurring" /* 6624 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
let closure_3 = ["labelId", "accessibilityLabel"];
noopAll;
let closure_6 = createCacheKey.createStyles(() => {
  let str = arg0;
  if (arg0 === undefined) {
    str = "lg";
  }
  let str2 = arg1;
  if (arg1 === undefined) {
    str2 = "default";
  }
  const input = {};
  const merged = Object.assign({ md: Text.TextStyleSheet["text-md/semibold"], lg: Text.TextStyleSheet["text-lg/semibold"] }[str]);
  if ("error" === str2) {
    let TEXT_DEFAULT = ThemesDefault.colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_DEFAULT = ThemesDefault.colors.TEXT_DEFAULT;
  }
  input.color = TEXT_DEFAULT;
  input.minWidth = 48;
  return { input, centeredContainerStyle: { alignItems: "center" } };
});
const result = require("set").fileFinishedImporting("design/components/TextInput/native/GhostInput.native.tsx");

export const GhostInput = function GhostInput(size) {
  let obj = useInputStyles;
  obj = { size: size.size };
  const inputStyles = obj.useInputStyles(obj);
  const tmp4 = callback2(size.size, size.status);
  const isCentered = size.isCentered;
  const autoFocus = size.autoFocus;
  let tmpResult = tmp(4278);
  const fieldLabelA11yNative = tmpResult.useFieldLabelA11yNative(size);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  tmpResult = tmp(6614);
  const textField = tmpResult.useTextField(size, undefined);
  obj = {};
  const merged = Object.assign(size);
  obj.labelId = fieldLabelA11yNative.labelId;
  const items = [size.containerStyle, ];
  let prop;
  if (tmp5) {
    prop = tmp4.centeredContainerStyle;
  }
  items[1] = prop;
  obj.containerStyle = items;
  obj1 = {};
  const merged1 = Object.assign(textField.inputProps);
  const merged2 = Object.assign(callback(fieldLabelA11yNative, closure_3));
  tmp5 = undefined === isCentered || isCentered;
  const tmp6 = undefined === autoFocus || autoFocus;
  const tmp8 = callback(fieldLabelA11yNative, closure_3);
  let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, size.required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  obj1.accessibilityLabel = requiredFieldA11yName;
  obj1.ref = textField.innerRef;
  const items1 = [tmp4.input];
  obj1.style = items1;
  obj1.placeholderTextColor = inputStyles.placeholderText.color;
  obj1.spellCheck = false;
  obj1.autoFocus = tmp6;
  obj.children = jsx(useKeyboardBlurring.NativeTextInput, {});
  return jsx(Input.Input, {});
};