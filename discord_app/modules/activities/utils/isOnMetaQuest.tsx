// discord_app/modules/activities/utils/isOnMetaQuest.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";

const ActivityGamePlatforms = ME.ActivityGamePlatforms;
const result = set.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.META_QUEST;
}
