// discord_app/modules/activities/utils/isGameActivity.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import ME from "../../../Constants.tsx";

const ActivityTypes = ME.ActivityTypes;
const result = obj132.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.PLAYING;
  }
  return tmp;
};