// discord_app/modules/messages/isSpam.tsx
import AutomodMessageUtils from "../guild_automod/AutomodMessageUtils.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const Constants = fn(1074);
({ UserFlags: c3, ChannelTypes: closure_4 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/isSpam.tsx");

export const isSpamSupported = function isSpamSupported(type) {
  let tmp = undefined !== type;
  if (tmp) {
    tmp = type.type !== constants2.DM;
  }
  return tmp;
};
export const isSpammer = function isSpammer(userId) {
  const user = UserStore.getUser(userId);
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
  const user = UserStore.getUser(author.author.id);
  let flag;
  if (user != null) {
    flag = user.hasFlag(constants.SPAMMER);
  }
  if (flag == null) {
    flag = false;
  }
  if (flag) {
    flag = !AutomodMessageUtils.isAutomodMessageRecord(author);
  }
  return flag;
};
