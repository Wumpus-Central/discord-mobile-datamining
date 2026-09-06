// discord_app/modules/premium/premium_group/records/SubscriptionGroupMemberRecord.tsx
import Record from "../../../../lib/Record.tsx";
import UserRecord from "../../../../records/UserRecord.tsx";

const SubscriptionMemberTypes = { PRIMARY: 1, [1]: "PRIMARY", MEMBER: 2, [2]: "MEMBER" };
let SubscriptionGroupMemberRecord;
class SubscriptionGroupMemberRecord extends tmp2 {
  constructor(arg0) {
    tmp2 = new SubscriptionGroupMemberRecord(tmp, new.target, new.target);
    tmp3 = new closure_0(global.user);
    tmp2.user = tmp3;
    ({ member_type: tmp2.member_type, accepted_at: tmp2.accepted_at } = global);
    return tmp2;
  }
}
const prototype = SubscriptionGroupMemberRecord.prototype;
SubscriptionGroupMemberRecord["createFromServer"] = function createFromServer(user) {
  if (typeof SubscriptionGroupMemberRecord === "function") {
    const tmp7 = new SubscriptionGroupMemberRecord(tmp, tmp2, new.target);
    const tmp12 = new UserRecord(user.user);
    tmp7.user = tmp12;
    ({ member_type: tmp7.member_type, accepted_at: tmp7.accepted_at } = user);
    return tmp7;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_group/records/SubscriptionGroupMemberRecord.tsx");

export default SubscriptionGroupMemberRecord;
export { SubscriptionMemberTypes };
