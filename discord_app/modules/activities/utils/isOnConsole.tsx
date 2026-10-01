// === Module 12820: isOnConsole ===

// Module 12820 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 12785 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12786 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};