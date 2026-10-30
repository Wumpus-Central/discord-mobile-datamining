// discord_app/design/components/SplitTextInput/native/SplitTextField.native.tsx
import useTextField from "../../TextField/native/useTextField.native.tsx";
import useInputClearButton from "../../Input/native/useInputClearButton.native.tsx";
import useInputAttachments from "../../Input/native/useInputAttachments.native.tsx";
import InputFieldContainer from "../../Input/native/InputFieldContainer.native.tsx";
import BaseTextField from "../../TextField/native/BaseTextField.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: c2, View: c3 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/SplitTextInput/native/SplitTextField.native.tsx");

export function SplitTextField(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const inputStyles = InputFieldContainer.useInputStyles({ size: merged.size, round: merged.round });
  const obj2 = { size: merged.size, round: merged.round };
  const textField = useTextField.useTextField(merged, ref.ref);
  ({ inputProps, innerRef, state } = textField);
  const inputClearButtonConfig = useInputClearButton.useInputClearButtonConfig(merged, state);
  let tmp7;
  if (null != inputClearButtonConfig) {
    ({ content: obj5.trailing, pressableProps: obj5.trailingPressableProps } = inputClearButtonConfig);
    tmp7 = { trailing: null, trailingPressableProps: null };
    const obj6 = { trailing: null, trailingPressableProps: null };
  }
  const inputAttachments = useInputAttachments.useInputAttachments(merged, tmp7);
  let tmp9 = null;
  ({ trailing, inputStyle } = inputAttachments);
  if (null != merged.leadingText) {
    tmp9 = null;
    if (merged.leadingText.length > 0) {
      const obj7 = { style: inputStyles.splitBorder, children: null };
      const obj8 = {
        style(pressed) {
          let obj;
          if (pressed.pressed) {
            obj = { opacity: 0.2 };
          }
          const items = [obj];
          return items;
        },
      };
      const merged1 = Object.assign(merged.leadingPressableProps);
      obj8.children = useInputAttachments.renderInputAttachment(undefined, merged.leadingText, inputStyles.text);
      obj7.children = (
        <React2
          style={function style(pressed) {
            let obj;
            if (pressed.pressed) {
              obj = { opacity: 0.2 };
            }
            const items = [obj];
            return items;
          }}
        />
      );
      tmp9 = <React3 style={inputStyles.splitBorder}>{null}</React3>;
      const tmp2Result2 = useInputAttachments;
    }
  }
  const obj9 = {};
  const merged2 = Object.assign(inputProps);
  obj9.ref = innerRef;
  obj9.leading = tmp9;
  obj9.trailing = trailing;
  obj9.inputStyle = inputStyle;
  return jsx(BaseTextField.BaseTextField, {});
}
