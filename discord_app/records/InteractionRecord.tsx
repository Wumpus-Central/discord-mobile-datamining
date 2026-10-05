// discord_app/records/InteractionRecord.tsx
import Record from "../lib/Record.tsx";
import UserRecord from "UserRecord.tsx";
import size from "../../_runtime/metro/00002__.js";

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
