// discord_app/modules/activities/utils/isEmbeddedActivity.tsx
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return require("hasFlag.tsx")(arg0, ActivityFlags.EMBEDDED);
};