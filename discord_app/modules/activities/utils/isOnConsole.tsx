// === Module 13417: isOnConsole ===

// Module 13417 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13382 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13383 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};