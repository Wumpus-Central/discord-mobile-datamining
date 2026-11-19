// === Module 14406: isOnConsole ===

// Module 14406 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14368 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14369 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};