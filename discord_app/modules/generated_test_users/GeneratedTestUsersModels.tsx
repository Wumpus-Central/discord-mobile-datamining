// discord_app/modules/generated_test_users/GeneratedTestUsersModels.tsx
import toJSDefault from "../../lib/Record.tsx";

toJSDefault;
let GeneratedTestPoolRecord;
class GeneratedTestPoolRecord extends tmp2 {
  constructor(arg0) {
    tmp = new GeneratedTestPoolRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    ({ pool_id: tmp.id, summary: tmp.summary, user_ids: tmp.userIds } = global);
    return tmp;
  }
}
GeneratedTestPoolRecord["fromServer"] = function fromServer(arg0) {
  if (typeof GeneratedTestPoolRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp2 = new GeneratedTestPoolRecord("Trying to call a non-function", GeneratedTestPoolRecord);
  // ThrowIfThisInitialized (0x7c)
  ({ pool_id: tmp2.id, summary: tmp2.summary, user_ids: tmp2.userIds } = arg0);
  return tmp2;
};
GeneratedTestPoolRecord.prototype["setPassword"] = function setPassword(closure_0) {
  this.password = closure_0;
  return this;
};
const result = require("set").fileFinishedImporting("modules/generated_test_users/GeneratedTestUsersModels.tsx");

export { GeneratedTestPoolRecord };
