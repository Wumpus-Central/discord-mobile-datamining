// discord_app/design/components/TextInput/native/GhostInput.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../Text/native/Text.tsx";
import useTextFieldState from "../../TextField/native/useTextField.native.tsx";
import useInputStyles from "../../Input/native/InputFieldContainer.native.tsx";
import useKeyboardBlurring from "../../Input/native/NativeTextInput.native.tsx";
import Input from "../../Input/native/Input.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

require = arg1;
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
const result = require("set").fileFinishedImporting("design/components/TextInput/native/GhostInput.native.tsx");

export const GhostInput = function GhostInput(size) {
  let obj = useInputStyles;
  obj = { size: size.size };
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