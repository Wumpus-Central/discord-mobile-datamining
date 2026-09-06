// discord_app/modules/activities/utils/isEmbeddedActivity.tsx
import Constants from "../../../Constants.tsx";
import hasFlagDefault from "hasFlag.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ActivityFlags = Constants.ActivityFlags;
const result = size.fileFinishedImporting("modules/activities/utils/isEmbeddedActivity.tsx");

export default function isEmbeddedActivity(arg0) {
  return hasFlagDefault(arg0, ActivityFlags.EMBEDDED);
}
