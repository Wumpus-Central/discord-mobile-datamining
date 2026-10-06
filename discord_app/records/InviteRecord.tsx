// === Module 8066: InviteRecord ===

// Module 8066 (InviteRecord)
import _modDef4467 from "module_4467" /* 4467 */;
import Record from "Record" /* 1392 */;
import UserRecord from "UserRecord" /* 1391 */;
import size from "module_2" /* 2 */;

let created_at;

class InviteRecord extends Record {
  constructor(code) {
    const tmp4 = new InviteRecord(tmp3, tmp2, tmp, this);
    const tmp5 = code.code || "";
    tmp4.code = tmp5;
    tmp4.temporary = code.temporary || false;
    tmp4.revoked = code.revoked || false;
    tmp4.uses = code.uses || 0;
    tmp4.maxUses = code.maxUses || 0;
    tmp4.maxAge = code.maxAge || 0;
    let createdAt = code.createdAt;
    if (!createdAt) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      createdAt = new Date();
    }
    tmp4.createdAt = createdAt;
    ({ channel: tmp4.channel, guild: tmp4.guild } = code);
    let tmp7 = null;
    if (null != code.inviter) {
      const inviter = code.inviter;
      let tmp82 = inviter;
      if (!(inviter instanceof UserRecord)) {
        const self3 = this;
        const self4 = this;
        tmp82 = new tmp8(inviter);
      }
      tmp7 = tmp82;
    }
    tmp4.inviter = tmp7;
    tmp4.targetType = code.targetType || null;
    tmp4.targetUser = code.targetUser || null;
    tmp4.targetApplication = code.targetApplication || null;
    tmp4.type = code.type || null;
    tmp4.flags = code.flags || 0;
    tmp4.roles = code.roles || [];
    return tmp4;
  }
  static createFromServer(created_at) {
    let tmp3;
    const obj = { createdAt: tmp3(created_at) };
    const merged = Object.assign(created_at);
    ({ max_uses: obj.maxUses, max_age: obj.maxAge } = created_at);
    created_at = created_at.created_at;
    ({ target_type: obj.targetType, target_user: obj.targetUser, target_application: obj.targetApplication } = created_at);
    tmp3 = _modDef4467;
    return new InviteRecord(obj);
  }
  isExpired() {
    const maxAge = this.maxAge;
    if (maxAge > 0) {
      const _Date = Date;
      const obj = _modDef4467(tmp.createdAt);
      const addResult = obj.add(maxAge, "seconds");
      if (addResult.isBefore(Date.now())) {
        return true;
      }
    }
    return false;
  }
  getExpiresAt() {
    const self = this;
    let num = Infinity;
    if (this.maxAge > 0) {
      const obj = _modDef4467(self.createdAt);
      const addResult = obj.add(self.maxAge, "seconds");
      num = addResult.toDate();
    }
    return num;
  }
  toString() {
    return this.code;
  }
}
const prototype = InviteRecord.prototype;
const result = size.fileFinishedImporting("records/InviteRecord.tsx");

export default InviteRecord;