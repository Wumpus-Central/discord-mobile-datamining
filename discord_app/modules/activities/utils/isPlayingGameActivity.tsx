// discord_app/modules/activities/utils/isPlayingGameActivity.tsx
import Constants from "../Constants.tsx";
import ActivityTypes from "../../../../discord_common/js/shared/shared-constants/ActivityTypes.tsx";
import isEmbeddedActivityDefault from "isEmbeddedActivity.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
}
