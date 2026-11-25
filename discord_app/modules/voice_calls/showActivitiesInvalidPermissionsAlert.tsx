// === Module 10084: showActivitiesInvalidPermissionsAlert ===

// Module 10084 (showActivitiesInvalidPermissionsAlert)
import util from "util" /* 1112 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 6015 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export function showActivitiesInvalidPermissionsAlert() {
  const obj2 = { title: null, body: null, hideActionSheet: false };
  const intl = util.intl;
  obj2.title = intl.string(util.t.otsg2R);
  const intl2 = util.intl;
  obj2.body = intl2.string(util.t["/Yx5qX"]);
  AlertActionCreatorsDefault.show(obj2);
}