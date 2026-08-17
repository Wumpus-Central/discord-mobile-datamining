// discord_app/modules/webauthn/native/WebAuthnScreens.tsx
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14078 */;
import _modDef14084 from "module_14084" /* 14084 */;

const WebAuthnScreens = WebAuthnScreens2.WebAuthnScreens;
const jsx = jsxProd.jsx;
const result = set.fileFinishedImporting("modules/webauthn/native/WebAuthnScreens.tsx");

export const getScreens = function getScreens(isModal) {
  isModal = isModal.isModal;
  obj = { [closure_3.MODAL_UPSELL]: obj };
  obj = {
    title: "",
    render() {
      return callback2(callback(14082), {});
    }
  };
  obj = { title: null, render: null, headerLeft: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["0N1s81"]);
  obj[1] = function render() {
    return callback2(callback(14089), {});
  };
  let headerCloseButton;
  if (isModal) {
    let tmp2Result = tmp2(6314);
    headerCloseButton = tmp2Result.getHeaderCloseButton(_modDef14084.closePasskeyUpsellModal);
  }
  obj[2] = headerCloseButton;
  obj[WebAuthnScreens.INIT] = obj;
  obj1 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(14094), {});
    },
    title: null
  };
  const intl2 = tmp2(1236).intl;
  obj1[1] = intl2.string(getSystemLocale.t.UBBwwF);
  obj[WebAuthnScreens.EDIT] = obj1;
  const obj2 = {
    render() {
      return callback2(callback(14095), {});
    },
    title: null
  };
  const intl3 = tmp2(1236).intl;
  obj2[1] = intl3.string(getSystemLocale.t.vrOCCk);
  obj[WebAuthnScreens.REGISTER] = obj2;
  const obj3 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(14098), {});
    },
    title: null,
    headerLeft: null
  };
  const intl4 = tmp2(1236).intl;
  obj3[1] = intl4.string(getSystemLocale.t["cY/IOu"]);
  let headerCloseButton1;
  if (isModal) {
    tmp2Result = tmp2(6314);
    headerCloseButton1 = tmp2Result.getHeaderCloseButton(_modDef14084.closePasskeyUpsellModal);
  }
  obj3[2] = headerCloseButton1;
  obj[WebAuthnScreens.NAME] = obj3;
  const obj4 = {
    render() {
      return callback2(callback(14099), {});
    },
    title: null
  };
  const intl5 = tmp2(1236).intl;
  obj4[1] = intl5.string(getSystemLocale.t["7wPZln"]);
  obj[WebAuthnScreens.SUCCESS] = obj4;
  return obj;
};