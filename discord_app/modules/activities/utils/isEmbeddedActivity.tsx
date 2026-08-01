// === Module 6028: isEmbeddedActivity ===

// Module 6028 (isEmbeddedActivity)
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return importDefault(6029)(arg0, ActivityFlags.EMBEDDED);
};