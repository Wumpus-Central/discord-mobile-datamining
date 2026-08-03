// === Module 5768: isSpamSupported ===

// Module 5768 (isSpamSupported)
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";

let c3;
let c4;
const require = arg1;
({ UserFlags: c3, ChannelTypes: c4 } = ME);
const result = require("getDecisionOutcomeFromMessage").fileFinishedImporting("modules/messages/isSpam.tsx");

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
    flag = !require(5769) /* getDecisionOutcomeFromMessage */.isAutomodMessageRecord(author);
    const obj2 = require(5769) /* getDecisionOutcomeFromMessage */;
  }
  return flag;
};