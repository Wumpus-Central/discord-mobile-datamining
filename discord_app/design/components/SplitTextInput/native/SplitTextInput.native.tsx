// === Module 6646: SplitTextInput ===

// Module 6646 (SplitTextInput)
import c from "c" /* 576 */;
import useFieldLabelA11yNative from "useFieldLabelA11yNative" /* 4794 */;
import Input2 from "Input" /* 6291 */;
import getRequiredFieldA11yName from "getRequiredFieldA11yName" /* 6292 */;
import SplitTextField2 from "SplitTextField" /* 6647 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_2 = ["ref"];
let closure_3 = ["labelId", "accessibilityLabel"];
let closure_4 = ["labelId", "accessibilityLabel"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextInput.native.tsx");

export const SplitTextInput = ReactCompilerGating.isReactCompilerEnabled() ? (function SplitTextInput(ref) {
  const cResult = c.c(11);
  const tmp2 = _objectWithoutProperties(ref.ref, closure_2);
  const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(tmp2);
  ({ labelId, accessibilityLabel } = fieldLabelA11yNative);
  const tmp4 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
  const Input = Input2.Input;
  const SplitTextField = SplitTextField2.SplitTextField;
  let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, tmp2.required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  if (cResult[0] === SplitTextField) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === tmp2) {
        if (cResult[3] === ref) {
          if (cResult[4] === requiredFieldA11yName) {
            let tmp6 = cResult[5];
          }
          if (cResult[6] === Input) {
            if (cResult[7] === labelId) {
              if (cResult[8] === tmp2) {
                if (cResult[9] === tmp6) {
                  let tmp10 = cResult[10];
                }
                return tmp10;
              }
            }
          }
          const obj4 = {};
          const merged = Object.assign(tmp2);
          obj4.labelId = labelId;
          obj4.children = tmp6;
          const tmp15 = <Input />;
          cResult[6] = Input;
          cResult[7] = labelId;
          cResult[8] = tmp2;
          cResult[9] = tmp6;
          cResult[10] = tmp15;
          tmp10 = tmp15;
        }
      }
    }
  }
  const obj5 = { ref: ref.ref };
  const merged1 = Object.assign(tmp2);
  const merged2 = Object.assign(tmp4);
  obj5.accessibilityLabel = requiredFieldA11yName;
  const tmp9 = <SplitTextField ref={ref.ref} />;
  cResult[0] = SplitTextField;
  cResult[1] = tmp4;
  cResult[2] = tmp2;
  cResult[3] = ref.ref;
  cResult[4] = requiredFieldA11yName;
  cResult[5] = tmp9;
  tmp6 = tmp9;
}) : (function SplitTextInput(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(merged);
  const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
  const obj2 = {};
  const merged1 = Object.assign(merged);
  obj2.labelId = fieldLabelA11yNative.labelId;
  const obj3 = { ref: ref.ref };
  const merged2 = Object.assign(merged);
  const merged3 = Object.assign(_objectWithoutProperties(fieldLabelA11yNative, closure_4));
  const tmp3 = _objectWithoutProperties(fieldLabelA11yNative, closure_4);
  let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, merged.required);
  if (requiredFieldA11yName == null) {
    requiredFieldA11yName = accessibilityLabel;
  }
  obj3.accessibilityLabel = requiredFieldA11yName;
  obj2.children = jsx(SplitTextField2.SplitTextField, { ref: ref.ref });
  return jsx(Input2.Input, {});
});