// === Module 13067: isOnConsole ===

// Module 13067 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13032 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13033 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};