// discord_app/modules/webauthn/native/PasskeyUpsellFullModal.tsx
import Modal from "../../../design/components/Modal/native/Modal.native.tsx";
import WebAuthnScreens2 from "WebAuthnScreens.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

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
}
