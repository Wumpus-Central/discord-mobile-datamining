// === Module 13018: isOnMetaHorizon ===

// Module 13018 (isOnMetaHorizon)
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 1920 */;
import size from "module_2" /* 2 */;

let closure_0 = Constants2.META_PRESENCE_APPLICATION_ID;
const ActivityGamePlatforms = Constants.ActivityGamePlatforms;
const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaHorizon.tsx");

export default function isOnMetaHorizon(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  let tmp2 = application_id === closure_0;
  if (tmp2) {
    let platform;
    if (application_id != null) {
      platform = application_id.platform;
    }
    let tmp5 = platform === ActivityGamePlatforms.ANDROID;
    if (!tmp5) {
      let platform1;
      if (application_id != null) {
        platform1 = application_id.platform;
      }
      tmp5 = platform1 === tmp4.IOS;
    }
    tmp2 = tmp5;
  }
  return tmp2;
};