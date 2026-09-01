// discord_app/design/components/SplitTextInput/native/SplitTextField.native.tsx
import useTextFieldState from "../../TextField/native/useTextField.native.tsx";
import useInputClearButton from "../../Input/native/useInputClearButton.native.tsx";
import useInputStyles from "../../Input/native/InputFieldContainer.native.tsx";
import BaseTextField from "../../TextField/native/BaseTextField.native.tsx";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = arg1;
({ Pressable: obj1, View: c3 } = get_ActivityIndicator);
const forwardRefResult = importAllResult.forwardRef((size, ref) => {
  let obj = useInputStyles;
  obj = { size: size.size, isRound: size.isRound };
  const inputStyles = obj.useInputStyles(obj);
  let obj2 = useTextFieldState;
  const textField = obj2.useTextField(size, ref);
  ({ inputProps, innerRef, state } = textField);
  let obj3 = useInputClearButton;
  const inputClearButtonConfig = obj3.useInputClearButtonConfig(size, state);
  let tmp6;
  if (null != inputClearButtonConfig) {
    obj = { trailing: null, trailingPressableProps: null };
    ({ content: obj5[0], pressableProps: obj5[1] } = inputClearButtonConfig);
    tmp6 = obj;
  }
  let tmpResult = tmp(6228);
  const inputAttachments = tmpResult.useInputAttachments(size, tmp6);
  let tmp8 = null;
  ({ trailing, inputStyle } = inputAttachments);
  if (null != size.leadingText) {
    tmp8 = null;
    if (size.leadingText.length > 0) {
      obj1 = { style: null, children: null };
      obj1[0] = inputStyles.splitBorder;
      obj2 = { style: null };
      obj2[0] = function style(pressed) {
        let obj;
        if (pressed.pressed) {
          obj = { opacity: 0.2 };
        }
        const items = [obj];
        return items;
      };
      const merged = Object.assign(size.leadingPressableProps);
      tmpResult = tmp(6228);
      obj2.children = tmpResult.renderInputAttachment(undefined, size.leadingText, inputStyles.text);
      obj1[1] = <closure_2 style={null} />;
      tmp8 = <closure_3 style={null}>{null}</closure_3>;
    }
  }
  obj3 = {};
  const merged1 = Object.assign(inputProps);
  obj3.ref = innerRef;
  obj3.leading = tmp8;
  obj3.trailing = trailing;
  obj3.inputStyle = inputStyle;
  return jsx(BaseTextField.BaseTextField, {});
});
const result = require("set").fileFinishedImporting("design/components/SplitTextInput/native/SplitTextField.native.tsx");

export const SplitTextField = forwardRefResult;