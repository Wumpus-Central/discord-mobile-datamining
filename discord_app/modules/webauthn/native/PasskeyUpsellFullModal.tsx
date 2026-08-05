// discord_app/modules/webauthn/native/PasskeyUpsellFullModal.tsx
import "noop";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";
import { Modal } from "../../../design/components/Modal/native/Modal.native.tsx";
import { getScreens } from "WebAuthnScreens.tsx";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellFullModal.tsx");

export default function PasskeyUpsellFullModal() {
  let obj = getScreens /* getScreens */;
  const screens = obj.getScreens({ isModal: true });
  obj = { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL };
  return jsx(Modal /* Modal */.Modal, { screens, initialRouteName: WebAuthnScreens.MODAL_UPSELL });
};