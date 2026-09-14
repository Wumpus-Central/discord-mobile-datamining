// discord_app/modules/webauthn/native/WebAuthnScreens.tsx
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import util from "../../../intl/index.native.tsx";
import NavigatorHeader from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
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
  const obj = { [closure_1_3.MODAL_UPSELL]: obj2 };
  const obj3 = { title: null, render: null, headerLeft: null };
  const intl = util.intl;
  obj3.title = intl.string(util.t["0N1s81"]);
  obj3.render = function render() {
    return jsx(PasskeyInitStepDefault, {});
  };
  let headerCloseButton;
  if (isModal) {
    headerCloseButton = NavigatorHeader.getHeaderCloseButton(
      PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal,
    );
    const tmp2Result = NavigatorHeader;
  }
  obj3.headerLeft = headerCloseButton;
  obj[WebAuthnScreens.INIT] = obj3;
  const obj4 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(WebAuthnEditStepDefault, {});
    },
    title: null,
  };
  const intl2 = util.intl;
  obj4.title = intl2.string(util.t.UBBwwF);
  obj[WebAuthnScreens.EDIT] = obj4;
  const obj5 = {
    render() {
      return jsx(WebAuthnRegisterStepDefault, {});
    },
    title: null,
  };
  const intl3 = util.intl;
  obj5.title = intl3.string(util.t.vrOCCk);
  obj[WebAuthnScreens.REGISTER] = obj5;
  const obj6 = {
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(WebAuthnNameStepDefault, {});
    },
    title: null,
    headerLeft: null,
  };
  const intl4 = util.intl;
  obj6.title = intl4.string(util.t["cY/IOu"]);
  let headerCloseButton1;
  if (isModal) {
    headerCloseButton1 = NavigatorHeader.getHeaderCloseButton(
      PasskeyUpsellActionCreatorsDefault.closePasskeyUpsellModal,
    );
    const tmp2Result2 = NavigatorHeader;
  }
  obj6.headerLeft = headerCloseButton1;
  obj[WebAuthnScreens.NAME] = obj6;
  const obj7 = {
    render() {
      return jsx(WebAuthnSuccessStepDefault, {});
    },
    title: null,
  };
  const intl5 = util.intl;
  obj7.title = intl5.string(util.t["7wPZln"]);
  obj[WebAuthnScreens.SUCCESS] = obj7;
  return obj;
};
