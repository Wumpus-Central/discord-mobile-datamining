// === Module 12781: isOnConsole ===

// Module 12781 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 12746 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12747 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};