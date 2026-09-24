// discord_app/records/InviteRecord.tsx
import _modDef4416 from "../../_runtime/metro/04416__.js";
import Record from "../lib/Record.tsx";
import UserRecord from "UserRecord.tsx";

let InviteRecord;
class InviteRecord extends tmp2 {
  constructor(arg0) {
    tmp4 = new InviteRecord(tmp3, tmp2, tmp, new.target);
    tmp5 = global.code || "";
    tmp4.code = tmp5;
    tmp4.temporary = global.temporary || false;
    tmp4.revoked = global.revoked || false;
    tmp4.uses = global.uses || 0;
    tmp4.maxUses = global.maxUses || 0;
    tmp4.maxAge = global.maxAge || 0;
    createdAt = global.createdAt;
    if (!createdAt) {
      tmp6 = globalThis;
      _Date = Date;
      tmp7 = new.target;
      tmp8 = new.target;
      createdAt = new Date();
    }
    tmp4.createdAt = createdAt;
    ({ channel: tmp4.channel, guild: tmp4.guild } = global);
    tmp9 = null;
    if (null != global.inviter) {
      inviter = global.inviter;
      tmp101 = inviter;
      if (!(inviter instanceof closure_2)) {
        tmp12 = new.target;
        tmp13 = new.target;
        tmp14 = inviter;
        tmp101 = new tmp10(inviter);
      }
      tmp9 = tmp101;
    }
    tmp4.inviter = tmp9;
    tmp4.targetType = global.targetType || null;
    tmp4.targetUser = global.targetUser || null;
    tmp4.targetApplication = global.targetApplication || null;
    tmp4.type = global.type || null;
    tmp4.flags = global.flags || 0;
    tmp4.roles = global.roles || [];
    return tmp4;
  }
}
const prototype = InviteRecord.prototype;
InviteRecord["createFromServer"] = function createFromServer(created_at) {
  const obj = {};
  const merged = Object.assign(created_at);
  ({ max_uses: obj.maxUses, max_age: obj.maxAge } = created_at);
  created_at = created_at.created_at;
  obj.createdAt = _modDef4416(created_at);
  ({
    target_type: obj.targetType,
    target_user: obj.targetUser,
    target_application: obj.targetApplication,
  } = created_at);
  return new InviteRecord(obj);
};
prototype["isExpired"] = function isExpired() {
  const maxAge = this.maxAge;
  if (maxAge > 0) {
    const obj = _modDef4416(tmp.createdAt);
    const _Date = Date;
    if (addResult.isBefore(Date.now())) {
      return true;
    }
    addResult = _modDef4416(tmp.createdAt).add(maxAge, "seconds");
  }
  return false;
};
prototype["getExpiresAt"] = function getExpiresAt() {
  const self = this;
  let num = Infinity;
  if (this.maxAge > 0) {
    const obj = _modDef4416(self.createdAt);
    num = _modDef4416(self.createdAt).add(self.maxAge, "seconds").toDate();
    const addResult = _modDef4416(self.createdAt).add(self.maxAge, "seconds");
  }
  return num;
};
prototype["toString"] = function toString() {
  return this.code;
};
const size = fn(2);
const result = size.fileFinishedImporting("records/InviteRecord.tsx");

export default InviteRecord;
