// === Module 13682: isOnConsole ===

// Module 13682 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13647 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13648 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};