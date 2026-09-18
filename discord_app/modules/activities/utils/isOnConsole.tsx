// === Module 13283: isOnConsole ===

// Module 13283 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13248 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13249 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};