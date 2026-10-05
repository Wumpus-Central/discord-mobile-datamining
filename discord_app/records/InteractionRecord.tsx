// === Module 5113: InteractionRecord ===

// Module 5113 (InteractionRecord)
import Record from "Record" /* 1392 */;
import UserRecord from "UserRecord" /* 1391 */;
import size from "module_2" /* 2 */;

class InteractionRecord extends Record {
  constructor(user) {
    let name_localized;
    const tmp = new InteractionRecord(new.target, user, this);
    ({ id: tmp.id, name: tmp.name, type: tmp.type, user: tmp.user, name_localized } = user);
    if (name_localized == null) {
      name_localized = user.name;
    }
    tmp.displayName = name_localized;
    return tmp;
  }
  static createFromServer(user) {
    let name_localized;
    const obj = { user: new UserRecord(user) };
    const merged = Object.assign(user);
    user = user.user;
    new UserRecord(user);
    if (typeof InteractionRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp5 = new InteractionRecord(user, user, UserRecord);
      ({ id: tmp5.id, name: tmp5.name, type: tmp5.type, user: tmp5.user, name_localized } = obj);
      if (name_localized == null) {
        name_localized = obj.name;
      }
      tmp5.displayName = name_localized;
      return tmp5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
}
const result = size.fileFinishedImporting("records/InteractionRecord.tsx");

export default InteractionRecord;