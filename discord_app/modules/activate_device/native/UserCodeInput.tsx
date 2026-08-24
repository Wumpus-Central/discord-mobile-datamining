// discord_app/modules/activate_device/native/UserCodeInput.tsx
import innerContentDefault from "ActivateDeviceSharedStyles.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { OAuthConstants } from "../../../../discord_common/js/shared/shared-constants/OAuthConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";
import { useUserCodeSubmit } from "../useUserCodeSubmit.tsx";

const require = arg1;
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ text: { textAlign: "center" } });
const result = require("set").fileFinishedImporting("modules/activate_device/native/UserCodeInput.tsx");

export const UserCodeInput = function UserCodeInput(prefilledUserCode) {
  let str = prefilledUserCode.prefilledUserCode;
  let _require;
  ({ onClose, onUserCodeAccepted } = prefilledUserCode);
  const tmp = callback4();
  if (str == null) {
    str = "";
  }
  [arr, c0] = callback(React.useState(str), 2);
  let obj = useUserCodeSubmit;
  const userCodeSubmit = obj.useUserCodeSubmit(arr, onUserCodeAccepted, onClose);
  obj = { children: null };
  obj = { style: innerContentDefault.innerContent, children: null };
  ({ manualSubmit, error, submitting } = userCodeSubmit);
  obj1 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj1[3] = intl.string(require("../../../intl/index.native.tsx").t.KYPNUv);
  const items = [callback2(require("../../../design/components/Text/native/Text.tsx").Text, obj1), ];
  const obj2 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: null };
  const intl2 = require("../../../intl/index.native.tsx").intl;
  obj2[3] = intl2.string(require("../../../intl/index.native.tsx").t.xRHk7f);
  items[1] = callback2(require("../../../design/components/Text/native/Text.tsx").Text, obj2);
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
  const intl3 = require("../../../intl/index.native.tsx").intl;
  obj3[5] = intl3.formatToPlainString(require("../../../intl/index.native.tsx").t["0tbz6x"], { number: OAuthConstants.USER_CODE_LENGTH });
  obj3[6] = error;
  items1[1] = callback2(require("../../../design/components/TextInput/native/TextInput.native.tsx").TextInput, obj3);
  const obj5 = { size: "lg", text: null, onPress: null, loading: null, disabled: null, grow: true };
  const intl4 = require("../../../intl/index.native.tsx").intl;
  obj5[1] = intl4.string(require("../../../intl/index.native.tsx").t["3PatSz"]);
  obj5[2] = manualSubmit;
  obj5[3] = submitting;
  obj5[4] = arr.length !== OAuthConstants.USER_CODE_LENGTH;
  items1[2] = callback2(require("../../../design/components/Button/native/Button.native.tsx").Button, obj5);
  obj[0] = items1;
  return callback3(closure_9, obj);
};