// === Module 14667: PasskeyUpsellPromoModal ===

// Module 14667 (PasskeyUpsellPromoModal)
import util from "util" /* 1114 */;
import Modal from "Modal" /* 11928 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14660 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14657).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = { name: WebAuthnScreens.NAME, params: null };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = util.intl;
  obj.name = intl.string(util.t["8H5RmH"]);
  obj.params = obj;
  const initialRouteStack = [obj];
  return jsx(Modal.Modal, { screens, initialRouteStack });
};