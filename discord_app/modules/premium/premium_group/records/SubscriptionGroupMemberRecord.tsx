// === Module 13315: SubscriptionGroupMemberRecord ===

// Module 13315 (SubscriptionGroupMemberRecord)
import Record from "Record" /* 1392 */;
import UserRecord from "UserRecord" /* 1391 */;
import size from "module_2" /* 2 */;

const SubscriptionMemberTypes = { PRIMARY: 1, [1]: "PRIMARY", MEMBER: 2, [2]: "MEMBER" };
class SubscriptionGroupMemberRecord extends Record {
  constructor(user) {
    const tmp2 = new SubscriptionGroupMemberRecord(tmp, new.target, this);
    tmp2.user = new UserRecord(user.user);
    ({ member_type: tmp2.member_type, accepted_at: tmp2.accepted_at } = user);
    new UserRecord(user.user);
    return tmp2;
  }
  static createFromServer(user) {
    if (typeof SubscriptionGroupMemberRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp5 = new SubscriptionGroupMemberRecord(tmp, tmp2, this);
      const self3 = this;
      const self4 = this;
      tmp5.user = new UserRecord(user.user);
      ({ member_type: tmp5.member_type, accepted_at: tmp5.accepted_at } = user);
      const tmp8 = new UserRecord(user.user);
      return tmp5;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  isPrimary() {
    return this.member_type === obj.PRIMARY;
  }
  isMember() {
    return this.member_type === obj.MEMBER && null != this.accepted_at;
  }
  isInvited() {
    return this.member_type === obj.MEMBER && null == this.accepted_at;
  }
}
const prototype = SubscriptionGroupMemberRecord.prototype;
const result = size.fileFinishedImporting("modules/premium/premium_group/records/SubscriptionGroupMemberRecord.tsx");

export default SubscriptionGroupMemberRecord;
export { SubscriptionMemberTypes };