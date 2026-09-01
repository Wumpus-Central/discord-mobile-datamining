// discord_app/design/components/TextInput/native/TextArea.native.tsx
import useFieldLabelA11yNative from "../../../../../discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx";
import Input from "../../Input/native/Input.native.tsx";
import TextAreaField from "../../TextField/native/TextAreaField.native.tsx";
import closure_3 from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

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
  obj.children = jsx(TextAreaField.TextAreaField, { ref });
  return jsx(Input.Input, { ref });
});
const result = require("set").fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;
