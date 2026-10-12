// === Module 13162: isOnConsole ===

// Module 13162 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13125 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13126 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};