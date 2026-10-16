// === Module 14020: isOnConsole ===

// Module 14020 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 13985 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 13986 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};