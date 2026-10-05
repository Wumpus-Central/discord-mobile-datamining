// discord_app/design/components/TextInput/native/TextArea.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import useFieldLabelA11yNative from "../../../../../discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx";
import getRequiredFieldA11yName from "../../Input/native/getRequiredFieldA11yName.native.tsx";
import Input2 from "../../Input/native/Input.native.tsx";
import TextAreaField2 from "../../TextField/native/TextAreaField.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let required;

let closure_2 = ["labelId", "accessibilityLabel"];
let closure_3 = ["labelId", "accessibilityLabel"];
const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (required, ref) => {
        let accessibilityLabel;
        let labelId;
        let tmp5;
        let tmp6;
        let tmp7;
        const obj = react2;
        const cResult = obj.c(16);
        required = required.required;
        const obj2 = useFieldLabelA11yNative;
        const fieldLabelA11yNative = obj2.useFieldLabelA11yNative(required);
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
        if (cResult[4] === tmp5) {
          let tmp11;
          if (cResult[5] === required) {
            tmp11 = cResult[6];
          }
          if (cResult[7] === tmp6) {
            if (cResult[8] === required) {
              if (cResult[9] === ref) {
                let tmp14;
                if (cResult[10] === tmp11) {
                  tmp14 = cResult[11];
                }
                if (cResult[12] === tmp7) {
                  if (cResult[13] === required) {
                    let tmp23;
                    if (cResult[14] === tmp14) {
                      tmp23 = cResult[15];
                    }
                    return tmp23;
                  }
                }
                const Input = Input2.Input;
                const merged = Object.assign(required);
                const tmp28 = <Input labelId={tmp7}>{tmp14}</Input>;
                cResult[12] = tmp7;
                cResult[13] = required;
                cResult[14] = tmp14;
                cResult[15] = tmp28;
                tmp23 = tmp28;
              }
            }
          }
          const TextAreaField = TextAreaField2.TextAreaField;
          const merged1 = Object.assign(required);
          const merged2 = Object.assign(tmp6);
          const tmp22 = <TextAreaField ref={ref} accessibilityLabel={tmp11} />;
          cResult[7] = tmp6;
          cResult[8] = required;
          cResult[9] = ref;
          cResult[10] = tmp11;
          cResult[11] = tmp22;
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
      }
    : (required, ref) => {
        required = required.required;
        const obj = useFieldLabelA11yNative;
        const fieldLabelA11yNative = obj.useFieldLabelA11yNative(required);
        const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
        const labelId = fieldLabelA11yNative.labelId;
        const tmp2 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
        const Input = Input2.Input;
        const merged = Object.assign(required);
        const TextAreaField = TextAreaField2.TextAreaField;
        const merged1 = Object.assign(required);
        const merged2 = Object.assign(tmp2);
        const obj4 = getRequiredFieldA11yName;
        let requiredFieldA11yName = obj4.getRequiredFieldA11yName(accessibilityLabel, required);
        if (requiredFieldA11yName == null) {
          requiredFieldA11yName = accessibilityLabel;
        }
        return (
          <Input labelId={labelId}>
            <TextAreaField ref={ref} accessibilityLabel={requiredFieldA11yName} />
          </Input>
        );
      },
);
const result = size.fileFinishedImporting("design/components/TextInput/native/TextArea.native.tsx");

export const TextArea = forwardRefResult;
