// === Module 7262: isSpamSupported ===

// Module 7262 (isSpamSupported)
import getDecisionOutcomeFromMessage from "getDecisionOutcomeFromMessage" /* 7263 */;
import closure_2 from "mergeGuildAvatar" /* 1921 */;
import ME from "ME" /* 673 */;

require = arg1;
({ UserFlags: c3, ChannelTypes: c4 } = ME);
const result = require("set").fileFinishedImporting("modules/messages/isSpam.tsx");

export const isSpamSupported = function isSpamSupported(type) {
  let tmp = undefined !== type;
  if (tmp) {
    tmp = type.type !== constants2.DM;
  }
  return tmp;
};
export const isSpammer = function isSpammer(userId) {
  const user = authStore.getUser(userId);
  let flag;
  if (user != null) {
    flag = user.hasFlag(constants.SPAMMER);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
export const isSpam = function isSpam(author) {
  const user = authStore.getUser(author.author.id);
  let flag;
  if (user != null) {
    flag = user.hasFlag(constants.SPAMMER);
  }
  if (flag == null) {
    flag = false;
  }
  if (flag) {
    flag = !getDecisionOutcomeFromMessage.isAutomodMessageRecord(author);
    const obj2 = getDecisionOutcomeFromMessage;
  }
  return flag;
};