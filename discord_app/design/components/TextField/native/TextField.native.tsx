// discord_app/design/components/TextField/native/TextField.native.tsx
import c from "../../../../../_runtime/00576_c.js";
import useTextField from "useTextField.native.tsx";
import useInputClearButton from "../../Input/native/useInputClearButton.native.tsx";
import useInputAttachments from "../../Input/native/useInputAttachments.native.tsx";
import BaseTextField from "BaseTextField.native.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["ref"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = ReactCompilerGating.isReactCompilerEnabled()
  ? function TextField(ref) {
      const cResult = c.c(11);
      if (cResult[0] !== ref) {
        const tmp8 = _objectWithoutProperties(ref.ref, closure_2);
        cResult[0] = ref.ref;
        cResult[1] = tmp8;
        cResult[2] = ref.ref;
        let tmp5 = ref;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      const textField = useTextField.useTextField(tmp4, tmp5);
      ({ innerRef, inputProps, state } = textField);
      const tmpResult = useTextField;
      const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(tmp4, state);
      if (cResult[3] !== inputClearButtonConfig) {
        let tmp13;
        if (null != inputClearButtonConfig) {
          ({ content: obj4.trailing, pressableProps: obj4.trailingPressableProps } = inputClearButtonConfig);
          tmp13 = { trailing: null, trailingPressableProps: null };
          const obj2 = { trailing: null, trailingPressableProps: null };
        }
        cResult[3] = inputClearButtonConfig;
        cResult[4] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[4];
      }
      const tmpResult3 = useInputClearButton;
      const inputAttachments = useInputAttachments.useInputAttachments(tmp4, tmp11);
      ({ leading, trailing, inputStyle } = inputAttachments);
      if (cResult[5] === inputStyle) {
        if (cResult[6] === innerRef) {
          if (cResult[7] === inputProps) {
            if (cResult[8] === leading) {
              if (cResult[9] === trailing) {
                let tmp15 = cResult[10];
              }
              return tmp15;
            }
          }
        }
      }
      const obj3 = {};
      const merged = Object.assign(inputProps);
      obj3.ref = innerRef;
      obj3.leading = leading;
      obj3.trailing = trailing;
      obj3.inputStyle = inputStyle;
      const tmp17 = jsx(BaseTextField.BaseTextField, {});
      cResult[5] = inputStyle;
      cResult[6] = innerRef;
      cResult[7] = inputProps;
      cResult[8] = leading;
      cResult[9] = trailing;
      cResult[10] = tmp17;
      tmp15 = tmp17;
      const tmpResult4 = useInputAttachments;
    }
  : function TextField(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const textField = useTextField.useTextField(merged, ref.ref);
      ({ inputProps, innerRef, state } = textField);
      const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(merged, state);
      let tmp6;
      if (null != inputClearButtonConfig) {
        ({ content: obj3.trailing, pressableProps: obj3.trailingPressableProps } = inputClearButtonConfig);
        tmp6 = { trailing: null, trailingPressableProps: null };
        const obj4 = { trailing: null, trailingPressableProps: null };
      }
      const inputAttachments = useInputAttachments.useInputAttachments(merged, tmp6);
      ({ leading, trailing, inputStyle } = inputAttachments);
      const obj5 = {};
      const merged1 = Object.assign(inputProps);
      obj5.ref = innerRef;
      obj5.leading = leading;
      obj5.trailing = trailing;
      obj5.inputStyle = inputStyle;
      return jsx(BaseTextField.BaseTextField, {});
    };
