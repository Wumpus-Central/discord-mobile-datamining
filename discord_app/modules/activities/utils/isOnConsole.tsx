// discord_app/modules/activities/utils/isOnConsole.tsx
const result = require("set").fileFinishedImporting("modules/activities/utils/isOnConsole.tsx");

export default function isOnConsole(arg0) {
  return require("isOnXbox.tsx")(arg0) || require("isOnPlayStation.tsx")(arg0);
};