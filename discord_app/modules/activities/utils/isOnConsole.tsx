// === Module 14092: isOnConsole ===

// Module 14092 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14057 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14058 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};