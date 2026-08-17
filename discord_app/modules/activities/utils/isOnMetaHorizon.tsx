// discord_app/modules/activities/utils/isOnMetaHorizon.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import items3 from "items3" /* 4481 */;

let closure_0 = items3.META_PRESENCE_APPLICATION_ID;
const ActivityGamePlatforms = ME.ActivityGamePlatforms;
const result = set.fileFinishedImporting("modules/activities/utils/isOnMetaHorizon.tsx");

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