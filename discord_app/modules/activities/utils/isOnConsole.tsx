// === Module 14318: isOnConsole ===

// Module 14318 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14283 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14284 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};