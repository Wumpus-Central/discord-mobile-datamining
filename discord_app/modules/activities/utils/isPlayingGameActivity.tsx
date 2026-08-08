// discord_app/modules/activities/utils/isPlayingGameActivity.tsx
import { XBOX_ACTIVITY_APPLICATION_ID as closure_2 } from "items3";
import { ActivityTypes } from "ME";
import { isEmbeddedActivity } from "isEmbeddedActivity.tsx";

const result = require("isEmbeddedActivity").fileFinishedImporting("modules/activities/utils/isPlayingGameActivity.tsx");

export default function isPlayingGameActivity(application_id) {
  let tmp = null != application_id;
  if (tmp) {
    let tmp2 = null != application_id.application_id;
    if (tmp2) {
      tmp2 = application_id.type === ActivityTypes.PLAYING;
    }
    if (tmp2) {
      tmp2 = !isEmbeddedActivity(application_id);
    }
    if (tmp2) {
      tmp2 = application_id.application_id !== closure_2;
    }
    tmp = tmp2;
  }
  return tmp;
};