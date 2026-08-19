// === Module 13534: GhostInput ===

// Module 13534 (GhostInput)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import useTextFieldState from "useTextFieldState" /* 7339 */;
import useInputStyles from "useInputStyles" /* 7345 */;
import useKeyboardBlurring from "useKeyboardBlurring" /* 7348 */;
import Input from "Input" /* 8072 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_4 = createCacheKey.createStyles(() => {
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
const result = require("obj132").fileFinishedImporting("design/components/TextInput/native/GhostInput.native.tsx");

export const GhostInput = function GhostInput(size) {
  let obj = { size: size.size };
  const inputStyles = obj.useInputStyles(obj);
  const tmp4 = callback(size.size, size.status);
  const isCentered = size.isCentered;
  const autoFocus = size.autoFocus;
  const textField = useTextFieldState.useTextField(size, undefined);
  obj = {};
  const merged = Object.assign(size);
  const items = [size.containerStyle, ];
  let prop;
  if (tmp5) {
    prop = tmp4.centeredContainerStyle;
  }
  items[1] = prop;
  obj.containerStyle = items;
  obj1 = {};
  const merged1 = Object.assign(textField.inputProps);
  obj1.ref = textField.innerRef;
  const items1 = [tmp4.input];
  obj1.style = items1;
  obj1.placeholderTextColor = inputStyles.placeholderText.color;
  obj1.spellCheck = false;
  obj1.autoFocus = undefined === autoFocus || autoFocus;
  obj.children = jsx(useKeyboardBlurring.NativeTextInput, {});
  return jsx(Input.Input, {});
};