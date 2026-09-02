// === Module 9400: isOnXbox ===

// Module 9400 (isOnXbox)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import items3 from "items3" /* 4506 */;

let closure_0 = items3.XBOX_ACTIVITY_APPLICATION_ID;
const ActivityGamePlatforms = ME.ActivityGamePlatforms;
const result = set.fileFinishedImporting("modules/activities/utils/isOnXbox.tsx");

export default function isOnXbox(application_id) {
  application_id = undefined;
  if (application_id != null) {
    application_id = application_id.application_id;
  }
  let tmp2 = application_id === closure_0;
  if (!tmp2) {
    let platform;
    if (application_id != null) {
      platform = application_id.platform;
    }
    tmp2 = platform === ActivityGamePlatforms.XBOX;
  }
  return tmp2;
};