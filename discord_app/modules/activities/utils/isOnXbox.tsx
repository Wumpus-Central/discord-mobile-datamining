// discord_app/modules/activities/utils/isOnXbox.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import items3 from "../Constants.tsx";

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