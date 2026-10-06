// discord_app/modules/parent_tools/native/shareGuardianConnectLink.tsx
import intl2 from "../../../intl/index.native.tsx";
import _modDef2521 from "../FamilyCenter.messages.js";
import FamilyCenterConstants from "../FamilyCenterConstants.tsx";
import showShareActionSheet2 from "../../action_sheet/native/showShareActionSheet.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = FamilyCenterConstants.FAMILY_CENTER_REQUEST_QR_CODE_URL;
const result = size.fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(stateFromStores, linkCode) {
  let intl;
  let username = stateFromStores.globalName;
  const tmp = closure_3(stateFromStores.id, linkCode);
  if (username == null) {
    username = stateFromStores.username;
  }
  const obj = { message: intl.formatToPlainString(_modDef2521.lVD5Nd, { username, url: tmp }) };
  const showShareActionSheet = showShareActionSheet2.showShareActionSheet;
  showShareActionSheet2;
  intl = intl2.intl;
  showShareActionSheet(obj, "Family Center Connect Guardian");
};
