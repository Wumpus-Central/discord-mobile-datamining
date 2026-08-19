// discord_app/modules/webauthn/native/PasskeyUpsellFullModal.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import Modal from "../../../design/components/Modal/native/Modal.native.tsx";
import getScreens from "WebAuthnScreens.tsx";
import { WebAuthnScreens } from "../WebAuthnConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  let obj = getScreens;
  const screens = obj.getScreens({ isModal: true });
  obj = { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL };
  return jsx(Modal.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};