// discord_app/modules/activities/utils/isPlayingGameActivity.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import items3 from "../Constants.tsx";
import isEmbeddedActivityDefault from "isEmbeddedActivity.tsx";

let closure_2 = items3.XBOX_ACTIVITY_APPLICATION_ID;
const ActivityTypes = ME.ActivityTypes;
const result = set.fileFinishedImporting("modules/activities/utils/isPlayingGameActivity.tsx");

export default function isPlayingGameActivity(application_id) {
  let tmp = null != application_id;
  if (tmp) {
    let tmp2 = null != application_id.application_id;
    if (tmp2) {
      tmp2 = application_id.type === ActivityTypes.PLAYING;
    }
    if (tmp2) {
      tmp2 = !isEmbeddedActivityDefault(application_id);
    }
    if (tmp2) {
      tmp2 = application_id.application_id !== closure_2;
    }
    tmp = tmp2;
  }
  return tmp;
}
