// === Module 9532: showActivitiesInvalidPermissionsAlert ===

// Module 9532 (showActivitiesInvalidPermissionsAlert)
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  const obj = { title: null, body: null, hideActionSheet: false };
  const intl = util.intl;
  obj.title = intl.string(util.t.otsg2R);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t["/Yx5qX"]);
  obj.show(obj);
};