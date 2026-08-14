// discord_app/modules/webauthn/native/WebAuthnScreens.tsx
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { PasskeyUpsellActionCreators } from "PasskeyUpsellActionCreators.tsx";

const result = require("PasskeyUpsellView").fileFinishedImporting("modules/webauthn/native/WebAuthnScreens.tsx");

export const getScreens = function getScreens(isModal) {
  isModal = isModal.isModal;
  obj = { [closure_3.MODAL_UPSELL]: obj };
  obj = {
    title: "",
    render() {
      return callback2(callback(14050), {});
    }
  };
  obj = { title: null, render: null, headerLeft: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t["0N1s81"]);
  obj[1] = function render() {
    return callback2(callback(14057), {});
  };
  let headerCloseButton;
  if (isModal) {
    let tmp2Result = tmp2(5331);
    headerCloseButton = tmp2Result.getHeaderCloseButton(PasskeyUpsellActionCreators.closePasskeyUpsellModal);
  }
  obj[2] = headerCloseButton;
  obj[WebAuthnScreens.INIT] = obj;
  const obj1 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(14062), {});
    },
    title: null
  };
  const intl2 = tmp2(1236).intl;
  obj1[1] = intl2.string(getSystemLocale.t.UBBwwF);
  obj[WebAuthnScreens.EDIT] = obj1;
  const obj2 = {
    render() {
      return callback2(callback(14063), {});
    },
    title: null
  };
  const intl3 = tmp2(1236).intl;
  obj2[1] = intl3.string(getSystemLocale.t.vrOCCk);
  obj[WebAuthnScreens.REGISTER] = obj2;
  const obj3 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(14066), {});
    },
    title: null,
    headerLeft: null
  };
  const intl4 = tmp2(1236).intl;
  obj3[1] = intl4.string(getSystemLocale.t["cY/IOu"]);
  let headerCloseButton1;
  if (isModal) {
    tmp2Result = tmp2(5331);
    headerCloseButton1 = tmp2Result.getHeaderCloseButton(PasskeyUpsellActionCreators.closePasskeyUpsellModal);
  }
  obj3[2] = headerCloseButton1;
  obj[WebAuthnScreens.NAME] = obj3;
  const obj4 = {
    render() {
      return callback2(callback(14067), {});
    },
    title: null
  };
  const intl5 = tmp2(1236).intl;
  obj4[1] = intl5.string(getSystemLocale.t["7wPZln"]);
  obj[WebAuthnScreens.SUCCESS] = obj4;
  return obj;
};