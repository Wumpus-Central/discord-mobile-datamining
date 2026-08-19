// === Module 5231: isSpamSupported ===

// Module 5231 (isSpamSupported)
import getDecisionOutcomeFromMessage from "getDecisionOutcomeFromMessage" /* 5232 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

require = fn;
({ UserFlags: c3, ChannelTypes: c4 } = ME);
const result = require("obj132").fileFinishedImporting("modules/messages/isSpam.tsx");

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
  }
  return flag;
};