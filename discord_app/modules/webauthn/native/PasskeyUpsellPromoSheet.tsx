// discord_app/modules/webauthn/native/PasskeyUpsellPromoSheet.tsx
import NativeCeremoniesDefault from "NativeCeremonies.tsx";
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

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
  let obj = {
    source: require("../../../../_runtime/metro/14666__.js"),
    style: { height: 190, width: 220, resizeMode: "contain" },
  };
  const tmp4 = closure_7(Image, obj);
  [r10018, require] = _slicedToArray(noop.useState(""), 2);
  const tmp5 = _slicedToArray(noop.useState(""), 2);
  [tmp7, importDefault] = _slicedToArray(noop.useState(false), 2);
  obj = { illustration: tmp4, title: null, description: null, onDismiss: null, actions: null };
  const intl = require("util").intl;
  obj.title = intl.string(require("util").t.CjleBl);
  let obj2 = require("PlatformUtils");
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  const intl2 = require("util").intl;
  const string = intl2.string;
  const t = require("util").t;
  if (isIOSResult) {
    let stringResult = string(t["7yxR9t"]);
  } else {
    stringResult = string(t.d6uxJy);
  }
  obj.description = stringResult;
  obj.onDismiss = function onDismiss() {
    return setRegistering(onRegisterSuccess[10]).markDismissed(constants.USER_DISMISS);
  };
  obj = {
    size: "lg",
    onPress() {
      let obj = PasskeyUpsellManagerDefault;
      obj.markDismissed(ContentDismissActionType.TAKE_ACTION);
      obj = { setRegistering, setError, onRegisterSuccess };
      NativeCeremoniesDefault.registerPasskey(obj);
    },
    text: null,
    loading: null,
    disabled: null,
  };
  const intl3 = require("util").intl;
  const string2 = intl3.string;
  const t2 = require("util").t;
  if (tmp7) {
    let string2Result = string2(t2.wePEBF);
  } else {
    string2Result = string2(t2.NIFmCJ);
  }
  obj.text = string2Result;
  obj.loading = tmp7;
  obj.disabled = tmp7;
  const items = [closure_7(require("components/Button/Button").Button, obj)];
  const obj1 = {
    size: "lg",
    variant: "secondary",
    onPress() {
      setRegistering(onRegisterSuccess[10]).markDismissed(constants.USER_DISMISS);
      const obj = setRegistering(onRegisterSuccess[10]);
      const result = setRegistering(onRegisterSuccess[6]).closePasskeyUpsellPromoSheet();
    },
    text: null,
    disabled: null,
  };
  const intl4 = require("util").intl;
  const string3 = intl4.string;
  const t3 = require("util").t;
  if (tmp7) {
    let string3Result = string3(t3.wePEBF);
  } else {
    string3Result = string3(t3["7J6/nG"]);
  }
  obj2 = { children: null };
  obj1.text = string3Result;
  obj1.disabled = tmp7;
  items[1] = closure_7(require("components/Button/Button").Button, obj1);
  obj2.children = items;
  obj.actions = closure_8(require("ButtonGroup").ButtonGroup, obj2);
  return closure_7(require("PromoSheet").PromoSheet, obj);
}
export const PASSWORDLESS_UPSELL_MODAL_KEY = "PASSWORDLESS_UPSELL_MODAL_KEY";
