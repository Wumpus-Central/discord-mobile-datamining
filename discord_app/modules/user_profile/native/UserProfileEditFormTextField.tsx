import { TextArea } from "../../../design/components/TextInput/native/TextArea.native.tsx";
import { TextInput } from "../../../design/components/TextInput/native/TextInput.native.tsx";
// discord_app/modules/user_profile/native/UserProfileEditFormTextField.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("TextArea").fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTextField.tsx");

export default function UserProfileEditFormTextField(inputRef) {
  let containerStyle;
  let description;
  let errorMessage;
  let label;
  let numberOfLines;
  ({ errorMessage, numberOfLines } = inputRef);
  ({ label, description, containerStyle } = inputRef);
  if (numberOfLines === undefined) {
    numberOfLines = 1;
  }
  inputRef = inputRef.inputRef;
  const merged = Object.assign(inputRef, Object.create(null));
  let obj = { label, description, errorMessage, containerStyle, status: null };
  let str;
  if (null != errorMessage) {
    str = "error";
  }
  obj[4] = str;
  const merged1 = Object.assign(merged);
  if (numberOfLines > 1) {
    obj = { ref: null };
    obj[0] = inputRef;
    const merged2 = Object.assign(obj);
    let tmp9 = jsx(TextArea /* TextArea */.TextArea, { ref: null });
  } else {
    obj = { ref: null };
    obj[0] = inputRef;
    const merged3 = Object.assign(obj);
    obj.isClearable = true;
    tmp9 = jsx(TextInput /* TextInput */.TextInput, { ref: null });
  }
  return tmp9;
};