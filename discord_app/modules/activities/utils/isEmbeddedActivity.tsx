// === Module 7847: isEmbeddedActivity ===

// Module 7847 (isEmbeddedActivity)
import Constants from "Constants" /* 1084 */;
import hasFlagDefault from "hasFlag" /* 7446 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};