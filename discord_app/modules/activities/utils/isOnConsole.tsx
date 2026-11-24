// === Module 14763: isOnConsole ===

// Module 14763 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14725 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14726 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};