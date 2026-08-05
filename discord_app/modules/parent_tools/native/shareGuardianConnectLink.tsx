// discord_app/modules/parent_tools/native/shareGuardianConnectLink.tsx
import { FAMILY_CENTER_REQUEST_QR_CODE_URL as closure_3 } from "items";

const result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(globalName, closure_2) {
  let username = globalName.globalName;
  if (username == null) {
    username = globalName.username;
  }
  let obj = require("../../action_sheet/native/showShareActionSheet.tsx") /* showShareActionSheet */;
  obj = { message: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[0] = intl.formatToPlainString(require("../FamilyCenter.messages.js").lVD5Nd, { username, url: callback(globalName.id, closure_2) });
  obj.showShareActionSheet(obj, "Family Center Connect Guardian");
};