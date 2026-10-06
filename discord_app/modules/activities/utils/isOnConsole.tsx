// === Module 12879: isOnConsole ===

// Module 12879 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 12844 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12845 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  const tmp3 = isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
  return tmp3;
};