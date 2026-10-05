// === Module 17735: EmojiRecord ===

// Module 17735 (EmojiRecord)
import Record from "Record" /* 1392 */;
import UserRecord from "UserRecord" /* 1391 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("records/EmojiRecord.tsx");
class EmojiRecord extends Record {
  constructor(user) {
    const tmp2 = new EmojiRecord(tmp, new.target, this);
    ({ id: tmp2.id, name: tmp2.name, managed: tmp2.managed, roles: tmp2.roles, requiredColons: tmp2.requiredColons } = user);
    tmp2.user = new UserRecord(user.user);
    ({ animated: tmp2.animated, available: tmp2.available } = user);
    new UserRecord(user.user);
    return tmp2;
  }
}

export default EmojiRecord;