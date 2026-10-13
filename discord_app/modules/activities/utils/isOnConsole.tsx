// === Module 13644: isOnConsole ===

// Module 13644 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13609 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13610 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};