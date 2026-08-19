// === Module 11465: InvitesDisabledAlertModal ===

// Module 11465 (InvitesDisabledAlertModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4660 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
noopAll;
const result = require("obj132").fileFinishedImporting("modules/guild_sidebar/native/InvitesDisabledAlertModal.tsx");

export default function InvitesDisabledAlertModal() {
  let obj = { title: null, content: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.LpUfEt);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.QRXqzO);
  obj = { text: null };
  const intl3 = getSystemLocale.intl;
  obj[0] = intl3.string(getSystemLocale.t.BddRzS);
  obj[0] = jsx(getAlertModalItemKey.AlertActionButton, { text: null }, "okay");
  obj[2] = jsx(getAlertModalItemKey.AlertActions, { text: null });
  return jsx(getAlertModalItemKey.AlertModal, { text: null });
};