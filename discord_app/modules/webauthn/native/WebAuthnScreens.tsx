// discord_app/modules/webauthn/native/WebAuthnScreens.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../intl/index.native.tsx";
import WebAuthnConstants from "../WebAuthnConstants.tsx";
import PasskeyUpsellViewDefault from "nav_steps/PasskeyUpsellView.tsx";
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators.tsx";
import PasskeyInitStepDefault from "nav_steps/PasskeyInitStep.tsx";
import WebAuthnEditStepDefault from "nav_steps/WebAuthnEditStep.tsx";
import WebAuthnRegisterStepDefault from "nav_steps/WebAuthnRegisterStep.tsx";
import WebAuthnNameStepDefault from "nav_steps/WebAuthnNameStep.tsx";
import WebAuthnSuccessStepDefault from "nav_steps/WebAuthnSuccessStep.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
    },
  };
  obj = { title: null, render: null, headerLeft: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["0N1s81"]);
  obj.render = function render() {
    return jsx(PasskeyInitStepDefault, {});
  };
  let headerCloseButton;
  if (isModal) {
    let tmp2Result = tmp2(5624);
    headerCloseButton = tmp2Result.getHeaderCloseButton(PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal);
  }
  obj.headerLeft = headerCloseButton;
  obj[WebAuthnScreens.INIT] = obj;
  const obj1 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(WebAuthnEditStepDefault, {});
    },
    title: null,
  };
  const intl2 = tmp2(1114).intl;
  obj1.title = intl2.string(util.t.UBBwwF);
  obj[WebAuthnScreens.EDIT] = obj1;
  const obj2 = {
    render() {
      return jsx(WebAuthnRegisterStepDefault, {});
    },
    title: null,
  };
  const intl3 = tmp2(1114).intl;
  obj2.title = intl3.string(util.t.vrOCCk);
  obj[WebAuthnScreens.REGISTER] = obj2;
  const obj3 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(WebAuthnNameStepDefault, {});
    },
    title: null,
    headerLeft: null,
  };
  const intl4 = tmp2(1114).intl;
  obj3.title = intl4.string(util.t["cY/IOu"]);
  let headerCloseButton1;
  if (isModal) {
    tmp2Result = tmp2(5624);
    headerCloseButton1 = tmp2Result.getHeaderCloseButton(PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal);
  }
  obj3.headerLeft = headerCloseButton1;
  obj[WebAuthnScreens.NAME] = obj3;
  const obj4 = {
    render() {
      return jsx(WebAuthnSuccessStepDefault, {});
    },
    title: null,
  };
  const intl5 = tmp2(1114).intl;
  obj4.title = intl5.string(util.t["7wPZln"]);
  obj[WebAuthnScreens.SUCCESS] = obj4;
  return obj;
};
