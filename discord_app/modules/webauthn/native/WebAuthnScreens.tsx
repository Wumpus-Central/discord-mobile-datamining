// === Module 14660: WebAuthnScreens ===

// Module 14660 (WebAuthnScreens)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1114 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14657 */;
import PasskeyUpsellViewDefault from "PasskeyUpsellView" /* 14661 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14663 */;
import PasskeyInitStepDefault from "PasskeyInitStep" /* 14668 */;
import WebAuthnEditStepDefault from "WebAuthnEditStep" /* 14673 */;
import WebAuthnRegisterStepDefault from "WebAuthnRegisterStep" /* 14674 */;
import WebAuthnNameStepDefault from "WebAuthnNameStep" /* 14677 */;
import WebAuthnSuccessStepDefault from "WebAuthnSuccessStep" /* 14678 */;
import size from "module_2" /* 2 */;

const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/webauthn/native/WebAuthnScreens.tsx");

export const getScreens = function getScreens(isModal) {
  isModal = isModal.isModal;
  obj = { [closure_1_3.MODAL_UPSELL]: obj };
  obj = {
    title: "",
    render() {
      return jsx(PasskeyUpsellViewDefault, {});
    }
  };
  obj = { title: null, render: null, headerLeft: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["0N1s81"]);
  obj.render = function render() {
    return jsx(PasskeyInitStepDefault, {});
  };
  let headerCloseButton;
  if (isModal) {
    let tmp2Result = NavigatorHeader;
    headerCloseButton = tmp2Result.getHeaderCloseButton(PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal);
  }
  obj.headerLeft = headerCloseButton;
  obj[WebAuthnScreens.INIT] = obj;
  const obj1 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(WebAuthnEditStepDefault, {});
    },
    title: null
  };
  const intl2 = util.intl;
  obj1.title = intl2.string(util.t.UBBwwF);
  obj[WebAuthnScreens.EDIT] = obj1;
  const obj2 = {
    render() {
      return jsx(WebAuthnRegisterStepDefault, {});
    },
    title: null
  };
  const intl3 = util.intl;
  obj2.title = intl3.string(util.t.vrOCCk);
  obj[WebAuthnScreens.REGISTER] = obj2;
  const obj3 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(WebAuthnNameStepDefault, {});
    },
    title: null,
    headerLeft: null
  };
  const intl4 = util.intl;
  obj3.title = intl4.string(util.t["cY/IOu"]);
  let headerCloseButton1;
  if (isModal) {
    tmp2Result = NavigatorHeader;
    headerCloseButton1 = tmp2Result.getHeaderCloseButton(PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal);
  }
  obj3.headerLeft = headerCloseButton1;
  obj[WebAuthnScreens.NAME] = obj3;
  const obj4 = {
    render() {
      return jsx(WebAuthnSuccessStepDefault, {});
    },
    title: null
  };
  const intl5 = util.intl;
  obj4.title = intl5.string(util.t["7wPZln"]);
  obj[WebAuthnScreens.SUCCESS] = obj4;
  return obj;
};