// === Module 8767: showActivitiesInvalidPermissionsAlert ===

// Module 8767 (showActivitiesInvalidPermissionsAlert)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import setDefault from "set" /* 4832 */;

const result = set.fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  let obj = setDefault;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.otsg2R);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["/Yx5qX"]);
  obj.show(obj);
};