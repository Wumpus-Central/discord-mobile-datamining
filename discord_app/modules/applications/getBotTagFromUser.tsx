// discord_app/modules/applications/getBotTagFromUser.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ApplicationTypes from "ApplicationConstants.tsx";

const BotTagTypes = ApplicationTypes.BotTagTypes;
const result = obj132.fileFinishedImporting("modules/applications/getBotTagFromUser.tsx");

export const getBotTagTypeFromUser = function getBotTagTypeFromUser(user) {
  if (user.isSystemUser()) {
    let BOT = BotTagTypes.SYSTEM_DM;
  } else if (user.bot) {
    BOT = BotTagTypes.BOT;
  }
  return BOT;
};