import { isOnPlayStation } from "isOnPlayStation.tsx";
import { isOnXbox } from "isOnXbox.tsx";
// discord_app/modules/activities/utils/isOnConsole.tsx
const result = require("set").fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return isOnXbox(arg0) || isOnPlayStation(arg0);
};