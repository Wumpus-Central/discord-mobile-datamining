// === Module 14735: UserProfileEditFormTextField ===

// Module 14735 (UserProfileEditFormTextField)
import TextInput from "TextInput" /* 6717 */;
import TextArea from "TextArea" /* 7199 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTextField.tsx");

export default function UserProfileEditFormTextField(inputRef) {
  ({ errorMessage, numberOfLines } = inputRef);
  ({ label, description, containerStyle } = inputRef);
  if (numberOfLines === undefined) {
    numberOfLines = 1;
  }
  inputRef = inputRef.inputRef;
  const merged = Object.assign(inputRef, Object.assign({ label: 0, description: 0, errorMessage: 0, containerStyle: 0, numberOfLines: 0, inputRef: 0 }));
  const obj = { label, description, errorMessage, containerStyle, status: null };
  let str;
  if (null != errorMessage) {
    str = "error";
  }
  obj.status = str;
  const merged1 = Object.assign(merged);
  if (numberOfLines > 1) {
    const obj2 = { ref: inputRef };
    const merged2 = Object.assign(obj);
    let tmp9 = jsx(TextArea.TextArea, { ref: inputRef });
  } else {
    const obj3 = { ref: inputRef };
    const merged3 = Object.assign(obj);
    obj3.clearable = true;
    tmp9 = jsx(TextInput.TextInput, { ref: inputRef });
  }
  return tmp9;
};