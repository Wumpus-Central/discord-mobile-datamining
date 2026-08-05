import { getAlertModalItemKey } from "../../../design/components/AlertModal/native/AlertModal.native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
// discord_app/modules/guild_sidebar/native/InvitesDisabledAlertModal.tsx
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("getAlertModalItemKey").fileFinishedImporting("modules/guild_sidebar/native/InvitesDisabledAlertModal.tsx");

export default function InvitesDisabledAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.LpUfEt);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.QRXqzO);
  obj = { children: null };
  obj = { text: null };
  const intl3 = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl3.string(getSystemLocale /* getSystemLocale */.t.BddRzS);
  obj[0] = jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertActionButton, { text: null }, "okay");
  obj[2] = jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertActions, { text: null });
  return jsx(getAlertModalItemKey /* getAlertModalItemKey */.AlertModal, { text: null });
};