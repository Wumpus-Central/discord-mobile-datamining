// discord_app/records/LinkRecord.tsx
import toJSDefault from "toJS" /* 1931 */;
import { Routes } from "ME" /* 676 */;

toJSDefault;
let prototype;
prototype = function LinkRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp.id, path: tmp.path, inviteCode: tmp.inviteCode } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {
}
prototype["fromPath"] = function fromPath(pathname) {
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp2 = new prototype("Trying to call a non-function", prototype);
  // ThrowIfThisInitialized (0x7c)
  ({ id: tmp2.id, path: tmp2.path, inviteCode: tmp2.inviteCode } = { id: pathname, path: pathname });
  return tmp2;
};
prototype["fromInviteCode"] = function fromInviteCode(code) {
  const combined = "invite:" + code;
  if (typeof prototype !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp4 = new prototype("Trying to call a non-function", prototype, new.target, combined);
  // ThrowIfThisInitialized (0x7c)
  tmp4.id = combined;
  tmp4.path = Routes.INVITE(code);
  tmp4.inviteCode = code;
  return tmp4;
};
const result = require("set").fileFinishedImporting("records/LinkRecord.tsx");

export default prototype;
export const LinkRecord = prototype;