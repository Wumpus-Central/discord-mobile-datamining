// discord_app/design/components/TextInput/native/TextInput.native.tsx
import importAllResult from "noop";
import { jsx } from "jsxProd";
import { Input } from "../../Input/native/Input.native.tsx";
import { TextField } from "../../TextField/native/TextField.native.tsx";

const require = arg1;
const forwardRefResult = importAllResult.forwardRef((errorMessage, ref) => {
  let accessibilityLabel;
  let label;
  let status;
  ({ label, accessibilityLabel, status } = errorMessage);
  const id = importAllResult.useId();
  if (status == null) {
    let str;
    if (null != errorMessage.errorMessage) {
      str = "error";
    }
    status = str;
  }
  let obj = {};
  const merged = Object.assign(errorMessage);
  let tmp6;
  if (null != label) {
    tmp6 = id;
  }
  obj.labelId = tmp6;
  obj = { ref };
  const merged1 = Object.assign(errorMessage);
  obj.status = status;
  if (!tmp3Result.isAndroid()) {
    if (accessibilityLabel == null) {
      let tmp9;
      if (typeof label === "string") {
        tmp9 = label;
      }
      accessibilityLabel = tmp9;
    }
    const tmp8 = accessibilityLabel;
  }
  obj.accessibilityLabel = tmp8;
  let tmp10;
  if (null != label) {
    tmp10 = id;
  }
  obj.accessibilityLabelledBy = tmp10;
  obj.children = jsx(TextField.TextField, { ref });
  return jsx(Input.Input, { ref });
});
const result = require("Input").fileFinishedImporting("design/components/TextInput/native/TextInput.native.tsx");

export const TextInput = forwardRefResult;