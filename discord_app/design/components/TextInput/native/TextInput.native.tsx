// === Module 7673: TextInput ===

// Module 7673 (TextInput)
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4176 */;
import TextField from "TextField" /* 6190 */;
import Input from "Input" /* 7674 */;
import closure_3 from "_objectWithoutProperties" /* 109 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_2 = ["labelId"];
const forwardRefResult = importAllResult.forwardRef((status, ref) => {
  status = status.status;
  let obj = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj.useFieldLabelA11yNative(status);
  if (status == null) {
    let str;
    if (null != status.errorMessage) {
      str = "error";
    }
    status = str;
  }
  obj = {};
  const merged = Object.assign(status);
  obj.labelId = fieldLabelA11yNative.labelId;
  obj = { ref };
  const merged1 = Object.assign(status);
  obj.status = status;
  const merged2 = Object.assign(callback(fieldLabelA11yNative, closure_2));
  obj.children = jsx(TextField.TextField, { ref });
  return jsx(Input.Input, { ref });
});
const result = require("set").fileFinishedImporting("design/components/TextInput/native/TextInput.native.tsx");

export const TextInput = forwardRefResult;