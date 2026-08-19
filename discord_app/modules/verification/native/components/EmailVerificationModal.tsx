// === Module 8562: closeModal ===

// Module 8562 (closeModal)
import _modDef8561 from "module_8561" /* 8561 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { resetChangeEmailStore } from "ChangeEmailFields" /* 8563 */;
import { VerificationModalScenes } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
function closeModal() {
  resetChangeEmailStore();
  _modDef8561.close();
}
const result = require("obj132").fileFinishedImporting("modules/verification/native/components/EmailVerificationModal.tsx");

export default function EmailVerificationModal(isChangeEmail) {
  isChangeEmail = isChangeEmail.isChangeEmail;
  importDefault = undefined;
  let first;
  let callback;
  let obj = isChangeEmail(first[17]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.verified;
  }
  if (flag == null) {
    flag = false;
  }
  const tmp4Result = importDefault(first[18])(flag);
  importDefault = tmp4Result;
  const tmp6 = callback(React.useState(), 2);
  first = tmp6[0];
  callback = tmp6[1];
  const items1 = [first, isChangeEmail, tmp4Result];
  if (!isChangeEmail) {
    let email;
    if (stateFromStores != null) {
      email = stateFromStores.email;
    }
    if (null != email) {
      obj = { screens: null, initialRouteName: null, headerBackTitle: null };
      obj[0] = tmp8;
      obj[1] = VerificationModalScenes.RESEND_EMAIL;
      const intl = tmp(tmp2[20]).intl;
      obj[2] = intl.string(tmp(tmp2[20]).t["13/7kX"]);
      return jsx(tmp(tmp2[19]).Navigator, { screens: null, initialRouteName: null, headerBackTitle: null });
    }
  }
  if (stateFromStores != null) {
    const verified = stateFromStores.verified;
  }
  const tmp4 = importDefault(first[18]);
};