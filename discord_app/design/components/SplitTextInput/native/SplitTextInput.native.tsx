// === Module 8603: SplitTextInput ===

// Module 8603 (SplitTextInput)
import Input from "Input" /* 8072 */;
import SplitTextField from "SplitTextField" /* 8604 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  const obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(SplitTextField.SplitTextField, { ref });
  return jsx(Input.Input, { ref });
});
const result = require("obj132").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;