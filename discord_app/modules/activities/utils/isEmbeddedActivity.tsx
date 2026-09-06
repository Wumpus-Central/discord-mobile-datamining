// === Module 7739: isEmbeddedActivity ===

// Module 7739 (isEmbeddedActivity)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import hasFlagDefault from "hasFlag" /* 7313 */;

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};