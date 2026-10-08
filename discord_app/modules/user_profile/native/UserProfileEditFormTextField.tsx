// === Module 14683: UserProfileEditFormTextField ===

// Module 14683 (UserProfileEditFormTextField)
import c from "c" /* 576 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const TextInput = TextArea(6283);
const TextArea2 = TextArea(6763);
require = fn;
let closure_2 = ["label", "description", "errorMessage", "containerStyle", "numberOfLines", "inputRef"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTextField.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileEditFormTextField(arg0) {
  let TextArea = require;
  let tmp = dependencyMap;
  const cResult = c.c(21);
  if (cResult[0] !== arg0) {
    ({ label, description, errorMessage, containerStyle, numberOfLines, inputRef } = arg0);
    const tmp12 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = containerStyle;
    cResult[2] = description;
    cResult[3] = errorMessage;
    cResult[4] = inputRef;
    cResult[5] = label;
    cResult[6] = tmp12;
    cResult[7] = numberOfLines;
    let tmp9 = numberOfLines;
    let tmp8 = tmp12;
    let tmp7 = label;
    let tmp6 = inputRef;
    let tmp5 = errorMessage;
    let tmp4 = description;
    let tmp3 = containerStyle;
  } else {
    tmp3 = cResult[1];
    tmp4 = cResult[2];
    tmp5 = cResult[3];
    tmp6 = cResult[4];
    tmp7 = cResult[5];
    tmp8 = cResult[6];
    tmp9 = cResult[7];
  }
  let num9 = 1;
  if (undefined !== tmp9) {
    num9 = tmp9;
  }
  let str;
  if (null != tmp5) {
    str = "error";
  }
  if (cResult[8] === tmp3) {
    if (cResult[9] === tmp4) {
      if (cResult[10] === tmp5) {
        if (cResult[11] === tmp7) {
          if (cResult[12] === tmp8) {
            if (cResult[13] === str) {
              let tmp13 = cResult[14];
            }
            if (num9 > 1) {
              if (cResult[15] === tmp13) {
              }
              TextArea = TextArea2.TextArea;
              const obj2 = { ref: tmp6 };
              const merged = Object.assign(tmp13);
              tmp = <TextArea ref={tmp6} />;
              cResult[15] = tmp13;
              cResult[16] = tmp6;
              cResult[17] = tmp;
            } else {
              if (cResult[18] === tmp13) {
                if (cResult[19] === tmp6) {
                  let tmp15 = cResult[20];
                }
                return tmp15;
              }
              const obj3 = { ref: tmp6 };
              const merged1 = Object.assign(tmp13);
              obj3.clearable = true;
              const tmp20 = jsx(TextInput.TextInput, { ref: tmp6 });
              cResult[18] = tmp13;
              cResult[19] = tmp6;
              cResult[20] = tmp20;
              tmp15 = tmp20;
            }
          }
        }
      }
    }
  }
  const obj4 = { label: tmp7, description: tmp4, errorMessage: tmp5, containerStyle: tmp3, status: str };
  const merged2 = Object.assign(tmp8);
  cResult[8] = tmp3;
  cResult[9] = tmp4;
  cResult[10] = tmp5;
  cResult[11] = tmp7;
  cResult[12] = tmp8;
  cResult[13] = str;
  cResult[14] = obj4;
  tmp13 = obj4;
}) : (function UserProfileEditFormTextField(inputRef) {
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
    let tmp9 = jsx(TextArea2.TextArea, { ref: inputRef });
  } else {
    const obj3 = { ref: inputRef };
    const merged3 = Object.assign(obj);
    obj3.clearable = true;
    tmp9 = jsx(TextInput.TextInput, { ref: inputRef });
  }
  return tmp9;
});