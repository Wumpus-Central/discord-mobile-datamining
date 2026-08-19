// === Module 12114: isOnMetaQuest ===

// Module 12114 (isOnMetaQuest)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;

const ActivityGamePlatforms = ME.ActivityGamePlatforms;
const result = obj132.fileFinishedImporting("modules/activities/utils/isOnMetaQuest.tsx");

export default function isOnMetaQuest(platform) {
  platform = undefined;
  if (platform != null) {
    platform = platform.platform;
  }
  return platform === ActivityGamePlatforms.META_QUEST;
};