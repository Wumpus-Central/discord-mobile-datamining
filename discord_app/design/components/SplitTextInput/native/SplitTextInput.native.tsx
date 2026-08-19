// discord_app/design/components/SplitTextInput/native/SplitTextInput.native.tsx
import Input from "../../Input/native/Input.native.tsx";
import SplitTextField from "SplitTextField.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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