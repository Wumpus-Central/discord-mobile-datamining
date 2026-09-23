// === Module 14238: UserCodeInput ===

// Module 14238 (UserCodeInput)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4823 */;
import components_Button_Button from "components/Button/Button" /* 5271 */;
import TextInput from "TextInput" /* 6934 */;
import useUserCodeSubmit from "useUserCodeSubmit" /* 14240 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 14241 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const OAuthConstants = fn(14239).OAuthConstants;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4827);
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
  [arr, c0] = noop.useState(str);
  const tmp3 = _slicedToArray(noop.useState(str), 2);
  const userCodeSubmit = useUserCodeSubmit.useUserCodeSubmit(arr, onUserCodeAccepted, onClose);
  const obj2 = { children: null };
  const obj3 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: null };
  ({ manualSubmit, error, submitting } = userCodeSubmit);
  const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = util.intl;
  obj4.children = intl.string(util.t.KYPNUv);
  const items = [React5(Text_Text.Text, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.xRHk7f);
  items[1] = React5(Text_Text.Text, obj5);
  obj3.children = items;
  const items1 = [React6(View, obj3), , ];
  const obj6 = {
    onChange(arg0) {
      return _undefined(arg0);
    },
    maxLength: OAuthConstants.USER_CODE_LENGTH,
    value: arr,
    autoFocus: true,
    autoComplete: "off",
    placeholder: null,
    errorMessage: null
  };
  const intl3 = util.intl;
  obj6.placeholder = intl3.formatToPlainString(util.t["0tbz6x"], { number: OAuthConstants.USER_CODE_LENGTH });
  obj6.errorMessage = error;
  items1[1] = React5(TextInput.TextInput, obj6);
  const obj8 = { size: "lg", text: null, onPress: null, loading: null, disabled: null, grow: true };
  const intl4 = util.intl;
  obj8.text = intl4.string(util.t["3PatSz"]);
  obj8.onPress = manualSubmit;
  obj8.loading = submitting;
  obj8.disabled = arr.length !== OAuthConstants.USER_CODE_LENGTH;
  items1[2] = React5(components_Button_Button.Button, obj8);
  obj2.children = items1;
  return React6(React7, obj2);
};