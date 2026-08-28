// === Module 14251: PasskeyUpsellFullModal ===

// Module 14251 (PasskeyUpsellFullModal)
import noopAll from "noop" /* 19 */;
import Modal from "Modal" /* 11439 */;
import getScreens from "getScreens" /* 14247 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14244 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  let obj = getScreens;
  const screens = obj.getScreens({ isModal: true });
  obj = { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL };
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};