// === Module 14429: PasskeyUpsellFullModal ===

// Module 14429 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 10974 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14425 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14422).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};