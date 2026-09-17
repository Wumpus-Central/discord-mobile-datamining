// === Module 14786: PasskeyUpsellFullModal ===

// Module 14786 (PasskeyUpsellFullModal)
import Modal from "Modal" /* 12080 */;
import WebAuthnScreens2 from "WebAuthnScreens" /* 14782 */;
import noop from "module_19" /* 19 */;

require = fn;
const WebAuthnScreens = fn(14779).WebAuthnScreens;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  const screens = WebAuthnScreens2.getScreens({ isModal: true });
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};