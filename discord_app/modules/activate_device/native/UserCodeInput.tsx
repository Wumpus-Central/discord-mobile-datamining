import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import { OAuthConstants } from "OAuthConstants";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ text: { textAlign: "center" } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/activate_device/native/UserCodeInput.tsx");

export const UserCodeInput = function UserCodeInput(prefilledUserCode) {
  let arr;
  let c0;
  let error;
  let manualSubmit;
  let onClose;
  let onUserCodeAccepted;
  let submitting;
  let str = prefilledUserCode.prefilledUserCode;
  let _require;
  ({ onClose, onUserCodeAccepted } = prefilledUserCode);
  const tmp = callback4();
  if (str == null) {
    str = "";
  }
  [arr, c0] = callback(React.useState(str), 2);
  let obj = _require(13104);
  const userCodeSubmit = obj.useUserCodeSubmit(arr, onUserCodeAccepted, onClose);
  obj = { children: null };
  obj = { style: importDefault(13105).innerContent, children: null };
  ({ manualSubmit, error, submitting } = userCodeSubmit);
  const obj1 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = _require(1236).intl;
  obj1[3] = intl.string(_require(1236).t.KYPNUv);
  const items = [callback2(_require(4251).Text, obj1), ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = _require(1236).intl;
  obj2[3] = intl2.string(_require(1236).t.xRHk7f);
  items[1] = callback2(_require(4251).Text, obj2);
  obj[1] = items;
  const items1 = [callback3(View, obj), , ];
  const obj3 = {
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
  const intl3 = _require(1236).intl;
  obj3[5] = intl3.formatToPlainString(_require(1236).t["0tbz6x"], { number: OAuthConstants.USER_CODE_LENGTH });
  obj3[6] = error;
  items1[1] = callback2(_require(7701).TextInput, obj3);
  const obj5 = { size: "lg", text: null, onPress: null, loading: null, disabled: null, grow: true };
  const intl4 = _require(1236).intl;
  obj5[1] = intl4.string(_require(1236).t["3PatSz"]);
  obj5[2] = manualSubmit;
  obj5[3] = submitting;
  obj5[4] = arr.length !== OAuthConstants.USER_CODE_LENGTH;
  items1[2] = callback2(_require(4666).Button, obj5);
  obj[0] = items1;
  return callback3(closure_9, obj);
};