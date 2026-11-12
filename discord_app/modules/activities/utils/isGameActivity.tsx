// === Module 10785: isGameActivity ===

// Module 10785 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 6006 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.ActivityTypes.PLAYING;
  }
  return tmp;
};