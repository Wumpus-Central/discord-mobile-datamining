// === Module 6461: SplitTextInput ===

// Module 6461 (SplitTextInput)
import c from "c" /* 576 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4601 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6106 */;
import Input from "Input" /* 6430 */;
import SplitTextField from "SplitTextField" /* 6462 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["labelId", "accessibilityLabel"];
let closure_3 = ["labelId", "accessibilityLabel"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((required, ref) => {
  const cResult = c.c(16);
  required = required.required;
  const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(required);
  if (cResult[0] !== fieldLabelA11yNative) {
    ({ labelId, accessibilityLabel } = fieldLabelA11yNative);
    const tmp10 = _objectWithoutProperties(fieldLabelA11yNative, closure_2);
    cResult[0] = fieldLabelA11yNative;
    cResult[1] = accessibilityLabel;
    cResult[2] = tmp10;
    cResult[3] = labelId;
    let tmp7 = labelId;
    let tmp6 = tmp10;
    let tmp5 = accessibilityLabel;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  if (cResult[4] === tmp5) {
    if (cResult[5] === required) {
      let tmp11 = cResult[6];
    }
    if (cResult[7] === tmp6) {
      if (cResult[8] === required) {
        if (cResult[9] === ref) {
          if (cResult[10] === tmp11) {
            let tmp14 = cResult[11];
          }
          if (cResult[12] === tmp7) {
            if (cResult[13] === required) {
              if (cResult[14] === tmp14) {
                let tmp23 = cResult[15];
              }
              return tmp23;
            }
          }
          const obj3 = {};
          const merged = Object.assign(required);
          obj3.labelId = tmp7;
          obj3.children = tmp14;
          const tmp28 = jsx(Input.Input, {});
          cResult[12] = tmp7;
          cResult[13] = required;
          cResult[14] = tmp14;
          cResult[15] = tmp28;
          tmp23 = tmp28;
        }
      }
    }
    const obj4 = { ref };
    const merged1 = Object.assign(required);
    const merged2 = Object.assign(tmp6);
    obj4.accessibilityLabel = tmp11;
    const tmp22 = jsx(SplitTextField.SplitTextField, { ref });
    cResult[7] = tmp6;
    cResult[8] = required;
    cResult[9] = ref;
    cResult[10] = tmp11;
    cResult[11] = tmp22;
    tmp14 = tmp22;
  }
  let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(tmp5, required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = tmp5;
  }
  cResult[4] = tmp5;
  cResult[5] = required;
  cResult[6] = requiredFieldA11yName;
  tmp11 = requiredFieldA11yName;
  const tmpResult = getRequiredFieldA11yName;
}) : ((required, ref) => {
  const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(required);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const obj2 = {};
  const merged = Object.assign(required);
  obj2.labelId = fieldLabelA11yNative.labelId;
  const obj3 = { ref };
  const merged1 = Object.assign(required);
  const merged2 = Object.assign(_objectWithoutProperties(fieldLabelA11yNative, closure_3));
  const tmp2 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
  let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, required.required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  obj3.accessibilityLabel = requiredFieldA11yName;
  obj2.children = jsx(SplitTextField.SplitTextField, { ref });
  return jsx(Input.Input, {});
}));