import "toJS";
import createdAt from "createdAt";

let prototype;
prototype = function InteractionRecord(name) {
  let name_localized;
  const tmp = new prototype(new.target, name, new.target);
  // ThrowIfThisInitialized (0x7c)
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
  let name_localized;
  const obj = {};
  const merged = Object.assign(user);
  let str = user.user;
  obj.user = new createdAt(str);
  if (typeof prototype !== "error") {
    str = "Trying to call a non-function";
    HermesBuiltin.throwTypeError();
  }
  const tmp4 = new prototype(str, user, createdAt);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp4.id, name: tmp4.name, type: tmp4.type, user: tmp4.user, name_localized } = obj);
  if (name_localized == null) {
    name_localized = obj.name;
  }
  tmp4.displayName = name_localized;
  return tmp4;
};
const result = require("set").fileFinishedImporting("records/InteractionRecord.tsx");

export default prototype;