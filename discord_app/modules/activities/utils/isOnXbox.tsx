// === Module 12099: isOnXbox ===

// Module 12099 (isOnXbox)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import items3 from "items3" /* 4481 */;

let closure_0 = items3.XBOX_ACTIVITY_APPLICATION_ID;
const ActivityGamePlatforms = ME.ActivityGamePlatforms;
const result = obj132.fileFinishedImporting("modules/activities/utils/isOnXbox.tsx");

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