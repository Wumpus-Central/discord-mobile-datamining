// === Module 4784: InteractionRecord ===

// Module 4784 (InteractionRecord)
import Record from "Record" /* 1386 */;
import UserRecord from "UserRecord" /* 1385 */;

const prototype = function InteractionRecord(name) {
  const tmp = new prototype(new.target, name, new.target);
  ({ id: tmp.id, name: tmp.name, type: tmp.type, user: tmp.user, name_localized } = name);
  if (name_localized == null) {
    name_localized = name.name;
  }
  tmp.displayName = name_localized;
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["createFromServer"] = function createFromServer(user) {
  const obj = {};
  const merged = Object.assign(user);
  user = user.user;
  obj.user = new UserRecord(user);
  if (typeof prototype === "function") {
    const tmp7 = new prototype(user, user, tmp2);
    ({ id: tmp7.id, name: tmp7.name, type: tmp7.type, user: tmp7.user, name_localized } = obj);
    if (name_localized == null) {
      name_localized = obj.name;
    }
    tmp7.displayName = name_localized;
    return tmp7;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  tmp2 = UserRecord;
  const tmp3 = new UserRecord(user);
};
const size = fn(2);
const result = size.fileFinishedImporting("records/InteractionRecord.tsx");

export default prototype;