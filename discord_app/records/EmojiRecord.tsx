// === Module 17563: EmojiRecord ===

// Module 17563 (EmojiRecord)
import Record from "Record" /* 1386 */;
import UserRecord from "UserRecord" /* 1385 */;

const size = fn(2);
const result = size.fileFinishedImporting("records/EmojiRecord.tsx");
const prototype = function EmojiRecord(user) {
  const tmp2 = new prototype(tmp, new.target, new.target);
  ({ id: tmp2.id, name: tmp2.name, managed: tmp2.managed, roles: tmp2.roles, requiredColons: tmp2.requiredColons } = user);
  tmp2.user = new UserRecord(user.user);
  ({ animated: tmp2.animated, available: tmp2.available } = user);
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}

export default prototype;