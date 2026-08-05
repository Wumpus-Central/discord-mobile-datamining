// discord_app/modules/messages/isSpam.tsx
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
    flag = !require("../guild_automod/AutomodMessageUtils.tsx") /* getDecisionOutcomeFromMessage */.isAutomodMessageRecord(author);
    const obj2 = require("../guild_automod/AutomodMessageUtils.tsx") /* getDecisionOutcomeFromMessage */;
  }
  return flag;
};