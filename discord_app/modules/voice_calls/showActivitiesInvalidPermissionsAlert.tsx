// === Module 10655: showActivitiesInvalidPermissionsAlert ===

// Module 10655 (showActivitiesInvalidPermissionsAlert)
const result = require("set").fileFinishedImporting("modules/voice_calls/showActivitiesInvalidPermissionsAlert.tsx");

export const showActivitiesInvalidPermissionsAlert = function showActivitiesInvalidPermissionsAlert() {
  let obj = importDefault(4532);
  obj = { title: null, body: null, hideActionSheet: false };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.otsg2R);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t["/Yx5qX"]);
  obj.show(obj);
};