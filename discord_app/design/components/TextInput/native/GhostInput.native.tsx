// discord_app/design/components/TextInput/native/GhostInput.native.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
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
  const merged = Object.assign({ md: require("../../Text/native/Text.tsx") /* Text */.TextStyleSheet["text-md/semibold"], lg: require("../../Text/native/Text.tsx") /* Text */.TextStyleSheet["text-lg/semibold"] }[str]);
  if ("error" === str2) {
    let TEXT_DEFAULT = require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_DEFAULT = require("../../../../../discord_common/js/packages/tokens/native.tsx").colors.TEXT_DEFAULT;
  }
  input.color = TEXT_DEFAULT;
  input.minWidth = 48;
  return { input, centeredContainerStyle: { alignItems: "center" } };
});
const result = require("createCacheKey").fileFinishedImporting("design/components/TextInput/native/GhostInput.native.tsx");

export const GhostInput = function GhostInput(size) {
  let obj = require("../../Input/native/InputFieldContainer.native.tsx") /* useInputStyles */;
  obj = { size: size.size };
  const inputStyles = obj.useInputStyles(obj);
  const tmp4 = callback(size.size, size.status);
  const isCentered = size.isCentered;
  const autoFocus = size.autoFocus;
  const textField = require("../../TextField/native/useTextField.native.tsx") /* useTextFieldState */.useTextField(size, undefined);
  obj = {};
  const merged = Object.assign(size);
  const items = [size.containerStyle, ];
  let prop;
  if (tmp5) {
    prop = tmp4.centeredContainerStyle;
  }
  items[1] = prop;
  obj.containerStyle = items;
  const obj1 = {};
  const merged1 = Object.assign(textField.inputProps);
  obj1.ref = textField.innerRef;
  const items1 = [tmp4.input];
  obj1.style = items1;
  obj1.placeholderTextColor = inputStyles.placeholderText.color;
  obj1.spellCheck = false;
  obj1.autoFocus = undefined === autoFocus || autoFocus;
  obj.children = jsx(require("../../Input/native/NativeTextInput.native.tsx") /* useKeyboardBlurring */.NativeTextInput, {});
  return jsx(require("../../Input/native/Input.native.tsx") /* Input */.Input, {});
};