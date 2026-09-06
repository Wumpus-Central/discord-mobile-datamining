// discord_app/modules/user_profile/native/UserProfileEditFormTextField.tsx
import TextInput from "../../../design/components/TextInput/native/TextInput.native.tsx";
import TextArea from "../../../design/components/TextInput/native/TextArea.native.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
  const merged = Object.assign(
    inputRef,
    Object.assign({ label: 0, description: 0, errorMessage: 0, containerStyle: 0, numberOfLines: 0, inputRef: 0 }),
  );
  let obj = { label, description, errorMessage, containerStyle, status: null };
  let str;
  if (null != errorMessage) {
    str = "error";
  }
  obj.status = str;
  const merged1 = Object.assign(merged);
  if (numberOfLines > 1) {
    obj = { ref: inputRef };
    const merged2 = Object.assign(obj);
    let tmp9 = jsx(TextArea.TextArea, { ref: inputRef });
  } else {
    obj = { ref: inputRef };
    const merged3 = Object.assign(obj);
    obj.isClearable = true;
    tmp9 = jsx(TextInput.TextInput, { ref: inputRef });
  }
  return tmp9;
}
