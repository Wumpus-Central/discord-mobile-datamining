// === Module 6714: TextInput ===

// Module 6714 (TextInput)
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4357 */;
import Input from "Input" /* 6715 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6716 */;
import TextField from "TextField" /* 6721 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["labelId", "accessibilityLabel"];
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextInput/native/TextInput.native.tsx");

export const TextInput = noop.forwardRef((status, ref) => {
  status = status.status;
  ({ errorMessage, required } = status);
  const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(status);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  if (status == null) {
    let str;
    if (null != errorMessage) {
      str = "error";
    }
    status = str;
  }
  const obj2 = {};
  const merged = Object.assign(status);
  obj2.labelId = fieldLabelA11yNative.labelId;
  const obj3 = { ref };
  const merged1 = Object.assign(status);
  obj3.status = status;
  const merged2 = Object.assign(_objectWithoutProperties(fieldLabelA11yNative, closure_2));
  const tmp4 = _objectWithoutProperties(fieldLabelA11yNative, closure_2);
  let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  obj3.accessibilityLabel = requiredFieldA11yName;
  obj2.children = jsx(TextField.TextField, { ref });
  return jsx(Input.Input, {});
});