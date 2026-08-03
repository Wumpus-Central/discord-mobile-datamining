// === Module 13846: PasswordlessUpsellPromoSheet ===

// Module 13846 (PasswordlessUpsellPromoSheet)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { Image } from "get ActivityIndicator";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default function PasswordlessUpsellPromoSheet() {
  let importDefault;
  let require;
  let tmp7;
  function onRegisterSuccess(closure_0) {
    const result = callback(onRegisterSuccess[6]).closePasskeyUpsellPromoSheet();
    const obj = callback(onRegisterSuccess[6]);
    const result1 = callback(onRegisterSuccess[6]).openPasskeyUpsellPromoModal(closure_0);
  }
  let obj = { source: require(onRegisterSuccess[5]), style: { height: 190, width: 220, resizeMode: "contain" } };
  const tmp4 = callback2(Image, obj);
  [r10018, require] = callback(React.useState(""), 2);
  const tmp5 = callback(React.useState(""), 2);
  [tmp7, importDefault] = callback(React.useState(false), 2);
  obj = { illustration: tmp4, title: null, description: null, onDismiss: null, actions: null };
  const intl = require(onRegisterSuccess[8]).intl;
  obj[1] = intl.string(require(onRegisterSuccess[8]).t.CjleBl);
  let obj2 = require(onRegisterSuccess[9]);
  const tmp6 = callback(React.useState(false), 2);
  const intl2 = require(onRegisterSuccess[8]).intl;
  const string = intl2.string;
  const t = require(onRegisterSuccess[8]).t;
  if (isIOSResult) {
    let stringResult = string(t["7yxR9t"]);
  } else {
    stringResult = string(t.d6uxJy);
  }
  obj[2] = stringResult;
  obj[3] = function onDismiss() {
    return callback(onRegisterSuccess[10]).markDismissed(constants.USER_DISMISS);
  };
  obj = {
    size: "lg",
    onPress() {
      let obj = outer1_1(onRegisterSuccess[10]);
      obj.markDismissed(outer1_6.TAKE_ACTION);
      obj = { setRegistering: closure_1, setError: closure_0, onRegisterSuccess };
      outer1_1(onRegisterSuccess[13]).registerPasskey(obj);
    },
    text: null,
    loading: null,
    disabled: null
  };
  const intl3 = tmp2(tmp3[8]).intl;
  const string2 = intl3.string;
  const t2 = tmp2(tmp3[8]).t;
  if (tmp7) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.NIFmCJ);
  }
  obj[2] = string2Result;
  obj[3] = tmp7;
  obj[4] = tmp7;
  const items = [callback2(require(onRegisterSuccess[12]).Button, obj), ];
  const obj1 = {
    size: "lg",
    variant: "secondary",
    onPress() {
      callback(onRegisterSuccess[10]).markDismissed(constants.USER_DISMISS);
      const obj = callback(onRegisterSuccess[10]);
      const result = callback(onRegisterSuccess[6]).closePasskeyUpsellPromoSheet();
    },
    text: null,
    disabled: null
  };
  const intl4 = tmp2(tmp3[8]).intl;
  const string3 = intl4.string;
  const t3 = tmp2(tmp3[8]).t;
  if (tmp7) {
    let string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3["7J6/nG"]);
  }
  obj2 = { children: null };
  obj1[3] = string3Result;
  obj1[4] = tmp7;
  items[1] = callback2(require(onRegisterSuccess[12]).Button, obj1);
  obj2[0] = items;
  obj[4] = closure_8(require(onRegisterSuccess[11]).ButtonGroup, obj2);
  return callback2(require(onRegisterSuccess[7]).PromoSheet, obj);
};
export const PASSWORDLESS_UPSELL_MODAL_KEY = "PASSWORDLESS_UPSELL_MODAL_KEY";