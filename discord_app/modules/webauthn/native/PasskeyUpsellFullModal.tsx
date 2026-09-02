// === Module 14541: PasskeyUpsellFullModal ===

// Module 14541 (PasskeyUpsellFullModal)
import noopAll from "noop" /* 19 */;
import Modal from "Modal" /* 11724 */;
import getScreens from "getScreens" /* 14537 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14534 */;
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