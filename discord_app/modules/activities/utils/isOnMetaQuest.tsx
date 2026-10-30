// discord_app/modules/activities/utils/isOnMetaQuest.tsx
import ActivityGamePlatforms from "../../../../discord_common/js/shared/shared-constants/ActivityGamePlatforms.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
}
