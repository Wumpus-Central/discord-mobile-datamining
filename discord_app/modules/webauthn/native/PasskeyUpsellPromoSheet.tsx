// === Module 15967: PasskeyUpsellPromoSheet ===

// Module 15967 (PasskeyUpsellPromoSheet)
import FastImageDefault from "FastImage" /* 6156 */;
import NativeCeremoniesDefault from "NativeCeremonies" /* 6630 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 15966 */;
import PasskeyUpsellManagerDefault from "PasskeyUpsellManager" /* 15969 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const UserSettingsSections = fn(1085).UserSettingsSections;
const ContentDismissActionType = fn(2062).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PasswordlessUpsellPromoSheet() {
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { source: tmp(15968), style: { height: 190, width: 220, resizeMode: "contain" } };
    const tmp8 = closure_6(FastImageDefault, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  _require = noop.useRef(false);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    function registerPasskey() {
      if (!ref.current) {
        tmp.current = true;
        PasskeyUpsellManagerDefault.markDismissed(ContentDismissActionType.TAKE_ACTION);
        const result = PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellPromoSheet();
        const obj4 = {
          setRegistering() {

            },
          onRegisterSuccess(arg0) {
              ({ ticket, credential } = arg0);
              const obj2 = { screen: constants.WEBAUTHN_NAME, params: null };
              const obj3 = { ticket, credential, name: null };
              const intl = ref(1126).intl;
              obj3.name = intl.string(ref(1126).t["8H5RmH"]);
              obj2.params = obj3;
              ref(7093).openUserSettings(obj2);
            }
        };
        NativeCeremoniesDefault.registerPasskey(obj4).catch(() => {

        });
        const registerPasskeyResult = NativeCeremoniesDefault.registerPasskey(obj4);
      }
    }
    cResult[1] = registerPasskey;
    let tmp9 = registerPasskey;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function onCancel() {
      PasskeyUpsellManagerDefault.markDismissed(constants.USER_DISMISS);
      const result = PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellPromoSheet();
    }
    cResult[2] = onCancel;
    let tmp10 = onCancel;
  } else {
    tmp10 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.CjleBl);
    const tmpResult = tmp(1382);
    const intl2 = tmp(1126).intl;
    const string = intl2.string;
    let fn = tmp(1126).t;
    if (isIOSResult) {
      let stringResult1 = string(fn["7yxR9t"]);
    } else {
      stringResult1 = string(fn.d6uxJy);
    }
    fn = function f() {
      return PasskeyUpsellManagerDefault.markDismissed(constants.USER_DISMISS);
    };
    cResult[3] = stringResult;
    cResult[4] = stringResult1;
    cResult[5] = fn;
    isIOSResult = tmp(1382).isIOS();
  } else {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let obj3 = { size: "lg", onPress: tmp9, text: null };
      const intl3 = tmp(1126).intl;
      obj3.text = intl3.string(tmp(1126).t.NIFmCJ);
      const tmp19 = closure_6(tmp(5379).Button, obj3);
      cResult[6] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[6];
    }
    const _Symbol2 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      let obj4 = { illustration: first, title: cResult[3], description: cResult[4], onDismiss: cResult[5], actions: null };
      const obj5 = { children: null };
      const items = [tmp17, ];
      const obj6 = { size: "lg", variant: "secondary", onPress: tmp10, text: null };
      const intl4 = tmp(1126).intl;
      obj6.text = intl4.string(tmp(1126).t["7J6/nG"]);
      items[1] = closure_6(tmp(5379).Button, obj6);
      obj5.children = items;
      obj4.actions = closure_7(tmp(5958).ButtonGroup, obj5);
      const tmp23 = closure_6(tmp(10323).PromoSheet, obj4);
      cResult[7] = tmp23;
      let tmp20 = tmp23;
    } else {
      tmp20 = cResult[7];
    }
    return tmp20;
  }
  let obj = require("c");
}) : (function PasswordlessUpsellPromoSheet() {
  let obj = { source: require("module_15968"), style: { height: 190, width: 220, resizeMode: "contain" } };
  _require = noop.useRef(false);
  let obj2 = { illustration: closure_6(FastImageDefault, obj), title: null, description: null, onDismiss: null, actions: null };
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
          setRegistering() {

            },
          onRegisterSuccess(arg0) {
              ({ ticket, credential } = arg0);
              const obj2 = { screen: constants.WEBAUTHN_NAME, params: null };
              const obj3 = { ticket, credential, name: null };
              const intl = ref(1126).intl;
              obj3.name = intl.string(ref(1126).t["8H5RmH"]);
              obj2.params = obj3;
              ref(7093).openUserSettings(obj2);
            }
        };
        NativeCeremoniesDefault.registerPasskey(obj4).catch(() => {

        });
        const registerPasskeyResult = NativeCeremoniesDefault.registerPasskey(obj4);
      }
    },
    text: null
  };
  const intl3 = tmp4(1126).intl;
  obj5.text = intl3.string(require("util").t.NIFmCJ);
  const items = [closure_6(require("components/Button/Button").Button, obj5), ];
  const obj6 = {
    size: "lg",
    variant: "secondary",
    onPress: function onCancel() {
      PasskeyUpsellManagerDefault.markDismissed(constants.USER_DISMISS);
      const result = PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellPromoSheet();
    },
    text: null
  };
  const intl4 = tmp4(1126).intl;
  obj6.text = intl4.string(require("util").t["7J6/nG"]);
  items[1] = closure_6(require("components/Button/Button").Button, obj6);
  obj4.children = items;
  obj2.actions = closure_7(require("ButtonGroup").ButtonGroup, obj4);
  return closure_6(require("PromoSheet").PromoSheet, obj2);
});