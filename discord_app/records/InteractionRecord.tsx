// discord_app/records/InteractionRecord.tsx
import toJSDefault from "toJS" /* 1931 */;
import closure_0 from "createdAt" /* 1930 */;

toJSDefault;
let prototype;
prototype = function InteractionRecord(name) {
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
  const obj = {};
  const merged = Object.assign(user);
  let str = user.user;
  obj.user = new closure_0(str);
  if (typeof prototype !== "function") {
    str = "Trying to call a non-function";
    HermesBuiltin.throwTypeError();
  }
  const tmp4 = new prototype(str, user, closure_0);
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