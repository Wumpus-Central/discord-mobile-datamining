// === Module 14707: shareGuardianConnectLink ===

// Module 14707 (shareGuardianConnectLink)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2368 */;
import items from "items" /* 7292 */;
import showShareActionSheet from "showShareActionSheet" /* 8647 */;

let closure_3 = items.FAMILY_CENTER_REQUEST_QR_CODE_URL;
const result = set.fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(globalName, linkCode) {
  let username = globalName.globalName;
  if (username == null) {
    username = globalName.username;
  }
  let obj = showShareActionSheet;
  obj = { message: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.formatToPlainString(messagesProxyDefault.lVD5Nd, { username, url: callback(globalName.id, linkCode) });
  obj.showShareActionSheet(obj, "Family Center Connect Guardian");
};