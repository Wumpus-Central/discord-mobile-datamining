// discord_app/modules/parent_tools/native/shareGuardianConnectLink.tsx
import { FAMILY_CENTER_REQUEST_QR_CODE_URL as closure_3 } from "items";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { showShareActionSheet } from "../../action_sheet/native/showShareActionSheet.tsx";
import { messagesProxy } from "../FamilyCenter.messages.js";

const result = require("getSystemLocale").fileFinishedImporting("modules/parent_tools/native/shareGuardianConnectLink.tsx");

export const shareGuardianConnectLink = function shareGuardianConnectLink(globalName, closure_2) {
  let username = globalName.globalName;
  if (username == null) {
    username = globalName.username;
  }
  let obj = showShareActionSheet /* showShareActionSheet */;
  obj = { message: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.formatToPlainString(messagesProxy.lVD5Nd, { username, url: callback(globalName.id, closure_2) });
  obj.showShareActionSheet(obj, "Family Center Connect Guardian");
};