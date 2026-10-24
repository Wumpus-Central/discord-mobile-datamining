// === Module 7812: isEmbeddedActivity ===

// Module 7812 (isEmbeddedActivity)
import Constants from "Constants" /* 1087 */;
import hasFlagDefault from "hasFlag" /* 7409 */;
import size from "module_2" /* 2 */;

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};