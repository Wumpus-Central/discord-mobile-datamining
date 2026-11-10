// === Module 15154: isOnConsole ===

// Module 15154 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15113 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15114 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};