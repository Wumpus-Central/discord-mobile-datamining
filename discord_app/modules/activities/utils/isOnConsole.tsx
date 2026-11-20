// === Module 14374: isOnConsole ===

// Module 14374 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14336 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14337 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};