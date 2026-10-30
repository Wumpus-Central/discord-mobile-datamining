// discord_app/modules/activities/utils/isGameActivity.tsx
import ActivityTypes from "../../../../discord_common/js/shared/shared-constants/ActivityTypes.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.ActivityTypes.PLAYING;
  }
  return tmp;
}
