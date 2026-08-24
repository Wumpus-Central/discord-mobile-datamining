// discord_app/design/components/TextInput/native/TextArea.native.tsx
import Input from "../../Input/native/Input.native.tsx";
import TextAreaField from "../../TextField/native/TextAreaField.native.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(TextAreaField.TextAreaField, { ref });
  return jsx(Input.Input, { ref });
});
const result = require("set").fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;