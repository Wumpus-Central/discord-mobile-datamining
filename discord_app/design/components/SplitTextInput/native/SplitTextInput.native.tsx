// discord_app/design/components/SplitTextInput/native/SplitTextInput.native.tsx
import Input from "../../Input/native/Input.native.tsx";
import SplitTextField from "SplitTextField.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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