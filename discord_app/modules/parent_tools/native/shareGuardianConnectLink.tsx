// discord_app/modules/parent_tools/native/shareGuardianConnectLink.tsx
import set from "../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../intl/index.native.tsx";
import messagesProxyDefault from "../FamilyCenter.messages.js";
import items from "../FamilyCenterConstants.tsx";
import showShareActionSheet from "../../action_sheet/native/showShareActionSheet.tsx";

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
