// === Module 13330: isOnConsole ===

// Module 13330 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13295 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13296 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};