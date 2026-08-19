// === Module 7259: isEmbeddedActivity ===

// Module 7259 (isEmbeddedActivity)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import hasFlagDefault from "hasFlag" /* 7260 */;

const ActivityFlags = ME.ActivityFlags;
const result = obj132.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};