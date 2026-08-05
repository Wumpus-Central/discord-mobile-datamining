// discord_app/modules/webauthn/native/PasskeyUpsellPromoModal.tsx
import "noop";
import { WebAuthnScreens } from "WebAuthnScreens";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellPromoModal.tsx");

export default function PasskeyUpsellPromoModal(arg0) {
  let obj = require("WebAuthnScreens.tsx") /* getScreens */;
  obj = { name: WebAuthnScreens.NAME, params: null };
  obj = {};
  const screens = obj.getScreens({ isModal: true });
  const merged = Object.assign(arg0);
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj.name = intl.string(require("../../../intl/index.native.tsx") /* getSystemLocale */.t["8H5RmH"]);
  obj[1] = obj;
  const initialRouteStack = [obj];
  return jsx(require("../../../design/components/Modal/native/Modal.native.tsx") /* Modal */.Modal, { screens, initialRouteStack });
};