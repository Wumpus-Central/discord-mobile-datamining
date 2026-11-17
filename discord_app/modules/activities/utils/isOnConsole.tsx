// === Module 15787: isOnConsole ===

// Module 15787 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15748 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15749 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};