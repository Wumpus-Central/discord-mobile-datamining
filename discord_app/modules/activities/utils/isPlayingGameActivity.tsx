// === Module 9733: isPlayingGameActivity ===

// Module 9733 (isPlayingGameActivity)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import items3 from "items3" /* 4481 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7259 */;

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
};