// === Module 14323: isOnConsole ===

// Module 14323 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14288 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14289 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};