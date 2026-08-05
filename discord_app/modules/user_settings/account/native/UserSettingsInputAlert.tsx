// discord_app/modules/user_settings/account/native/UserSettingsInputAlert.tsx
import jsxProd from "jsxProd";
import { PureComponent } from "noop";
import importAllResult from "noop";

let c3;
let c4;
let require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = { input: "", error: "Array" };
class UserSettingsInputAlert extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.state = jsxs;
    applyArgumentsResult.close = function close() {
      const onClose = applyArgumentsResult.props.onClose;
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
      ({ isLoading, onSubmit, onSuccess: closure_0, closeOnSuccess: closure_1, onError: closure_2, skipErrorMsgAbortCode: closure_3 } = applyArgumentsResult.props);
      if (!isLoading) {
        isLoading = null == onSubmit;
      }
      if (!isLoading) {
        const onSubmitResult = onSubmit(applyArgumentsResult.state.input);
        onSubmit(applyArgumentsResult.state.input).then(() => {
          if (closure_0 != null) {
            tmp();
          }
          if (closure_1) {
            outer1_0.close();
          }
        }).catch((body) => {
          if (closure_2 != null) {
            tmp(body);
          }
          if (body) {
            if (body.body) {
              const v6OrEarlierAPIError = new applyArgumentsResult(outer2_2[2]).V6OrEarlierAPIError(body);
              if (v6OrEarlierAPIError.code !== closure_3) {
                const obj = { error: null };
                obj[0] = v6OrEarlierAPIError.message;
                outer1_0.setState(obj);
              }
            }
          }
        });
        const nextPromise = onSubmit(applyArgumentsResult.state.input).then(() => {
          if (closure_0 != null) {
            tmp();
          }
          if (closure_1) {
            outer1_0.close();
          }
        });
      }
    };
    return applyArgumentsResult;
  }
}
const prototype = UserSettingsInputAlert.prototype;
prototype["renderContent"] = function renderContent() {
  let self = this;
  self = this;
  const helpText = this.props.helpText;
  if (null != this.props.error) {
    if ("" !== self.props.error) {
      let error = self.props.error;
    }
    let tmp7 = null != helpText;
    if (tmp7) {
      let obj = { variant: "text-md/normal", children: null };
      obj[1] = helpText;
      tmp7 = callback(tmp5(4281).Text, obj);
    }
    const items = [tmp7, ];
    obj = { label: null, placeholder: null, secureTextEntry: null, returnKeyType: "done", autoFocus: true, status: null, errorMessage: null, onSubmitEditing: null, onChange: null };
    obj[0] = tmp3;
    obj[1] = tmp;
    obj[2] = tmp2;
    let str2 = "default";
    if (null != error) {
      str2 = "error";
    }
    obj = { spacing: 16, children: null };
    obj[5] = str2;
    obj[6] = error;
    obj[7] = self.handleSubmit;
    obj[8] = function onChange(input) {
      return self.setState({ input });
    };
    items[1] = callback(self(7713).TextInput, obj);
    obj[1] = items;
    return closure_4(self(4693).Stack, obj);
  }
  error = self.state.error;
};
prototype["render"] = function render() {
  let actionText;
  let cancelText;
  let confirmColor;
  let title;
  let useKeyboardAwareWrapper;
  ({ title, actionText, cancelText, confirmColor, useKeyboardAwareWrapper } = this.props);
  let obj = { title, confirmText: actionText, confirmColor, onConfirm: this.handleSubmit, cancelText, onCancel: this.close, children: null };
  obj[6] = this.renderContent();
  const tmp5 = callback(require("../../../../components_native/common/Alert.tsx"), obj);
  let tmpResult = tmp5;
  if (useKeyboardAwareWrapper) {
    obj = { children: null };
    obj[0] = tmp5;
    tmpResult = callback(require("../../../keyboard/native/KeyboardAwareView.tsx"), obj);
  }
  return tmpResult;
};
UserSettingsInputAlert.defaultProps = { isLoading: false, useKeyboardAwareWrapper: false, secureTextEntry: true };
const result = require("sendRequest").fileFinishedImporting("modules/user_settings/account/native/UserSettingsInputAlert.tsx");

export default UserSettingsInputAlert;