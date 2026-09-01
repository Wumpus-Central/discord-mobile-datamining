// discord_app/modules/activities/utils/isOnConsole.tsx
import set from "../../../../_runtime/00002_set.js";
import isOnXboxDefault from "isOnXbox.tsx";
import isOnPlayStationDefault from "isOnPlayStation.tsx";

const result = set.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
}
