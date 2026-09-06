// discord_app/records/LinkRecord.tsx
import Record from "../lib/Record.tsx";

const Routes = fn(1074).Routes;
const prototype = function LinkRecord(arg0) {
  const tmp = new prototype(new.target, new.target);
  ({ id: tmp.id, path: tmp.path, inviteCode: tmp.inviteCode } = arg0);
  return tmp;
}.prototype;
class prototype extends tmp2 {}
prototype["fromPath"] = function fromPath(pathname) {
  if (typeof prototype === "function") {
    const tmp6 = new prototype(tmp, tmp2);
    ({ id: tmp6.id, path: tmp6.path, inviteCode: tmp6.inviteCode } = obj);
    return tmp6;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
  obj = { id: pathname, path: pathname };
};
prototype["fromInviteCode"] = function fromInviteCode(code) {
  const combined = "invite:" + code;
  if (typeof prototype === "function") {
    const tmp8 = new prototype(tmp, prototype, new.target, combined);
    tmp8.id = combined;
    tmp8.path = tmp4;
    tmp8.inviteCode = code;
    return tmp8;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("records/LinkRecord.tsx");

export default prototype;
export const LinkRecord = prototype;
