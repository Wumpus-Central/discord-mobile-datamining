// === Module 14143: isOnConsole ===

// Module 14143 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14108 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14109 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};