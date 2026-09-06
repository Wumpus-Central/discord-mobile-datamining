// === Module 7085: TextArea ===

// Module 7085 (TextArea)
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4278 */;
import Input from "Input" /* 6607 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6608 */;
import TextAreaField from "TextAreaField" /* 7086 */;
import closure_3 from "_objectWithoutProperties" /* 109 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_2 = ["labelId", "accessibilityLabel"];
const forwardRefResult = importAllResult.forwardRef((required, ref) => {
  let obj = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj.useFieldLabelA11yNative(required);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  obj = {};
  const merged = Object.assign(required);
  obj.labelId = fieldLabelA11yNative.labelId;
  obj = { ref };
  const merged1 = Object.assign(required);
  const merged2 = Object.assign(callback(fieldLabelA11yNative, closure_2));
  const tmp2 = callback(fieldLabelA11yNative, closure_2);
  let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, required.required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  obj.accessibilityLabel = requiredFieldA11yName;
  obj.children = jsx(TextAreaField.TextAreaField, { ref });
  return jsx(Input.Input, { ref });
});
const result = require("set").fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;