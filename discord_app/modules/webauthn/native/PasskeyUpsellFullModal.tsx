// === Module 14664: PasskeyUpsellFullModal ===

// Module 14664 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 11928 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14660 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14657).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  let obj = WebAuthnScreens2;
  const screens = obj.getScreens({ isModal: true });
  obj = { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL };
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};