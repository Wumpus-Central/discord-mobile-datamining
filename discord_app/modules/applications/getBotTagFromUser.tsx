// === Module 10583: getBotTagTypeFromUser ===

// Module 10583 (getBotTagTypeFromUser)
import set from "set" /* 2 */;
import ApplicationTypes from "ApplicationTypes" /* 4475 */;

const BotTagTypes = ApplicationTypes.BotTagTypes;
const result = set.fileFinishedImporting("modules/applications/getBotTagFromUser.tsx");

export const getBotTagTypeFromUser = function getBotTagTypeFromUser(user) {
  if (user.isSystemUser()) {
    let BOT = BotTagTypes.SYSTEM_DM;
  } else if (user.bot) {
    BOT = BotTagTypes.BOT;
  }
  return BOT;
};