// discord_app/modules/activate_device/native/UserCodeInput.tsx
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import TextInput from "../../../design/components/TextInput/native/TextInput.native.tsx";
import useUserCodeSubmit from "../useUserCodeSubmit.tsx";
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const OAuthConstants = fn(13882).OAuthConstants;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles({ text: { textAlign: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/UserCodeInput.tsx");

export const UserCodeInput = function UserCodeInput(prefilledUserCode) {
  let str = prefilledUserCode.prefilledUserCode;
  c0 = undefined;
  ({ onClose, onUserCodeAccepted } = prefilledUserCode);
  const tmp = closure_10();
  if (str == null) {
    str = "";
  }
  [arr, c0] = _slicedToArray(noop.useState(str), 2);
  let obj = useUserCodeSubmit;
  const userCodeSubmit = obj.useUserCodeSubmit(arr, onUserCodeAccepted, onClose);
  obj = { children: null };
  obj = { style: ActivateDeviceSharedStylesDefault.innerContent, children: null };
  ({ manualSubmit, error, submitting } = userCodeSubmit);
  const obj1 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = util.intl;
  obj1.children = intl.string(util.t.KYPNUv);
  const items = [React5(Text_Text.Text, obj1)];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.xRHk7f);
  items[1] = React5(Text_Text.Text, obj2);
  obj.children = items;
  const items1 = [React6(View, obj), ,];
  const obj3 = {
    onChange(arg0) {
      return _undefined(arg0);
    },
    maxLength: OAuthConstants.USER_CODE_LENGTH,
    value: arr,
    autoFocus: true,
    autoComplete: "off",
    placeholder: null,
    errorMessage: null,
  };
  const intl3 = util.intl;
  obj3.placeholder = intl3.formatToPlainString(util.t["0tbz6x"], { number: OAuthConstants.USER_CODE_LENGTH });
  obj3.errorMessage = error;
  items1[1] = React5(TextInput.TextInput, obj3);
  const obj5 = { size: "lg", text: null, onPress: null, loading: null, disabled: null, grow: true };
  const intl4 = util.intl;
  obj5.text = intl4.string(util.t["3PatSz"]);
  obj5.onPress = manualSubmit;
  obj5.loading = submitting;
  obj5.disabled = arr.length !== OAuthConstants.USER_CODE_LENGTH;
  items1[2] = React5(components_Button_Button.Button, obj5);
  obj.children = items1;
  return React6(React7, obj);
};
