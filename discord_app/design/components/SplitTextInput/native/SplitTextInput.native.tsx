// === Module 7127: SplitTextInput ===

// Module 7127 (SplitTextInput)
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 5078 */;
import Input from "Input" /* 7077 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 7078 */;
import SplitTextField from "SplitTextField" /* 7128 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["labelId", "accessibilityLabel"];
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export function SplitTextInput(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(merged);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.labelId = fieldLabelA11yNative.labelId;
  const obj3 = { ref: ref.ref };
  const merged2 = Object.assign(merged);
  const merged3 = Object.assign(_objectWithoutProperties(fieldLabelA11yNative, closure_2));
  const tmp3 = _objectWithoutProperties(fieldLabelA11yNative, closure_2);
  let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, merged.required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  obj3.accessibilityLabel = requiredFieldA11yName;
  obj2.children = jsx(SplitTextField.SplitTextField, { ref: ref.ref });
  return jsx(Input.Input, {});
}