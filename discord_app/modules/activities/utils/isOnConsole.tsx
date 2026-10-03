// === Module 12860: isOnConsole ===

// Module 12860 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 12825 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12826 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};