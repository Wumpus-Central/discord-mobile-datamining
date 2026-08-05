// discord_app/design/components/SplitTextInput/native/SplitTextInput.native.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { Input } from "../../Input/native/Input.native.tsx";
import { SplitTextField } from "SplitTextField.native.tsx";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(SplitTextField.SplitTextField, { ref });
  return jsx(Input.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = forwardRefResult;