// discord_app/modules/activities/utils/isOnConsole.tsx
import isOnXboxDefault from "isOnXbox.tsx";
import isOnPlayStationDefault from "isOnPlayStation.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXboxDefault(arg0) || isOnPlayStationDefault(arg0);
}
