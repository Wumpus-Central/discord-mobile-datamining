// === Module 7751: SplitTextInput ===

// Module 7751 (SplitTextInput)
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4206 */;
import Input from "Input" /* 7718 */;
import SplitTextField from "SplitTextField" /* 7752 */;
import closure_3 from "_objectWithoutProperties" /* 109 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_2 = ["labelId"];
const forwardRefResult = importAllResult.forwardRef((size, ref) => {
  let obj = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj.useFieldLabelA11yNative(size);
  obj = {};
  const merged = Object.assign(size);
  obj.labelId = fieldLabelA11yNative.labelId;
  obj = { ref };
  const merged1 = Object.assign(size);
  const merged2 = Object.assign(callback(fieldLabelA11yNative, closure_2));
  obj.children = jsx(SplitTextField.SplitTextField, { ref });
  return jsx(Input.Input, { ref });
});
const result = require("set").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;