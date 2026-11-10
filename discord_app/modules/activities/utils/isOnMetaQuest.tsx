// === Module 15128: isOnMetaQuest ===

// Module 15128 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9834 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};