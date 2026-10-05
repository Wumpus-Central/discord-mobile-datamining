// discord_app/modules/user_settings/account/native/UserSettingsInputAlert.tsx
import HTTPUtils from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import AlertDefault from "../../../../components_native/common/Alert.tsx";
import TextInput_TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import KeyboardAwareViewDefault from "../../../keyboard/native/KeyboardAwareView.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
({ jsx: c3, jsxs: closure_4 } = Fragment);
const hasOwnProperty = { input: "", error: "code" };
const PureComponent = react.PureComponent;
class UserSettingsInputAlert extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.state = state;
    applyArgumentsResult.close = function close() {
      const onClose = require.props.onClose;
      if (null != onClose) {
        onClose();
      }
    };
    applyArgumentsResult.handleSubmit = function handleSubmit() {
      let closure_0;
      let closure_1;
      let closure_2;
      let closure_3;
      let isLoading;
      let onSubmit;
      ({
        isLoading,
        onSubmit,
        onSuccess: closure_0,
        closeOnSuccess: closure_1,
        onError: closure_2,
        skipErrorMsgAbortCode: closure_3,
      } = applyArgumentsResult.props);
      const input = applyArgumentsResult.state.input;
      if (!isLoading) {
        const tmp = null;
        isLoading = null == onSubmit;
      }
      if (!isLoading) {
        const onSubmitResult = onSubmit(input);
        const nextPromise = onSubmitResult.then(() => {
          if (closure_0 != null) {
            tmp();
          }
          if (closure_1) {
            require.close();
          }
        });
        nextPromise.catch(function (error) {
          if (closure_2 != null) {
            tmp(error);
          }
          if (error) {
            if (error.body) {
              const self = this;
              const self2 = this;
              const v6OrEarlierAPIError = new HTTPUtils.V6OrEarlierAPIError(error);
              if (v6OrEarlierAPIError.code !== closure_3) {
                const obj = { error: v6OrEarlierAPIError.message };
                require.setState(obj);
              }
            }
          }
        });
      }
    };
    return applyArgumentsResult;
  }
  renderContent() {
    let str2;
    const self = this;
    const helpText = this.props.helpText;
    if (null != this.props.error) {
      let error;
      if ("" !== self.props.error) {
        error = self.props.error;
      }
      let tmp7 = null != helpText;
      const Stack = Stack_Stack.Stack;
      if (tmp7) {
        let obj = { variant: "text-md/normal", children: helpText };
        tmp7 = _false(Text_Text.Text, obj);
      }
      const items = [tmp7];
      const obj2 = {
        label: tmp3,
        placeholder: tmp,
        secureTextEntry: tmp2,
        returnKeyType: "done",
        autoFocus: true,
        status: str2,
        errorMessage: error,
        onSubmitEditing: self.handleSubmit,
        onChange(input) {
          const obj = { input };
          return self.setState(obj);
        },
      };
      str2 = "default";
      const TextInput = TextInput_TextInput.TextInput;
      if (null != error) {
        str2 = "error";
      }
      const obj3 = { spacing: 16, children: items };
      items[1] = _false(TextInput, obj2);
      return React3(Stack, obj3);
    }
    error = self.state.error;
  }
  render() {
    let actionText;
    let cancelText;
    let confirmColor;
    let title;
    let useKeyboardAwareWrapper;
    ({ title, actionText, cancelText, confirmColor, useKeyboardAwareWrapper } = this.props);
    const obj = {
      title,
      confirmText: actionText,
      confirmColor,
      onConfirm: this.handleSubmit,
      cancelText,
      onCancel: this.close,
      children: this.renderContent(),
    };
    const tmp4 = AlertDefault;
    const tmp5 = _false(tmp4, obj);
    let tmpResult = tmp5;
    if (useKeyboardAwareWrapper) {
      const obj2 = { children: tmp5 };
      tmpResult = _false(KeyboardAwareViewDefault, obj2);
    }
    return tmpResult;
  }
}
const prototype = UserSettingsInputAlert.prototype;
UserSettingsInputAlert.defaultProps = { isLoading: false, useKeyboardAwareWrapper: false, secureTextEntry: true };
const result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsInputAlert.tsx");

export default UserSettingsInputAlert;
