// === Module 14267: UserProfileEditFormTextField ===

// Module 14267 (UserProfileEditFormTextField)
import noopAll from "noop" /* 19 */;
import TextInput from "TextInput" /* 7705 */;
import TextArea from "TextArea" /* 7808 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTextField.tsx");

export default function UserProfileEditFormTextField(inputRef) {
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
    let tmp9 = jsx(TextArea.TextArea, { ref: null });
  } else {
    obj = { ref: null };
    obj[0] = inputRef;
    const merged3 = Object.assign(obj);
    obj.isClearable = true;
    tmp9 = jsx(TextInput.TextInput, { ref: null });
  }
  return tmp9;
};