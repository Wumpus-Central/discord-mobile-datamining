// discord_app/modules/activities/utils/isEmbeddedActivity.tsx
import { ActivityFlags } from "ME";
import { hasFlag } from "hasFlag.tsx";

const result = require("set").fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlag(arg0, ActivityFlags.EMBEDDED);
};