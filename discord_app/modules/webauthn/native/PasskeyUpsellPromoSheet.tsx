// discord_app/modules/webauthn/native/PasskeyUpsellPromoSheet.tsx
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import NativeCeremoniesDefault from "NativeCeremonies.tsx";
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators.tsx";
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const UserSettingsSections = fn(1072).UserSettingsSections;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default function PasswordlessUpsellPromoSheet() {
  let obj = {
    source: require("../../../../_runtime/metro/17673__.js"),
    style: { height: 190, width: 220, resizeMode: "contain" },
  };
  _require = noop.useRef(false);
  let obj2 = {
    illustration: closure_6(FastImageDefault, obj),
    title: null,
    description: null,
    onDismiss: null,
    actions: null,
  };
  let intl = require("util").intl;
  obj2.title = intl.string(require("util").t.CjleBl);
  const tmp5 = closure_6(FastImageDefault, obj);
  let obj3 = require("PlatformUtils");
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
    return PasskeyUpsellManagerDefault.markDismissed(constants.USER_DISMISS);
  };
  let obj4 = { children: null };
  const obj5 = {
    size: "lg",
    onPress: function registerPasskey() {
      if (!ref.current) {
        tmp.current = true;
        PasskeyUpsellManagerDefault.markDismissed(ContentDismissActionType.TAKE_ACTION);
        const result = PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellPromoSheet();
        const obj4 = {
          setRegistering() {},
          onRegisterSuccess(arg0) {
            ({ ticket, credential } = arg0);
            const obj2 = { screen: constants.WEBAUTHN_NAME, params: null };
            const obj3 = { ticket, credential, name: null };
            const intl = ref(1113).intl;
            obj3.name = intl.string(ref(1113).t["8H5RmH"]);
            obj2.params = obj3;
            ref(7563).openUserSettings(obj2);
          },
        };
        NativeCeremoniesDefault.registerPasskey(obj4).catch(() => {});
        const registerPasskeyResult = NativeCeremoniesDefault.registerPasskey(obj4);
      }
    },
    text: null,
  };
  const intl3 = tmp4(1113).intl;
  obj5.text = intl3.string(require("util").t.NIFmCJ);
  const items = [closure_6(require("components/Button/Button").Button, obj5)];
  const obj6 = {
    size: "lg",
    variant: "secondary",
    onPress: function onCancel() {
      PasskeyUpsellManagerDefault.markDismissed(constants.USER_DISMISS);
      const result = PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellPromoSheet();
    },
    text: null,
  };
  const intl4 = tmp4(1113).intl;
  obj6.text = intl4.string(require("util").t["7J6/nG"]);
  items[1] = closure_6(require("components/Button/Button").Button, obj6);
  obj4.children = items;
  obj2.actions = closure_7(require("ButtonGroup").ButtonGroup, obj4);
  return closure_6(require("PromoSheet").PromoSheet, obj2);
}
