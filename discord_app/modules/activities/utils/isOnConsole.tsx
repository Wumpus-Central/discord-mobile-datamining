// === Module 14256: isOnConsole ===

// Module 14256 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14221 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14222 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};