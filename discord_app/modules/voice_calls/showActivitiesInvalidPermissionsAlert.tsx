import { set } from "../../actions/AlertActionCreators.tsx";
import { getSystemLocale } from "../../intl/index.native.tsx";
// discord_app/modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx
const result = require("set").fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  let obj = set;
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.otsg2R);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t["/Yx5qX"]);
  obj.show(obj);
};