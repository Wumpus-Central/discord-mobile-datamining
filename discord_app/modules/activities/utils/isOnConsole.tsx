// === Module 15128: isOnConsole ===

// Module 15128 (isOnConsole)
import isOnXboxDefault from "isOnXbox" /* 15087 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 15088 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};