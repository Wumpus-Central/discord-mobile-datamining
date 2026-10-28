// === Module 14582: isOnConsole ===

// Module 14582 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 14541 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 14542 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};