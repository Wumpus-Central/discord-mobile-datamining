// discord_app/modules/messages/isSpam.tsx
import getDecisionOutcomeFromMessage from "../guild_automod/AutomodMessageUtils.tsx";
import closure_2 from "../../stores/UserStore.tsx";
import ME from "../../Constants.tsx";

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
