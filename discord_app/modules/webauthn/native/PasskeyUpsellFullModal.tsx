// === Module 14940: PasskeyUpsellFullModal ===

// Module 14940 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 11465 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14936 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14933).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};