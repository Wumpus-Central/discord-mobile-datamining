// === Module 9292: isPlayingGameActivity ===

// Module 9292 (isPlayingGameActivity)
import Constants from "Constants" /* 2018 */;
import ActivityTypes from "ActivityTypes" /* 5762 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7883 */;
import size from "module_2" /* 2 */;

let closure_3 = Constants.XBOX_ACTIVITY_APPLICATION_ID;
const result = size.fileFinishedImporting("modules/activities/utils/isPlayingGameActivity.tsx");

export default function isPlayingGameActivity(application_id) {
  let tmp = null != application_id;
  if (tmp) {
    let tmp2 = null != application_id.application_id;
    if (tmp2) {
      tmp2 = application_id.type === ActivityTypes.ActivityTypes.PLAYING;
    }
    if (tmp2) {
      tmp2 = !isEmbeddedActivityDefault(application_id);
    }
    if (tmp2) {
      tmp2 = application_id.application_id !== closure_3;
    }
    tmp = tmp2;
  }
  return tmp;
};