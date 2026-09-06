// === Module 14878: shareGuardianConnectLink ===

// Module 14878 (shareGuardianConnectLink)
import util from "util" /* 1114 */;
import _modDef2396 from "module_2396" /* 2396 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7538 */;
import showShareActionSheet from "showShareActionSheet" /* 8361 */;
import size from "module_2" /* 2 */;

let closure_3 = FamilyCenterConstants.FAMILY_CENTER_REQUEST_QR_CODE_URL;
const result = size.fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(stateFromStores, linkCode) {
  let username = stateFromStores.globalName;
  if (username == null) {
    username = stateFromStores.username;
  }
  const obj = { message: null };
  const intl = util.intl;
  obj.message = intl.formatToPlainString(_modDef2396.lVD5Nd, { username, url: closure_3(stateFromStores.id, linkCode) });
  obj.showShareActionSheet(obj, "Family Center Connect Guardian");
};