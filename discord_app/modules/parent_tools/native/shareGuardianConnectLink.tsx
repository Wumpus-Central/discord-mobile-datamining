// === Module 15156: shareGuardianConnectLink ===

// Module 15156 (shareGuardianConnectLink)
import util from "util" /* 1115 */;
import _modDef2482 from "module_2482" /* 2482 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7780 */;
import showShareActionSheet from "showShareActionSheet" /* 8632 */;
import size from "module_2" /* 2 */;

let closure_3 = FamilyCenterConstants.FAMILY_CENTER_REQUEST_QR_CODE_URL;
const result = size.fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(stateFromStores, linkCode) {
  let username = stateFromStores.globalName;
  if (username == null) {
    username = stateFromStores.username;
  }
  const tmp = closure_3(stateFromStores.id, linkCode);
  const obj2 = { message: null };
  const intl = util.intl;
  obj2.message = intl.formatToPlainString(_modDef2482.lVD5Nd, { username, url: tmp });
  showShareActionSheet.showShareActionSheet(obj2, "Family Center Connect Guardian");
};