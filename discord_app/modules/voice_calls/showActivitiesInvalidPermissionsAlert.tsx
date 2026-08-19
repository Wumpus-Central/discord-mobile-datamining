// === Module 8730: showActivitiesInvalidPermissionsAlert ===

// Module 8730 (showActivitiesInvalidPermissionsAlert)
import obj132 from "obj132" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import obj132Default from "obj132" /* 4827 */;

const result = obj132.fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  const obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.otsg2R);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["/Yx5qX"]);
  obj.show(obj);
};