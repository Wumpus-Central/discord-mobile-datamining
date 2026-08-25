// === Module 14183: PasskeyUpsellFullModal ===

// Module 14183 (PasskeyUpsellFullModal)
import noopAll from "noop" /* 19 */;
import Modal from "Modal" /* 11497 */;
import getScreens from "getScreens" /* 14179 */;
import { WebAuthnScreens } from "WebAuthnScreens" /* 14176 */;
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