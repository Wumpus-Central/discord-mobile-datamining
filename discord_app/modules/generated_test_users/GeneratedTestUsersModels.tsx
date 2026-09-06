// discord_app/modules/generated_test_users/GeneratedTestUsersModels.tsx
import Record from "../../lib/Record.tsx";

let GeneratedTestPoolRecord;
class GeneratedTestPoolRecord extends tmp2 {
  constructor(arg0) {
    tmp = new GeneratedTestPoolRecord(new.target, new.target);
    ({ pool_id: tmp.id, summary: tmp.summary, user_ids: tmp.userIds } = global);
    return tmp;
  }
}
GeneratedTestPoolRecord["fromServer"] = function fromServer(arg0) {
  if (typeof GeneratedTestPoolRecord === "function") {
    const tmp7 = new GeneratedTestPoolRecord(tmp, tmp2);
    ({ pool_id: tmp7.id, summary: tmp7.summary, user_ids: tmp7.userIds } = arg0);
    return tmp7;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
GeneratedTestPoolRecord.prototype["setPassword"] = function setPassword(password) {
  this.password = password;
  return this;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/generated_test_users/GeneratedTestUsersModels.tsx");

export { GeneratedTestPoolRecord };
