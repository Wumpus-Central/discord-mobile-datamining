// discord_app/modules/parent_tools/native/shareGuardianConnectLink.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../FamilyCenter.messages.js";
import items from "../FamilyCenterConstants.tsx";
import showShareActionSheet from "../../action_sheet/native/showShareActionSheet.tsx";

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