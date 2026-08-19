// === Module 14081: getScreens ===

// Module 14081 (getScreens)
import obj132 from "obj132" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import HeaderBackImage from "HeaderBackImage" /* 6314 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14078 */;
import _modDef14084 from "module_14084" /* 14084 */;

const WebAuthnScreens = WebAuthnScreens2.WebAuthnScreens;
const jsx = jsxProd.jsx;
const result = obj132.fileFinishedImporting("modules/webauthn/native/WebAuthnScreens.tsx");

export const getScreens = function getScreens(isModal) {
  isModal = isModal.isModal;
  const obj = { title: null, render: null, headerLeft: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["0N1s81"]);
  obj[1] = function render() {
    return callback2(callback(14089), {});
  };
  let headerCloseButton;
  if (isModal) {
    let tmp2Result = HeaderBackImage;
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
  const intl2 = getSystemLocale.intl;
  obj1[1] = intl2.string(getSystemLocale.t.UBBwwF);
  obj[WebAuthnScreens.EDIT] = obj1;
  const obj2 = {
    render() {
      return callback2(callback(14095), {});
    },
    title: null
  };
  const intl3 = getSystemLocale.intl;
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
  const intl4 = getSystemLocale.intl;
  obj3[1] = intl4.string(getSystemLocale.t["cY/IOu"]);
  let headerCloseButton1;
  if (isModal) {
    tmp2Result = HeaderBackImage;
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
  const intl5 = getSystemLocale.intl;
  obj4[1] = intl5.string(getSystemLocale.t["7wPZln"]);
  obj[WebAuthnScreens.SUCCESS] = obj4;
  return obj;
};