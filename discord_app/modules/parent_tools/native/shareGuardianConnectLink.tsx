// === Module 16727: shareGuardianConnectLink ===

// Module 16727 (shareGuardianConnectLink)
import util from "util" /* 1114 */;
import _modDef2537 from "module_2537" /* 2537 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7709 */;
import showShareActionSheet from "showShareActionSheet" /* 8922 */;
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
  obj2.message = intl.formatToPlainString(_modDef2537.lVD5Nd, { username, url: tmp });
  showShareActionSheet.showShareActionSheet(obj2, "Family Center Connect Guardian");
}