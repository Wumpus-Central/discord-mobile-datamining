// === Module 14085: UserCodeInput ===

// Module 14085 (UserCodeInput)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import TextInput from "TextInput" /* 6285 */;
import useUserCodeSubmit from "useUserCodeSubmit" /* 14087 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 14088 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const OAuthConstants = fn(14086).OAuthConstants;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5092);
let closure_10 = createStyles.createStyles({ text: { textAlign: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/activate_device/native/UserCodeInput.tsx");

export const UserCodeInput = ReactCompilerGating.isReactCompilerEnabled() ? (function UserCodeInput(prefilledUserCode) {
  const cResult = c.c(23);
  let str = prefilledUserCode.prefilledUserCode;
  ({ onClose, onUserCodeAccepted } = prefilledUserCode);
  const tmp4 = closure_10();
  if (str == null) {
    str = "";
  }
  [arr, require] = noop.useState(str);
  const tmp6 = _slicedToArray(noop.useState(str), 2);
  const userCodeSubmit = useUserCodeSubmit.useUserCodeSubmit(arr, onUserCodeAccepted, onClose);
  ({ manualSubmit, error, submitting } = userCodeSubmit);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.KYPNUv);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.text) {
    const obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp4.text, children: first };
    const tmp12 = React5(Text_Text.Text, obj2);
    cResult[1] = tmp4.text;
    cResult[2] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult1 = intl2.string(util.t.xRHk7f);
    cResult[3] = stringResult1;
    let tmp13 = stringResult1;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== tmp4.text) {
    const obj3 = { variant: "text-md/medium", color: "text-default", style: tmp4.text, children: tmp13 };
    const tmp17 = React5(Text_Text.Text, obj3);
    cResult[4] = tmp4.text;
    cResult[5] = tmp17;
    let tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === tmp10) {
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor(arg0) {
          return closure_0(prefilledUserCode);
        }
      }
      cResult[9] = D;
    } else {
      class D {
        constructor(arg0) {
          return closure_0(prefilledUserCode);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor(arg0) {
          return closure_0(prefilledUserCode);
        }
      }
      const obj4 = { number: OAuthConstants.USER_CODE_LENGTH };
      const formatToPlainStringResult = obj6.formatToPlainString(util.t["0tbz6x"], obj4);
      cResult[10] = formatToPlainStringResult;
      const tmp21 = formatToPlainStringResult;
    } else {
      class D {
        constructor(arg0) {
          return closure_0(prefilledUserCode);
        }
      }
    }
    if (cResult[11] === error) {
      class D {
        constructor(arg0) {
          return closure_0(prefilledUserCode);
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class D {
          constructor(arg0) {
            return closure_0(prefilledUserCode);
          }
        }
        const stringResult2 = obj9.string(util.t["3PatSz"]);
        cResult[14] = stringResult2;
        const tmp28 = stringResult2;
      } else {
        class D {
          constructor(arg0) {
            return closure_0(prefilledUserCode);
          }
        }
      }
      if (cResult[15] === manualSubmit) {
        class D {
          constructor(arg0) {
            return closure_0(prefilledUserCode);
          }
        }
      }
      const obj5 = { size: "lg", text: tmp28, onPress: manualSubmit, loading: submitting, disabled: arr.length !== OAuthConstants.USER_CODE_LENGTH, grow: true };
      const tmp34 = React5(components_Button_Button.Button, obj5);
      cResult[15] = manualSubmit;
      cResult[16] = submitting;
      cResult[17] = arr.length !== OAuthConstants.USER_CODE_LENGTH;
      cResult[18] = tmp34;
    }
    const obj7 = { onChange: D, maxLength: OAuthConstants.USER_CODE_LENGTH, value: arr, autoFocus: true, autoComplete: "off", placeholder: tmp21, errorMessage: error };
    const tmp27 = React5(TextInput.TextInput, obj7);
    cResult[11] = error;
    cResult[12] = arr;
    cResult[13] = tmp27;
  }
  const obj8 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: null };
  const items = [tmp10, tmp15];
  obj8.children = items;
  const tmpResult = useUserCodeSubmit;
  cResult[6] = tmp10;
  cResult[7] = tmp15;
  cResult[8] = closure_1_8(View, obj8);
  const tmp19 = closure_1_8(View, obj8);
}) : (function UserCodeInput(prefilledUserCode) {
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
  const items1 = [closure_1_8(View, obj3), , ];
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
  return closure_1_8(options, obj2);
});