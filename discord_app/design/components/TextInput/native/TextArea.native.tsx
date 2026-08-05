// discord_app/design/components/TextInput/native/TextArea.native.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { Input } from "../../Input/native/Input.native.tsx";
import { TextAreaField } from "../../TextField/native/TextAreaField.native.tsx";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  let obj = {};
  const merged = Object.assign(arg0);
  obj = { ref };
  const merged1 = Object.assign(arg0);
  obj.children = jsx(TextAreaField /* TextAreaField */.TextAreaField, { ref });
  return jsx(Input /* Input */.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;