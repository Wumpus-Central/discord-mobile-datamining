// === Module 12134: isOnConsole ===

// Module 12134 (isOnConsole)
import obj132 from "obj132" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 12099 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12100 */;

const result = obj132.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};