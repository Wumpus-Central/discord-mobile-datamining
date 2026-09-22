// === Module 7211: SplitTextInput ===

// Module 7211 (SplitTextInput)
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4476 */;
import Input from "Input" /* 6851 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6852 */;
import SplitTextField from "SplitTextField" /* 7212 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["labelId", "accessibilityLabel"];
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = noop.forwardRef((required, ref) => {
  const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(required);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const obj2 = {};
  const merged = Object.assign(required);
  obj2.labelId = fieldLabelA11yNative.labelId;
  const obj3 = { ref };
  const merged1 = Object.assign(required);
  const merged2 = Object.assign(_objectWithoutProperties(fieldLabelA11yNative, closure_2));
  const tmp2 = _objectWithoutProperties(fieldLabelA11yNative, closure_2);
  let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, required.required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  obj3.accessibilityLabel = requiredFieldA11yName;
  obj2.children = jsx(SplitTextField.SplitTextField, { ref });
  return jsx(Input.Input, {});
});