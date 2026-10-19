// === Module 14125: isOnConsole ===

// Module 14125 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14090 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14091 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};