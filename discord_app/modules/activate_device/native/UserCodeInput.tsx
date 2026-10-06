// === Module 13711: UserCodeInput ===

// Module 13711 (UserCodeInput)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6105 */;
import OAuthConstants2 from "OAuthConstants" /* 13712 */;
import useUserCodeSubmit from "useUserCodeSubmit" /* 13713 */;
import ActivateDeviceSharedStylesDefault from "ActivateDeviceSharedStyles" /* 13714 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
const View = react_native.View;
const OAuthConstants = OAuthConstants2.OAuthConstants;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ text: { textAlign: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((prefilledUserCode) => {
  let arr;
  let closure_129_0;
  let error;
  let first;
  let items;
  let manualSubmit;
  let onClose;
  let onUserCodeAccepted;
  let submitting;
  let tmp10;
  let tmp13;
  let tmp15;
  const obj = react2;
  const cResult = obj.c(23);
  let str = prefilledUserCode.prefilledUserCode;
  ({ onClose, onUserCodeAccepted } = prefilledUserCode);
  const tmp4 = closure_10();
  const useState = react.useState;
  if (str == null) {
    str = "";
  }
  [arr, closure_129_0] = useState(str);
  _slicedToArray(useState(str), 2);
  const tmpResult = useUserCodeSubmit;
  const userCodeSubmit = tmpResult.useUserCodeSubmit(arr, onUserCodeAccepted, onClose);
  ({ manualSubmit, error, submitting } = userCodeSubmit);
  const text = tmp4.text;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl5.intl;
    const stringResult = intl.string(intl5.t.KYPNUv);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.text) {
    const obj2 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: text, children: first };
    const tmp12 = metroImportDefault(Text_Text.Text, obj2);
    cResult[1] = tmp4.text;
    cResult[2] = tmp12;
    tmp10 = tmp12;
  } else {
    tmp10 = cResult[2];
  }
  const text2 = tmp4.text;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = intl5.intl;
    const stringResult1 = intl2.string(intl5.t.xRHk7f);
    cResult[3] = stringResult1;
    tmp13 = stringResult1;
  } else {
    tmp13 = cResult[3];
  }
  if (cResult[4] !== tmp4.text) {
    const obj3 = { variant: "text-md/medium", color: "text-default", style: text2, children: tmp13 };
    const tmp17 = metroImportDefault(Text_Text.Text, obj3);
    cResult[4] = tmp4.text;
    cResult[5] = tmp17;
    tmp15 = tmp17;
  } else {
    tmp15 = cResult[5];
  }
  if (cResult[6] === tmp10) {
    let tmp21;
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(arg0) {
          return closure_0(prefilledUserCode);
        }
      }
      cResult[9] = G;
    } else {
      class G {
        constructor(arg0) {
          return closure_0(prefilledUserCode);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class G {
        constructor(arg0) {
          return closure_0(prefilledUserCode);
        }
      }
      const obj4 = { number: OAuthConstants.USER_CODE_LENGTH };
      const formatToPlainStringResult = obj6.formatToPlainString(intl5.t["0tbz6x"], obj4);
      cResult[10] = formatToPlainStringResult;
      tmp21 = formatToPlainStringResult;
    } else {
      class G {
        constructor(arg0) {
          return closure_0(prefilledUserCode);
        }
      }
    }
    if (cResult[11] === error) {
      let tmp28;
      class G {
        constructor(arg0) {
          return closure_0(prefilledUserCode);
        }
      }
      const _Symbol3 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class G {
          constructor(arg0) {
            return closure_0(prefilledUserCode);
          }
        }
        const stringResult2 = obj9.string(intl5.t["3PatSz"]);
        cResult[14] = stringResult2;
        tmp28 = stringResult2;
      } else {
        class G {
          constructor(arg0) {
            return closure_0(prefilledUserCode);
          }
        }
      }
      if (cResult[15] === manualSubmit) {
        class G {
          constructor(arg0) {
            return closure_0(prefilledUserCode);
          }
        }
      }
      const obj5 = { size: "lg", text: tmp28, onPress: manualSubmit, loading: submitting, disabled: arr.length !== OAuthConstants.USER_CODE_LENGTH, grow: true };
      cResult[15] = manualSubmit;
      cResult[16] = submitting;
      cResult[17] = arr.length !== OAuthConstants.USER_CODE_LENGTH;
      cResult[18] = metroImportDefault(components_Button_Button.Button, obj5);
      const tmp34 = metroImportDefault(components_Button_Button.Button, obj5);
    }
    const obj7 = { onChange: G, maxLength: OAuthConstants.USER_CODE_LENGTH, value: arr, autoFocus: true, autoComplete: "off", placeholder: tmp21, errorMessage: error };
    cResult[11] = error;
    cResult[12] = arr;
    cResult[13] = metroImportDefault(TextInput_TextInput.TextInput, obj7);
    const tmp27 = metroImportDefault(TextInput_TextInput.TextInput, obj7);
  }
  const obj8 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: items };
  items = [tmp10, tmp15];
  cResult[6] = tmp10;
  cResult[7] = tmp15;
  cResult[8] = metroImportAll(View, obj8);
  metroImportAll(View, obj8);
}) : ((prefilledUserCode) => {
  let arr;
  let c0;
  let error;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let manualSubmit;
  let obj7;
  let onClose;
  let onUserCodeAccepted;
  let submitting;
  let str = prefilledUserCode.prefilledUserCode;
  c0 = undefined;
  ({ onClose, onUserCodeAccepted } = prefilledUserCode);
  const tmp = closure_10();
  const useState = react.useState;
  if (str == null) {
    str = "";
  }
  [arr, c0] = useState(str);
  _slicedToArray(useState(str), 2);
  const obj = useUserCodeSubmit;
  const userCodeSubmit = obj.useUserCodeSubmit(arr, onUserCodeAccepted, onClose);
  const obj2 = { children: items1 };
  ({ manualSubmit, error, submitting } = userCodeSubmit);
  const obj3 = { style: ActivateDeviceSharedStylesDefault.innerContent, children: items };
  const obj4 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp.text, children: intl.string(intl5.t.KYPNUv) };
  const Text = Text_Text.Text;
  intl = intl5.intl;
  items = [metroImportDefault(Text, obj4), ];
  const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp.text, children: intl2.string(intl5.t.xRHk7f) };
  const Text2 = Text_Text.Text;
  intl2 = intl5.intl;
  items[1] = metroImportDefault(Text2, obj5);
  items1 = [metroImportAll(View, obj3), , ];
  const obj6 = {
    onChange(arg0) {
      return _undefined(arg0);
    },
    maxLength: OAuthConstants.USER_CODE_LENGTH,
    value: arr,
    autoFocus: true,
    autoComplete: "off",
    placeholder: intl3.formatToPlainString(intl5.t["0tbz6x"], obj7),
    errorMessage: error
  };
  const TextInput = TextInput_TextInput.TextInput;
  intl3 = intl5.intl;
  obj7 = { number: OAuthConstants.USER_CODE_LENGTH };
  items1[1] = metroImportDefault(TextInput, obj6);
  const obj8 = { size: "lg", text: intl4.string(intl5.t["3PatSz"]), onPress: manualSubmit, loading: submitting, disabled: arr.length !== OAuthConstants.USER_CODE_LENGTH, grow: true };
  const Button = components_Button_Button.Button;
  intl4 = intl5.intl;
  items1[2] = metroImportDefault(Button, obj8);
  return metroImportAll(React4, obj2);
});
const result = size.fileFinishedImporting("modules/activate_device/native/UserCodeInput.tsx");

export const UserCodeInput = tmp3;