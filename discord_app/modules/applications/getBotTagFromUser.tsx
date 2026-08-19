// === Module 9914: getBotTagTypeFromUser ===

// Module 9914 (getBotTagTypeFromUser)
import obj132 from "obj132" /* 2 */;
import ApplicationTypes from "ApplicationTypes" /* 4482 */;

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