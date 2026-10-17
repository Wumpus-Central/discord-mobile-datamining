// === Module 14088: isOnConsole ===

// Module 14088 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14053 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14054 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};