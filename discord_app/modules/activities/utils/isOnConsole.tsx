// === Module 12382: isOnConsole ===

// Module 12382 (isOnConsole)
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 9308 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 9309 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};