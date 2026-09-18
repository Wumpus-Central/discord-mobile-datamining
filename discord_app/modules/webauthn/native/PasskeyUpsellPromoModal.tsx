// === Module 14883: PasskeyUpsellPromoModal ===

// Module 14883 (PasskeyUpsellPromoModal)
import util from "util" /* 1115 */;
import Modal from "Modal" /* 11451 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14876 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14873).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  const obj2 = { name: WebAuthnScreens.NAME, params: null };
  const obj3 = {};
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = util.intl;
  obj3.name = intl.string(util.t["8H5RmH"]);
  obj2.params = obj3;
  const initialRouteStack = [obj2];
  return jsx(Modal.Modal, { screens, initialRouteStack });
};