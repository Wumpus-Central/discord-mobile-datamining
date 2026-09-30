// === Module 12811: isOnConsole ===

// Module 12811 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 12776 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12777 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};