// === Module 7494: isEmbeddedActivity ===

// Module 7494 (isEmbeddedActivity)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import hasFlagDefault from "hasFlag" /* 6166 */;

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};