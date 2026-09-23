// === Module 15215: shareGuardianConnectLink ===

// Module 15215 (shareGuardianConnectLink)
import util from "util" /* 1115 */;
import _modDef2484 from "module_2484" /* 2484 */;
import FamilyCenterConstants from "FamilyCenterConstants" /* 7866 */;
import showShareActionSheet from "showShareActionSheet" /* 8707 */;
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
  obj2.message = intl.formatToPlainString(_modDef2484.lVD5Nd, { username, url: tmp });
  showShareActionSheet.showShareActionSheet(obj2, "Family Center Connect Guardian");
};