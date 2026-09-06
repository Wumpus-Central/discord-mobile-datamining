// === Module 14170: GhostInput ===

// Module 14170 (GhostInput)
import nativeDefault from "native" /* 576 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4278 */;
import Text_Text from "Text/Text" /* 4556 */;
import Input from "Input" /* 6607 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6608 */;
import useTextField from "useTextField" /* 6614 */;
import InputFieldContainer from "InputFieldContainer" /* 6621 */;
import NativeTextInput from "NativeTextInput" /* 6624 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["labelId", "accessibilityLabel"];
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_6 = createStyles.createStyles(() => {
  let str = arg0;
  if (arg0 === undefined) {
    str = "lg";
  }
  let str2 = arg1;
  if (arg1 === undefined) {
    str2 = "default";
  }
  const input = {};
  const merged = Object.assign({ md: Text_Text.TextStyleSheet["text-md/semibold"], lg: Text_Text.TextStyleSheet["text-lg/semibold"] }[str]);
  if ("error" === str2) {
    let TEXT_DEFAULT = nativeDefault.colors.TEXT_FEEDBACK_CRITICAL;
  } else {
    TEXT_DEFAULT = nativeDefault.colors.TEXT_DEFAULT;
  }
  input.color = TEXT_DEFAULT;
  input.minWidth = 48;
  return { input, centeredContainerStyle: { alignItems: "center" } };
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextInput/native/GhostInput.native.tsx");

export const GhostInput = function GhostInput(size) {
  let obj = { size: size.size };
  const inputStyles = obj.useInputStyles(obj);
  const tmp4 = closure_6(size.size, size.status);
  const isCentered = size.isCentered;
  const autoFocus = size.autoFocus;
  let tmpResult = useFieldLabelA11yNative;
  const fieldLabelA11yNative = tmpResult.useFieldLabelA11yNative(size);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  tmpResult = useTextField;
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
  const obj1 = {};
  const merged1 = Object.assign(textField.inputProps);
  const merged2 = Object.assign(_objectWithoutProperties(fieldLabelA11yNative, closure_3));
  tmp5 = undefined === isCentered || isCentered;
  const tmp6 = undefined === autoFocus || autoFocus;
  const tmp8 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
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
  obj.children = jsx(NativeTextInput.NativeTextInput, {});
  return jsx(Input.Input, {});
};