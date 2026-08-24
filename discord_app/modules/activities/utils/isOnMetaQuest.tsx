// === Module 12114: isOnMetaQuest ===

// Module 12114 (isOnMetaQuest)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;

const ActivityGamePlatforms = ME.ActivityGamePlatforms;
const result = set.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.META_QUEST;
};