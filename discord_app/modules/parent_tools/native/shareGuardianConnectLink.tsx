// discord_app/modules/parent_tools/native/shareGuardianConnectLink.tsx
import util from "../../../intl/index.native.tsx";
import _modDef2396 from "../FamilyCenter.messages.js";
import FamilyCenterConstants from "../FamilyCenterConstants.tsx";
import showShareActionSheet from "../../action_sheet/native/showShareActionSheet.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let closure_3 = FamilyCenterConstants.FAMILY_CENTER_REQUEST_QR_CODE_URL;
const result = size.fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(stateFromStores, linkCode) {
  let username = stateFromStores.globalName;
  if (username == null) {
    username = stateFromStores.username;
  }
  const obj = { message: null };
  const intl = util.intl;
  obj.message = intl.formatToPlainString(_modDef2396.lVD5Nd, {
    username,
    url: closure_3(stateFromStores.id, linkCode),
  });
  obj.showShareActionSheet(obj, "Family Center Connect Guardian");
};
