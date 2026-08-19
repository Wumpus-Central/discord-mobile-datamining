// discord_app/modules/activities/utils/isOnConsole.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import isOnXboxDefault from "isOnXbox.tsx";
import isOnPlayStationDefault from "isOnPlayStation.tsx";

const result = obj132.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
};