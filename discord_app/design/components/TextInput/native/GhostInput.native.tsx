// === Module 14268: GhostInput ===

// Module 14268 (GhostInput)
import nativeDefault from "native" /* 576 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4359 */;
import Text_Text from "Text/Text" /* 4635 */;
import Input from "Input" /* 6712 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6713 */;
import useTextField from "useTextField" /* 6719 */;
import InputFieldContainer from "InputFieldContainer" /* 6726 */;
import NativeTextInput from "NativeTextInput" /* 6729 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["labelId", "accessibilityLabel"];
const jsx = fn(21).jsx;
const createStyles = fn(4639);
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
  const inputStyles = InputFieldContainer.useInputStyles({ size: size.size });
  const tmp4 = closure_6(size.size, size.status);
  const isCentered = size.isCentered;
  const autoFocus = size.autoFocus;
  const obj2 = { size: size.size };
  const tmp5 = undefined === isCentered || isCentered;
  const tmp6 = undefined === autoFocus || autoFocus;
  const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(size);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const tmpResult = useFieldLabelA11yNative;
  const tmp8 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
  const textField = useTextField.useTextField(size, undefined);
  const obj3 = {};
  const merged = Object.assign(size);
  obj3.labelId = fieldLabelA11yNative.labelId;
  const items = [size.containerStyle, ];
  let prop;
  if (tmp5) {
    prop = tmp4.centeredContainerStyle;
  }
  items[1] = prop;
  obj3.containerStyle = items;
  const obj4 = {};
  const merged1 = Object.assign(textField.inputProps);
  const merged2 = Object.assign(tmp8);
  const tmpResult3 = useTextField;
  let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, size.required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  obj4.accessibilityLabel = requiredFieldA11yName;
  obj4.ref = textField.innerRef;
  const items1 = [tmp4.input];
  obj4.style = items1;
  obj4.placeholderTextColor = inputStyles.placeholderText.color;
  obj4.spellCheck = false;
  obj4.autoFocus = tmp6;
  obj3.children = jsx(NativeTextInput.NativeTextInput, {});
  return jsx(Input.Input, {});
};