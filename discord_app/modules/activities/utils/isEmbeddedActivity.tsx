import { hasFlag } from "hasFlag.tsx";
// discord_app/modules/activities/utils/isEmbeddedActivity.tsx
import { ActivityFlags } from "ME";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlag(arg0, ActivityFlags.EMBEDDED);
};