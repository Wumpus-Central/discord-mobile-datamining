// === Module 14352: renderContent ===

// Module 14352 (renderContent)
import componentDidMountDefault from "componentDidMount" /* 4899 */;
import _modDef6001 from "module_6001" /* 6001 */;
import jsxProd from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

let require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = { input: "", error: "call" };
const PureComponent = importAllResult.PureComponent;
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
            closure_1_0.close();
          }
        }).catch((body) => {
          if (closure_2 != null) {
            tmp(body);
          }
          if (body) {
            if (body.body) {
              const v6OrEarlierAPIError = new applyArgumentsResult(closure_2_2[2]).V6OrEarlierAPIError(body);
              if (v6OrEarlierAPIError.code !== closure_3) {
                const obj = { error: null };
                obj[0] = v6OrEarlierAPIError.message;
                closure_1_0.setState(obj);
              }
            }
          }
        });
        const nextPromise = onSubmit(applyArgumentsResult.state.input).then(() => {
          if (closure_0 != null) {
            tmp();
          }
          if (closure_1) {
            closure_1_0.close();
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
      error = self.props.error;
    }
    let tmp7 = null != helpText;
    if (tmp7) {
      let obj = { variant: "text-md/normal", children: null };
      obj[1] = helpText;
      tmp7 = callback(tmp5(4441).Text, obj);
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
    items[1] = callback(self(7638).TextInput, obj);
    obj[1] = items;
    return closure_4(self(4878).Stack, obj);
  }
  error = self.state.error;
};
prototype["render"] = function render() {
  ({ title, actionText, cancelText, confirmColor, useKeyboardAwareWrapper } = this.props);
  let obj = { title, confirmText: actionText, confirmColor, onConfirm: this.handleSubmit, cancelText, onCancel: this.close, children: this.renderContent() };
  const tmp5 = callback(componentDidMountDefault, obj);
  let tmpResult = tmp5;
  if (useKeyboardAwareWrapper) {
    obj = { children: null };
    obj[0] = tmp5;
    tmpResult = callback(_modDef6001, obj);
  }
  return tmpResult;
};
UserSettingsInputAlert.defaultProps = { isLoading: false, useKeyboardAwareWrapper: false, secureTextEntry: true };
const result = require("set").fileFinishedImporting("modules/user_settings/account/native/UserSettingsInputAlert.tsx");

export default UserSettingsInputAlert;