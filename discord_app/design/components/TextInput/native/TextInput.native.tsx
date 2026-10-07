// discord_app/design/components/TextInput/native/TextInput.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import useFieldLabelA11yNative from "../../../../../discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx";
import getRequiredFieldA11yName from "../../Input/native/getRequiredFieldA11yName.native.tsx";
import TextField from "../../TextField/native/TextField.native.tsx";
import Input from "../../Input/native/Input.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["labelId", "accessibilityLabel"];
let closure_3 = ["labelId", "accessibilityLabel"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextInput/native/TextInput.native.tsx");

export const TextInput = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, ref) => {
        const cResult = c.c(17);
        ({ status, required, errorMessage } = arg0);
        const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(arg0);
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
        if (status == null) {
          let str;
          if (null != errorMessage) {
            str = "error";
          }
          status = str;
        }
        if (cResult[4] === tmp5) {
          if (cResult[5] === required) {
            let tmp11 = cResult[6];
          }
          if (cResult[7] === status) {
            if (cResult[8] === tmp6) {
              if (cResult[9] === arg0) {
                if (cResult[10] === ref) {
                  if (cResult[11] === tmp11) {
                    let tmp14 = cResult[12];
                  }
                  if (cResult[13] === tmp7) {
                    if (cResult[14] === arg0) {
                      if (cResult[15] === tmp14) {
                        let tmp23 = cResult[16];
                      }
                      return tmp23;
                    }
                  }
                  const obj3 = {};
                  const merged = Object.assign(arg0);
                  obj3.labelId = tmp7;
                  obj3.children = tmp14;
                  const tmp28 = jsx(Input.Input, {});
                  cResult[13] = tmp7;
                  cResult[14] = arg0;
                  cResult[15] = tmp14;
                  cResult[16] = tmp28;
                  tmp23 = tmp28;
                }
              }
            }
          }
          const obj4 = { ref };
          const merged1 = Object.assign(arg0);
          obj4.status = status;
          const merged2 = Object.assign(tmp6);
          obj4.accessibilityLabel = tmp11;
          const tmp22 = jsx(TextField.TextField, { ref });
          cResult[7] = status;
          cResult[8] = tmp6;
          cResult[9] = arg0;
          cResult[10] = ref;
          cResult[11] = tmp11;
          cResult[12] = tmp22;
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
      }
    : (status, ref) => {
        status = status.status;
        ({ errorMessage, required } = status);
        const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(status);
        const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
        if (status == null) {
          let str;
          if (null != errorMessage) {
            str = "error";
          }
          status = str;
        }
        const obj2 = {};
        const merged = Object.assign(status);
        obj2.labelId = fieldLabelA11yNative.labelId;
        const obj3 = { ref };
        const merged1 = Object.assign(status);
        obj3.status = status;
        const merged2 = Object.assign(_objectWithoutProperties(fieldLabelA11yNative, closure_3));
        const tmp4 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
        let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, required);
        if (requiredFieldA11yName == null) {
          requiredFieldA11yName = accessibilityLabel;
        }
        obj3.accessibilityLabel = requiredFieldA11yName;
        obj2.children = jsx(TextField.TextField, { ref });
        return jsx(Input.Input, {});
      },
);
