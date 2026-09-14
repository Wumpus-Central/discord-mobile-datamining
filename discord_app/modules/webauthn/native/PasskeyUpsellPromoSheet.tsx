// === Module 14753: PasskeyUpsellPromoSheet ===

// Module 14753 (PasskeyUpsellPromoSheet)
import NativeCeremoniesDefault from "NativeCeremonies" /* 7050 */;
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager" /* 14750 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const Image = fn(17).Image;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default function PasswordlessUpsellPromoSheet() {
  function onRegisterSuccess(merged) {
    const result = setRegistering(onRegisterSuccess[6]).closePasskeyUpsellPromoSheet();
    const obj = setRegistering(onRegisterSuccess[6]);
    const result1 = setRegistering(onRegisterSuccess[6]).openPasskeyUpsellPromoModal(merged);
  }
  let obj = { source: require("module_14754"), style: { height: 190, width: 220, resizeMode: "contain" } };
  const tmp4 = closure_7(Image, { source: require("module_14754"), style: { height: 190, width: 220, resizeMode: "contain" } });
  [r10018, require] = noop.useState("");
  const tmp5 = _slicedToArray(noop.useState(""), 2);
  [tmp7, importDefault] = noop.useState(false);
  const obj2 = { illustration: tmp4, title: null, description: null, onDismiss: null, actions: null };
  const intl = require("util").intl;
  obj2.title = intl.string(require("util").t.CjleBl);
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const obj3 = require("PlatformUtils");
  const intl2 = require("util").intl;
  const string = intl2.string;
  const t = require("util").t;
  if (isIOSResult) {
    let stringResult = string(t["7yxR9t"]);
  } else {
    stringResult = string(t.d6uxJy);
  }
  obj2.description = stringResult;
  obj2.onDismiss = function onDismiss() {
    return setRegistering(onRegisterSuccess[10]).markDismissed(constants.USER_DISMISS);
  };
  const obj4 = {
    size: "lg",
    onPress() {
      PasskeyUpsellManagerDefault.markDismissed(ContentDismissActionType.TAKE_ACTION);
      NativeCeremoniesDefault.registerPasskey({ setRegistering, setError, onRegisterSuccess });
    },
    text: null,
    loading: null,
    disabled: null
  };
  const intl3 = require("util").intl;
  const string2 = intl3.string;
  const t2 = require("util").t;
  if (tmp7) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.NIFmCJ);
  }
  obj4.text = string2Result;
  obj4.loading = tmp7;
  obj4.disabled = tmp7;
  const items = [closure_7(require("components/Button/Button").Button, obj4), ];
  const obj5 = {
    size: "lg",
    variant: "secondary",
    onPress() {
      setRegistering(onRegisterSuccess[10]).markDismissed(constants.USER_DISMISS);
      const obj = setRegistering(onRegisterSuccess[10]);
      const result = setRegistering(onRegisterSuccess[6]).closePasskeyUpsellPromoSheet();
    },
    text: null,
    disabled: null
  };
  const intl4 = require("util").intl;
  const string3 = intl4.string;
  const t3 = require("util").t;
  if (tmp7) {
    let string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3["7J6/nG"]);
  }
  const obj6 = { children: null };
  obj5.text = string3Result;
  obj5.disabled = tmp7;
  items[1] = closure_7(require("components/Button/Button").Button, obj5);
  obj6.children = items;
  obj2.actions = closure_8(require("ButtonGroup").ButtonGroup, obj6);
  return closure_7(require("PromoSheet").PromoSheet, obj2);
};
export const PASSWORDLESS_UPSELL_MODAL_KEY = "PASSWORDLESS_UPSELL_MODAL_KEY";