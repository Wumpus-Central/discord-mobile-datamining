// === Module 16769: shareGuardianConnectLink ===

// Module 16769 (shareGuardianConnectLink)
import util from "util" /* 1113 */;
import _modDef2538 from "module_2538" /* 2538 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7716 */;
import showShareActionSheet from "showShareActionSheet" /* 8931 */;
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
  obj2.message = intl.formatToPlainString(_modDef2538.lVD5Nd, { username, url: tmp });
  showShareActionSheet.showShareActionSheet(obj2, "Family Center Connect Guardian");
}