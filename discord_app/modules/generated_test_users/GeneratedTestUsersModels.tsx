// === Module 15458: GeneratedTestUsersModels ===

// Module 15458 (GeneratedTestUsersModels)
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

class GeneratedTestPoolRecord extends Record {
  constructor(arg0) {
    const tmp = new GeneratedTestPoolRecord(new.target, this);
    ({ pool_id: tmp.id, summary: tmp.summary, user_ids: tmp.userIds } = arg0);
    return tmp;
  }
  static fromServer(arg0) {
    if (typeof GeneratedTestPoolRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp5 = new GeneratedTestPoolRecord(tmp, tmp2);
      ({ pool_id: tmp5.id, summary: tmp5.summary, user_ids: tmp5.userIds } = arg0);
      return tmp5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  setPassword(password) {
    this.password = password;
    return this;
  }
}
const prototype = GeneratedTestPoolRecord.prototype;
const result = size.fileFinishedImporting("modules/generated_test_users/GeneratedTestUsersModels.tsx");

export { GeneratedTestPoolRecord };