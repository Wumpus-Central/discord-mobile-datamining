// === Module 7107: isEmbeddedActivity ===

// Module 7107 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(5808)(arg0, ActivityFlags.EMBEDDED);
};