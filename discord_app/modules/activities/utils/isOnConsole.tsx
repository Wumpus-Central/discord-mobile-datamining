// === Module 13110: isOnConsole ===

// Module 13110 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13073 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13074 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};