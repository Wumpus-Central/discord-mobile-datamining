// === Module 6105: TextInput/TextInput ===

// Module 6105 (TextInput/TextInput)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4601 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6106 */;
import TextField2 from "TextField" /* 6107 */;
import Input2 from "Input" /* 6430 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_2 = ["labelId", "accessibilityLabel"];
let closure_3 = ["labelId", "accessibilityLabel"];
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  let accessibilityLabel;
  let errorMessage;
  let labelId;
  let required;
  let status;
  let tmp5;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(17);
  ({ status, required, errorMessage } = arg0);
  const obj2 = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj2.useFieldLabelA11yNative(arg0);
  if (cResult[0] !== fieldLabelA11yNative) {
    ({ labelId, accessibilityLabel } = fieldLabelA11yNative);
    const tmp10 = _objectWithoutProperties(fieldLabelA11yNative, closure_2);
    cResult[0] = fieldLabelA11yNative;
    cResult[1] = accessibilityLabel;
    cResult[2] = tmp10;
    cResult[3] = labelId;
    tmp7 = labelId;
    tmp6 = tmp10;
    tmp5 = accessibilityLabel;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  if (status == null) {
    let str;
    if (null != errorMessage) {
      str = "error";
    }
    status = str;
  }
  if (cResult[4] === tmp5) {
    let tmp11;
    if (cResult[5] === required) {
      tmp11 = cResult[6];
    }
    if (cResult[7] === status) {
      if (cResult[8] === tmp6) {
        if (cResult[9] === arg0) {
          if (cResult[10] === ref) {
            let tmp14;
            if (cResult[11] === tmp11) {
              tmp14 = cResult[12];
            }
            if (cResult[13] === tmp7) {
              if (cResult[14] === arg0) {
                let tmp23;
                if (cResult[15] === tmp14) {
                  tmp23 = cResult[16];
                }
                return tmp23;
              }
            }
            const Input = Input2.Input;
            const merged = Object.assign(arg0);
            const tmp28 = <Input labelId={tmp7}>{tmp14}</Input>;
            cResult[13] = tmp7;
            cResult[14] = arg0;
            cResult[15] = tmp14;
            cResult[16] = tmp28;
            tmp23 = tmp28;
          }
        }
      }
    }
    const TextField = TextField2.TextField;
    const merged1 = Object.assign(arg0);
    const merged2 = Object.assign(tmp6);
    const tmp22 = <TextField ref={ref} status={status} accessibilityLabel={tmp11} />;
    cResult[7] = status;
    cResult[8] = tmp6;
    cResult[9] = arg0;
    cResult[10] = ref;
    cResult[11] = tmp11;
    cResult[12] = tmp22;
    tmp14 = tmp22;
  }
  const tmpResult = getRequiredFieldA11yName;
  let requiredFieldA11yName = tmpResult.getRequiredFieldA11yName(tmp5, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = tmp5;
  }
  cResult[4] = tmp5;
  cResult[5] = required;
  cResult[6] = requiredFieldA11yName;
  tmp11 = requiredFieldA11yName;
}) : ((status, ref) => {
  let errorMessage;
  let required;
  status = status.status;
  ({ errorMessage, required } = status);
  const obj = useFieldLabelA11yNative;
  const fieldLabelA11yNative = obj.useFieldLabelA11yNative(status);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const labelId = fieldLabelA11yNative.labelId;
  const tmp4 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
  if (status == null) {
    let str;
    if (null != errorMessage) {
      str = "error";
    }
    status = str;
  }
  const Input = Input2.Input;
  const merged = Object.assign(status);
  const TextField = TextField2.TextField;
  const merged1 = Object.assign(status);
  const merged2 = Object.assign(tmp4);
  const tmpResult = getRequiredFieldA11yName;
  let requiredFieldA11yName = tmpResult.getRequiredFieldA11yName(accessibilityLabel, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  return <Input labelId={labelId}><TextField ref={ref} status={status} accessibilityLabel={requiredFieldA11yName} /></Input>;
}));
const result = size.fileFinishedImporting("design/components/TextInput/native/TextInput.native.tsx");

export const TextInput = forwardRefResult;