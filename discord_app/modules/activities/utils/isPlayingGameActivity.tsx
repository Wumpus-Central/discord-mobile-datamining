// === Module 9180: isPlayingGameActivity ===

// Module 9180 (isPlayingGameActivity)
import Constants from "Constants" /* 1074 */;
import Constants2 from "Constants" /* 1920 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7739 */;
import size from "module_2" /* 2 */;

let closure_2 = Constants2.XBOX_ACTIVITY_APPLICATION_ID;
const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isPlayingGameActivity.tsx");

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