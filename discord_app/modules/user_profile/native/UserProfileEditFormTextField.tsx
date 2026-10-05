// === Module 14440: UserProfileEditFormTextField ===

// Module 14440 (UserProfileEditFormTextField)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6098 */;
import TextArea2 from "TextArea" /* 6580 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["label", "description", "errorMessage", "containerStyle", "numberOfLines", "inputRef"];
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerStyle;
  let description;
  let errorMessage;
  let inputRef;
  let label;
  let numberOfLines;
  let tmp10;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(21);
  if (cResult[0] !== arg0) {
    ({ label, description, errorMessage, containerStyle, numberOfLines, inputRef } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, closure_2);
    cResult[0] = arg0;
    cResult[1] = containerStyle;
    cResult[2] = description;
    cResult[3] = errorMessage;
    cResult[4] = inputRef;
    cResult[5] = label;
    cResult[6] = tmp13;
    cResult[7] = numberOfLines;
    tmp10 = numberOfLines;
    tmp9 = tmp13;
    tmp8 = label;
    tmp7 = inputRef;
    tmp6 = errorMessage;
    tmp5 = description;
    tmp4 = containerStyle;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  let num9 = 1;
  if (undefined !== tmp10) {
    num9 = tmp10;
  }
  let str;
  if (null != tmp6) {
    str = "error";
  }
  if (cResult[8] === tmp4) {
    if (cResult[9] === tmp5) {
      if (cResult[10] === tmp6) {
        if (cResult[11] === tmp8) {
          if (cResult[12] === tmp9) {
            let tmp14;
            let tmp16;
            if (cResult[13] === str) {
              tmp14 = cResult[14];
            }
            if (num9 > 1) {
              if (cResult[15] === tmp14) {
                let tmp22;
                if (cResult[16] === tmp7) {
                  tmp22 = cResult[17];
                }
                tmp16 = tmp22;
              }
              const TextArea = TextArea2.TextArea;
              const merged = Object.assign(tmp14);
              const tmp27 = <TextArea ref={tmp7} />;
              cResult[15] = tmp14;
              cResult[16] = tmp7;
              cResult[17] = tmp27;
              tmp22 = tmp27;
            } else {
              if (cResult[18] === tmp14) {
                if (cResult[19] === tmp7) {
                  tmp16 = cResult[20];
                }
              }
              const TextInput = TextInput_TextInput.TextInput;
              const merged1 = Object.assign(tmp14);
              const tmp21 = <TextInput ref={tmp7} clearable />;
              cResult[18] = tmp14;
              cResult[19] = tmp7;
              cResult[20] = tmp21;
              tmp16 = tmp21;
            }
            return tmp16;
          }
        }
      }
    }
  }
  const obj4 = { label: tmp8, description: tmp5, errorMessage: tmp6, containerStyle: tmp4, status: str };
  const merged2 = Object.assign(tmp9);
  cResult[8] = tmp4;
  cResult[9] = tmp5;
  cResult[10] = tmp6;
  cResult[11] = tmp8;
  cResult[12] = tmp9;
  cResult[13] = str;
  cResult[14] = obj4;
  tmp14 = obj4;
}) : ((inputRef) => {
  let containerStyle;
  let description;
  let errorMessage;
  let label;
  let numberOfLines;
  let str;
  let tmp9;
  ({ errorMessage, numberOfLines } = inputRef);
  ({ label, description, containerStyle } = inputRef);
  if (numberOfLines === undefined) {
    numberOfLines = 1;
  }
  inputRef = inputRef.inputRef;
  const merged = Object.assign(inputRef, Object.assign({ label: 0, description: 0, errorMessage: 0, containerStyle: 0, numberOfLines: 0, inputRef: 0 }));
  const obj = { label, description, errorMessage, containerStyle, status: str };
  str = undefined;
  if (null != errorMessage) {
    str = "error";
  }
  const merged1 = Object.assign(merged);
  if (numberOfLines > 1) {
    const TextArea = TextArea2.TextArea;
    const merged2 = Object.assign(obj);
    tmp9 = <TextArea ref={inputRef} />;
  } else {
    const TextInput = TextInput_TextInput.TextInput;
    const merged3 = Object.assign(obj);
    tmp9 = <TextInput ref={inputRef} clearable />;
  }
  return tmp9;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTextField.tsx");

export default tmp3;