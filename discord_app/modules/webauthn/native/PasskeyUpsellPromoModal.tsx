import { Modal } from "../../../design/components/Modal/native/Modal.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { getScreens } from "WebAuthnScreens.tsx";
// discord_app/modules/webauthn/native/PasskeyUpsellPromoModal.tsx
import "noop";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = getScreens /* getScreens */;
  obj = { name: WebAuthnScreens.NAME, params: null };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj.name = intl.string(getSystemLocale /* getSystemLocale */.t["8H5RmH"]);
  obj[1] = obj;
  const initialRouteStack = [obj];
  return jsx(Modal /* Modal */.Modal, { screens, initialRouteStack });
};