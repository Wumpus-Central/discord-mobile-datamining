// === Module 17100: shareGuardianConnectLink ===

// Module 17100 (shareGuardianConnectLink)
import util from "util" /* 1113 */;
import _modDef2664 from "module_2664" /* 2664 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7792 */;
import showShareActionSheet from "showShareActionSheet" /* 9010 */;
import size from "module_2" /* 2 */;

let closure_3 = FamilyCenterConstants.FAMILY_CENTER_REQUEST_QR_CODE_URL;
const result = size.fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export function shareGuardianConnectLink(stateFromStores, linkCode) {
  let username = stateFromStores.globalName;
  if (username == null) {
    username = stateFromStores.username;
  }
  const tmp = closure_3(stateFromStores.id, linkCode);
  const obj2 = { message: null };
  const intl = util.intl;
  obj2.message = intl.formatToPlainString(_modDef2664.lVD5Nd, { username, url: tmp });
  showShareActionSheet.showShareActionSheet(obj2, "Family Center Connect Guardian");
}