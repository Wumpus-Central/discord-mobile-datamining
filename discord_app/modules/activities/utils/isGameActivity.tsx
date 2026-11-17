// === Module 14140: isGameActivity ===

// Module 14140 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 6066 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.ActivityTypes.PLAYING;
  }
  return tmp;
};