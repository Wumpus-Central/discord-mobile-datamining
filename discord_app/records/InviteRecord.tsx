// === Module 8083: createFromServer ===

// Module 8083 (createFromServer)
import toJSDefault from "toJS" /* 1931 */;
import tDefault from "t" /* 3978 */;

toJSDefault;
let InviteRecord;
class InviteRecord extends tmp2 {
  constructor(arg0) {
    tmp2 = new InviteRecord(tmp, new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp3 = global.code || "";
    tmp2.code = tmp3;
    tmp2.temporary = global.temporary || false;
    tmp2.revoked = global.revoked || false;
    tmp2.uses = global.uses || 0;
    tmp2.maxUses = global.maxUses || 0;
    tmp2.maxAge = global.maxAge || 0;
    createdAt = global.createdAt;
    if (!createdAt) {
      tmp4 = globalThis;
      _Date = Date;
      tmp5 = new.target;
      tmp6 = new.target;
      createdAt = new Date();
    }
    tmp2.createdAt = createdAt;
    ({ channel: tmp2.channel, guild: tmp2.guild } = global);
    tmp2.inviter = global.inviter || null;
    tmp2.targetType = global.targetType || null;
    tmp2.targetUser = global.targetUser || null;
    tmp2.targetApplication = global.targetApplication || null;
    tmp2.type = global.type || null;
    tmp2.flags = global.flags || 0;
    tmp2.roles = global.roles || [];
    return tmp2;
  }
}
const prototype = InviteRecord.prototype;
InviteRecord["createFromServer"] = function createFromServer(created_at) {
  const obj = {};
  const merged = Object.assign(created_at);
  ({ max_uses: obj.maxUses, max_age: obj.maxAge } = created_at);
  created_at = created_at.created_at;
  obj.createdAt = tDefault(created_at);
  ({ target_type: obj.targetType, target_user: obj.targetUser, target_application: obj.targetApplication } = created_at);
  return new InviteRecord(obj);
};
prototype["isExpired"] = function isExpired() {
  const maxAge = this.maxAge;
  if (maxAge > 0) {
    const obj = tDefault(tmp.createdAt);
    const _Date = Date;
    if (addResult.isBefore(Date.now())) {
      return true;
    }
    addResult = tDefault(tmp.createdAt).add(maxAge, "seconds");
  }
  return false;
};
prototype["getExpiresAt"] = function getExpiresAt() {
  const self = this;
  let num = Infinity;
  if (this.maxAge > 0) {
    const obj = tDefault(self.createdAt);
    num = tDefault(self.createdAt).add(self.maxAge, "seconds").toDate();
    const addResult = tDefault(self.createdAt).add(self.maxAge, "seconds");
  }
  return num;
};
prototype["toString"] = function toString() {
  return this.code;
};
const result = require("set").fileFinishedImporting("records/InviteRecord.tsx");

export default InviteRecord;