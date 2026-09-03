// === Module 14052: GhostInput ===

// Module 14052 (GhostInput)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import Text from "Text" /* 4474 */;
import useInputStyles from "useInputStyles" /* 6239 */;
import useKeyboardBlurring from "useKeyboardBlurring" /* 6242 */;
import Input from "Input" /* 7718 */;
import closure_4 from "_objectWithoutProperties" /* 109 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
let closure_3 = ["labelId"];
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
  let tmpResult = tmp(4206);
  const fieldLabelA11yNative = tmpResult.useFieldLabelA11yNative(size);
  tmpResult = tmp(6233);
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
  obj1.ref = textField.innerRef;
  const items1 = [tmp4.input];
  obj1.style = items1;
  obj1.placeholderTextColor = inputStyles.placeholderText.color;
  obj1.spellCheck = false;
  obj1.autoFocus = undefined === autoFocus || autoFocus;
  obj.children = jsx(useKeyboardBlurring.NativeTextInput, {});
  return jsx(Input.Input, {});
};