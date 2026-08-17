// discord_app/modules/activities/utils/isEmbeddedActivity.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import hasFlagDefault from "hasFlag.tsx";

const ActivityFlags = ME.ActivityFlags;
const result = set.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
};