// === Module 14235: shareGuardianConnectLink ===

// Module 14235 (shareGuardianConnectLink)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2335 */;
import items from "items" /* 5297 */;
import showShareActionSheet from "showShareActionSheet" /* 9067 */;

let closure_3 = items.FAMILY_CENTER_REQUEST_QR_CODE_URL;
const result = obj132.fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(stateFromStores, linkCode) {
  let username = stateFromStores.globalName;
  if (username == null) {
    username = stateFromStores.username;
  }
  const obj = { message: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.formatToPlainString(messagesProxyDefault.lVD5Nd, { username, url: callback(stateFromStores.id, linkCode) });
  obj.showShareActionSheet(obj, "Family Center Connect Guardian");
};