// === Module 15078: isOnMetaQuest ===

// Module 15078 (isOnMetaQuest)
import ActivityGamePlatforms from "ActivityGamePlatforms" /* 9888 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.ActivityGamePlatforms.META_QUEST;
};