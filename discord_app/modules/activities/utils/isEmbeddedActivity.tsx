// === Module 7739: isEmbeddedActivity ===

// Module 7739 (isEmbeddedActivity)
import Constants from "Constants" /* 1074 */;
import hasFlagDefault from "hasFlag" /* 7313 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};