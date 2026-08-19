// === Module 9902: isGameActivity ===

// Module 9902 (isGameActivity)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const ActivityTypes = ME.ActivityTypes;
const result = obj132.fileFinishedImporting("modules/activities/utils/isGameActivity.tsx");

export default function isGameActivity(type) {
  let tmp = null != type;
  if (tmp) {
    tmp = type.type === ActivityTypes.PLAYING;
  }
  return tmp;
};