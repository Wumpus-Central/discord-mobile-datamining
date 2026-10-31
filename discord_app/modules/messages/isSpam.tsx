// === Module 7686: isSpam ===

// Module 7686 (isSpam)
import AutomodMessageUtils from "AutomodMessageUtils" /* 7687 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
const Constants = fn(1072);
({ UserFlags: c3, ChannelTypes: closure_4 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/isSpam.tsx");

export function isSpamSupported(type) {
  let tmp = undefined !== type;
  if (tmp) {
    tmp = type.type !== constants2.DM;
  }
  return tmp;
}
export function isSpammer(userId) {
  const user = UserStore.getUser(userId);
  let flag;
  if (user != null) {
    flag = user.hasFlag(constants.SPAMMER);
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
}
export function isSpam(author) {
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
}