// === Module 7417: isEmbeddedActivity ===

// Module 7417 (isEmbeddedActivity)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import hasFlagDefault from "hasFlag" /* 6110 */;

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};