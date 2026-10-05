// discord_app/design/components/TextField/native/TextField.native.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import useTextField from "useTextField.native.tsx";
import useInputClearButton from "../../Input/native/useInputClearButton.native.tsx";
import useInputAttachments from "../../Input/native/useInputAttachments.native.tsx";
import BaseTextField2 from "BaseTextField.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const forwardRef = react.forwardRef;
const forwardRefResult = forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0, arg1) => {
        let innerRef;
        let inputProps;
        let inputStyle;
        let leading;
        let state;
        let tmp6;
        let trailing;
        const obj = react2;
        const cResult = obj.c(8);
        const obj2 = useTextField;
        const textField = obj2.useTextField(arg0, arg1);
        ({ innerRef, inputProps, state } = textField);
        const obj3 = useInputClearButton;
        const inputClearButtonConfig = obj3.useInputClearButtonConfig(arg0, state);
        if (cResult[0] !== inputClearButtonConfig) {
          let tmp8;
          if (null != inputClearButtonConfig) {
            const obj5 = { trailing: null, trailingPressableProps: null };
            ({ content: obj4.trailing, pressableProps: obj4.trailingPressableProps } = inputClearButtonConfig);
            tmp8 = obj5;
          }
          cResult[0] = inputClearButtonConfig;
          cResult[1] = tmp8;
          tmp6 = tmp8;
        } else {
          tmp6 = cResult[1];
        }
        const tmpResult = useInputAttachments;
        const inputAttachments = tmpResult.useInputAttachments(arg0, tmp6);
        ({ leading, trailing, inputStyle } = inputAttachments);
        if (cResult[2] === inputStyle) {
          if (cResult[3] === innerRef) {
            if (cResult[4] === inputProps) {
              if (cResult[5] === leading) {
                let tmp10;
                if (cResult[6] === trailing) {
                  tmp10 = cResult[7];
                }
                return tmp10;
              }
            }
          }
        }
        const BaseTextField = BaseTextField2.BaseTextField;
        const merged = Object.assign(inputProps);
        const tmp12 = <BaseTextField ref={innerRef} leading={leading} trailing={trailing} inputStyle={inputStyle} />;
        cResult[2] = inputStyle;
        cResult[3] = innerRef;
        cResult[4] = inputProps;
        cResult[5] = leading;
        cResult[6] = trailing;
        cResult[7] = tmp12;
        tmp10 = tmp12;
      }
    : (arg0, arg1) => {
        let innerRef;
        let inputProps;
        let inputStyle;
        let leading;
        let state;
        let trailing;
        const obj = useTextField;
        const textField = obj.useTextField(arg0, arg1);
        ({ inputProps, innerRef, state } = textField);
        const obj2 = useInputClearButton;
        const inputClearButtonConfig = obj2.useInputClearButtonConfig(arg0, state);
        let tmp5;
        if (null != inputClearButtonConfig) {
          const obj4 = { trailing: null, trailingPressableProps: null };
          ({ content: obj3.trailing, pressableProps: obj3.trailingPressableProps } = inputClearButtonConfig);
          tmp5 = obj4;
        }
        const tmpResult = useInputAttachments;
        const inputAttachments = tmpResult.useInputAttachments(arg0, tmp5);
        ({ leading, trailing, inputStyle } = inputAttachments);
        const BaseTextField = BaseTextField2.BaseTextField;
        const merged = Object.assign(inputProps);
        return <BaseTextField ref={innerRef} leading={leading} trailing={trailing} inputStyle={inputStyle} />;
      },
);
const result = size.fileFinishedImporting("design/components/TextField/native/TextField.native.tsx");

export const TextField = forwardRefResult;
