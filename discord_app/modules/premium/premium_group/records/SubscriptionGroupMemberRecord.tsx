// === Module 13062: createFromServer ===

// Module 13062 (createFromServer)
import toJSDefault from "toJS" /* 1931 */;
import closure_0 from "createdAt" /* 1930 */;

toJSDefault;
const obj = { PRIMARY: 1, [1]: "PRIMARY", MEMBER: 2, [2]: "MEMBER" };
let SubscriptionGroupMemberRecord;
class SubscriptionGroupMemberRecord extends tmp2 {
  constructor(arg0) {
    tmp2 = new SubscriptionGroupMemberRecord(tmp, new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    tmp3 = new closure_0(global.user);
    tmp2.user = tmp3;
    ({ member_type: tmp2.member_type, accepted_at: tmp2.accepted_at } = global);
    return tmp2;
  }
}
const prototype = SubscriptionGroupMemberRecord.prototype;
SubscriptionGroupMemberRecord["createFromServer"] = function createFromServer(user) {
  if (typeof SubscriptionGroupMemberRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp2 = new SubscriptionGroupMemberRecord("Trying to call a non-function", SubscriptionGroupMemberRecord, new.target);
  // ThrowIfThisInitialized (0x7c)
  tmp2.user = new closure_0(user.user);
  ({ member_type: tmp2.member_type, accepted_at: tmp2.accepted_at } = user);
  return tmp2;
};
prototype["isPrimary"] = function isPrimary() {
  return this.member_type === obj.PRIMARY;
};
prototype["isMember"] = function isMember() {
  let tmp = this.member_type === obj.MEMBER;
  if (tmp) {
    tmp = null != this.accepted_at;
  }
  return tmp;
};
prototype["isInvited"] = function isInvited() {
  let tmp = this.member_type === obj.MEMBER;
  if (tmp) {
    tmp = null == this.accepted_at;
  }
  return tmp;
};
const result = require("set").fileFinishedImporting("modules/premium/premium_group/records/SubscriptionGroupMemberRecord.tsx");

export default SubscriptionGroupMemberRecord;
export const SubscriptionMemberTypes = obj;