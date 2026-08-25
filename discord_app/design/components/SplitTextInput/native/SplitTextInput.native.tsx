// === Module 8648: SplitTextInput ===

// Module 8648 (SplitTextInput)
import Input from "Input" /* 7936 */;
import SplitTextField from "SplitTextField" /* 8649 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(SplitTextField.SplitTextField, { ref });
  return jsx(Input.Input, { ref });
});
const result = require("set").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;