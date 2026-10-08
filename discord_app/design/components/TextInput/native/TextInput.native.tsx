// discord_app/design/components/TextInput/native/TextInput.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import useFieldLabelA11yNative from "../../../../../discord_common/js/packages/design/hooks/useFieldLabelA11yNative.tsx";
import Input2 from "../../Input/native/Input.native.tsx";
import getRequiredFieldA11yName from "../../Input/native/getRequiredFieldA11yName.native.tsx";
import TextField2 from "../../TextField/native/TextField.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["ref"];
let closure_3 = ["labelId", "accessibilityLabel"];
let closure_4 = ["labelId", "accessibilityLabel"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextInput/native/TextInput.native.tsx");

export const TextInput = ReactCompilerGating.isReactCompilerEnabled()
  ? function TextInput(ref) {
      const cResult = c.c(12);
      const tmp4 = _objectWithoutProperties(ref.ref, closure_2);
      ({ status, errorMessage, required } = tmp4);
      const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(tmp4);
      ({ labelId, accessibilityLabel } = fieldLabelA11yNative);
      const tmp6 = _objectWithoutProperties(fieldLabelA11yNative, closure_3);
      if (status == null) {
        let str;
        if (null != errorMessage) {
          str = "error";
        }
        status = str;
      }
      const Input = Input2.Input;
      const TextField = TextField2.TextField;
      let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, required);
      if (requiredFieldA11yName == null) {
        requiredFieldA11yName = accessibilityLabel;
      }
      if (cResult[0] === TextField) {
        if (cResult[1] === status) {
          if (cResult[2] === tmp6) {
            if (cResult[3] === tmp4) {
              if (cResult[4] === ref) {
                if (cResult[5] === requiredFieldA11yName) {
                  let tmp8 = cResult[6];
                }
                if (cResult[7] === Input) {
                  if (cResult[8] === labelId) {
                    if (cResult[9] === tmp4) {
                      if (cResult[10] === tmp8) {
                        let tmp12 = cResult[11];
                      }
                      return tmp12;
                    }
                  }
                }
                const obj3 = {};
                const merged = Object.assign(tmp4);
                obj3.labelId = labelId;
                obj3.children = tmp8;
                const tmp17 = <Input />;
                cResult[7] = Input;
                cResult[8] = labelId;
                cResult[9] = tmp4;
                cResult[10] = tmp8;
                cResult[11] = tmp17;
                tmp12 = tmp17;
              }
            }
          }
        }
      }
      const obj4 = { ref: ref.ref };
      const merged1 = Object.assign(tmp4);
      obj4.status = status;
      const merged2 = Object.assign(tmp6);
      obj4.accessibilityLabel = requiredFieldA11yName;
      const tmp11 = <TextField ref={ref.ref} />;
      cResult[0] = TextField;
      cResult[1] = status;
      cResult[2] = tmp6;
      cResult[3] = tmp4;
      cResult[4] = ref.ref;
      cResult[5] = requiredFieldA11yName;
      cResult[6] = tmp11;
      tmp8 = tmp11;
      const tmpResult = getRequiredFieldA11yName;
    }
  : function TextInput(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      let status = merged.status;
      ({ errorMessage, required } = merged);
      const fieldLabelA11yNative = useFieldLabelA11yNative.useFieldLabelA11yNative(merged);
      const accessibilityLabel = fieldLabelA11yNative.accessibilityLabel;
      if (status == null) {
        let str;
        if (null != errorMessage) {
          str = "error";
        }
        status = str;
      }
      const obj2 = {};
      const merged1 = Object.assign(merged);
      obj2.labelId = fieldLabelA11yNative.labelId;
      const obj3 = { ref: ref.ref };
      const merged2 = Object.assign(merged);
      obj3.status = status;
      const merged3 = Object.assign(_objectWithoutProperties(fieldLabelA11yNative, closure_4));
      const tmp5 = _objectWithoutProperties(fieldLabelA11yNative, closure_4);
      let requiredFieldA11yName = getRequiredFieldA11yName.getRequiredFieldA11yName(accessibilityLabel, required);
      if (requiredFieldA11yName == null) {
        requiredFieldA11yName = accessibilityLabel;
      }
      obj3.accessibilityLabel = requiredFieldA11yName;
      obj2.children = jsx(TextField2.TextField, { ref: ref.ref });
      return jsx(Input2.Input, {});
    };
