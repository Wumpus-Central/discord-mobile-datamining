// discord_app/design/components/TextInput/native/TextArea.native.tsx
import useFieldLabelA11yNative from "../../../../../discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx";
import Input from "../../Input/native/Input.native.tsx";
import getRequiredFieldA11yName from "../../Input/native/getRequiredFieldA11yName.native.tsx";
import TextAreaField from "../../TextField/native/TextAreaField.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["labelId", "accessibilityLabel"];
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = noop.forwardRef((required, ref) => {
  let obj = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj.useFieldLabelA11yNative(required);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  obj = {};
  const merged = Object.assign(required);
  obj.labelId = fieldLabelA11yNative.labelId;
  obj = { ref };
  const merged1 = Object.assign(required);
  const merged2 = Object.assign(_objectWithoutProperties(fieldLabelA11yNative, closure_2));
  const tmp2 = _objectWithoutProperties(fieldLabelA11yNative, closure_2);
  let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, required.required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  obj.accessibilityLabel = requiredFieldA11yName;
  obj.children = jsx(TextAreaField.TextAreaField, { ref });
  return jsx(Input.Input, { ref });
});
