// discord_app/modules/activities/utils/isOnConsole.tsx
import set from "set" /* 2 */;
import isOnXboxDefault from "isOnXbox" /* 12099 */;
import isOnPlayStationDefault from "isOnPlayStation" /* 12100 */;

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};