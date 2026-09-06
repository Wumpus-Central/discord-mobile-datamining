// discord_app/modules/activities/utils/isGameActivity.tsx
import Constants from "../../../Constants.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ActivityTypes = Constants.ActivityTypes;
const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.PLAYING;
  }
  return tmp;
}
