// discord_app/modules/user_settings/account/native/UserSettingsInputAlert.tsx
import HTTPUtils from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import Stack_Stack from "../../../../design/components/Stack/native/Stack.native.tsx";
import common_AlertDefault from "../../../../components_native/common/Alert.tsx";
import KeyboardAwareViewDefault from "../../../keyboard/native/KeyboardAwareView.tsx";
import TextInput from "../../../../design/components/TextInput/native/TextInput.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const hasOwnProperty = { input: "", error: "add" };
const PureComponent = noop.PureComponent;
class UserSettingsInputAlert extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = closure_5;
    applyArgumentsResult.close = function close() {
      const onClose = applyArgumentsResult.props.onClose;
      if (null != onClose) {
        onClose();
      }
    };
    applyArgumentsResult.handleSubmit = function handleSubmit() {
      ({
        isLoading,
        onSubmit,
        onSuccess: closure_0,
        closeOnSuccess: closure_1,
        onError: closure_2,
        skipErrorMsgAbortCode: closure_3,
      } = applyArgumentsResult.props);
      if (!isLoading) {
        isLoading = null == onSubmit;
      }
      if (!isLoading) {
        const onSubmitResult = onSubmit(applyArgumentsResult.state.input);
        onSubmit(applyArgumentsResult.state.input)
          .then(() => {
            if (closure_1_0 != null) {
              tmp();
            }
            if (closure_1_1) {
              applyArgumentsResult.close();
            }
          })
          .catch((error) => {
            if (closure_1_2 != null) {
              tmp(error);
            }
            if (error) {
              if (error.body) {
                const v6OrEarlierAPIError = new HTTPUtils.V6OrEarlierAPIError(error);
                if (v6OrEarlierAPIError.code !== closure_1_3) {
                  const obj = { error: v6OrEarlierAPIError.message };
                  applyArgumentsResult.setState(obj);
                }
              }
            }
          });
        const nextPromise = onSubmit(applyArgumentsResult.state.input).then(() => {
          if (closure_1_0 != null) {
            tmp();
          }
          if (closure_1_1) {
            applyArgumentsResult.close();
          }
        });
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = UserSettingsInputAlert.prototype;
prototype["renderContent"] = function renderContent() {
  const self = this;
  const helpText = this.props.helpText;
  if (null != this.props.error) {
    if ("" !== self.props.error) {
      let error = self.props.error;
    }
    let tmp7 = null != helpText;
    if (tmp7) {
      let obj = { variant: "text-md/normal", children: helpText };
      tmp7 = React3(tmp5(4556).Text, obj);
    }
    const items = [tmp7];
    obj = {
      label: tmp3,
      placeholder: tmp,
      secureTextEntry: tmp2,
      returnKeyType: "done",
      autoFocus: true,
      status: null,
      errorMessage: null,
      onSubmitEditing: null,
      onChange: null,
    };
    let str2 = "default";
    if (null != error) {
      str2 = "error";
    }
    obj = {
      spacing: 16,
      children: null,
      status: str2,
      errorMessage: error,
      onSubmitEditing: self.handleSubmit,
      onChange(input) {
        return self.setState({ input });
      },
    };
    items[1] = React3(TextInput.TextInput, obj);
    obj.children = items;
    return React4(Stack_Stack.Stack, obj);
  }
  error = self.state.error;
};
prototype["render"] = function render() {
  ({ title, actionText, cancelText, confirmColor, useKeyboardAwareWrapper } = this.props);
  let obj = {
    title,
    confirmText: actionText,
    confirmColor,
    onConfirm: this.handleSubmit,
    cancelText,
    onCancel: this.close,
    children: this.renderContent(),
  };
  const tmp5 = React3(common_AlertDefault, obj);
  let tmpResult = tmp5;
  if (useKeyboardAwareWrapper) {
    obj = { children: tmp5 };
    tmpResult = React3(KeyboardAwareViewDefault, obj);
  }
  return tmpResult;
};
UserSettingsInputAlert.defaultProps = { isLoading: false, useKeyboardAwareWrapper: false, secureTextEntry: true };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsInputAlert.tsx");

export default UserSettingsInputAlert;
