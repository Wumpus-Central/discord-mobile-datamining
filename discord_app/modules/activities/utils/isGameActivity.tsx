// === Module 10933: isGameActivity ===

// Module 10933 (isGameActivity)
import ActivityTypes from "ActivityTypes" /* 5896 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.ActivityTypes.PLAYING;
  }
  return tmp;
};