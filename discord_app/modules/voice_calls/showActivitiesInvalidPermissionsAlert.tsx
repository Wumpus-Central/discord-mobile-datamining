// discord_app/modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import getSystemLocale from "../../intl/index.native.tsx";
import obj132Default from "../../actions/AlertActionCreators.tsx";

const result = obj132.fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  const obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.otsg2R);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t["/Yx5qX"]);
  obj.show(obj);
};