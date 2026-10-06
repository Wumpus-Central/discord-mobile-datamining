// === Module 7745: UserDiscountOfferRecord ===

// Module 7745 (UserDiscountOfferRecord)
import Record from "Record" /* 1392 */;
import DiscountRecord from "DiscountRecord" /* 6973 */;
import size from "module_2" /* 2 */;

class UserDiscountOfferRecord extends Record {
  constructor(deletedAt) {
    let appliedAt;
    const tmp = new UserDiscountOfferRecord(new.target, this, deletedAt);
    ({ id: tmp.id, discountId: tmp.discountId, discount: tmp.discount, userId: tmp.userId, appliedAt } = deletedAt);
    if (appliedAt == null) {
      appliedAt = null;
    }
    tmp.appliedAt = appliedAt;
    deletedAt = deletedAt.deletedAt;
    if (deletedAt == null) {
      deletedAt = null;
    }
    tmp.deletedAt = deletedAt;
    let expiresAt = deletedAt.expiresAt;
    if (expiresAt == null) {
      expiresAt = null;
    }
    tmp.expiresAt = expiresAt;
    return tmp;
  }
  static createFromServer(discount) {
    let _Date;
    let discount_id;
    let id;
    let self;
    ({ id, discount_id } = discount);
    const fromServer = DiscountRecord.createFromServer(discount.discount);
    const user_id = discount.user_id;
    let date = null;
    if (null != discount.applied_at) {
      self = Date;
      const self2 = this;
      const self3 = this;
      date = new Date(discount.applied_at);
    }
    let date1 = null;
    if (null != discount.deleted_at) {
      _Date = Date;
      self = this;
      const self4 = this;
      date1 = new Date(discount.deleted_at);
    }
    let date2 = null;
    if (null != discount.expires_at) {
      _Date = Date;
      self = this;
      const self5 = this;
      date2 = new Date(discount.expires_at);
    }
    if (typeof UserDiscountOfferRecord === "function") {
      const self6 = this;
      const self7 = this;
      const tmp11 = new UserDiscountOfferRecord(tmp5, _Date, self, UserDiscountOfferRecord, this, id, discount_id, fromServer, user_id, date);
      tmp11.id = id;
      tmp11.discountId = discount_id;
      tmp11.discount = fromServer;
      tmp11.userId = user_id;
      if (date == null) {
        date = null;
      }
      tmp11.appliedAt = date;
      if (date1 == null) {
        date1 = null;
      }
      tmp11.deletedAt = date1;
      if (date2 == null) {
        date2 = null;
      }
      tmp11.expiresAt = date2;
      return tmp11;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  hasExpired() {
    let tmp2 = null != this.expiresAt;
    if (tmp2) {
      const _Date = Date;
      const expiresAt = tmp.expiresAt;
      const timestamp = Date.now();
      tmp2 = timestamp > expiresAt.getTime();
    }
    return tmp2;
  }
  isApplied() {
    return null != this.appliedAt;
  }
  isDeleted() {
    return null != this.deletedAt;
  }
  hasAcknowledged() {
    return null != this.expiresAt;
  }
}
const prototype = UserDiscountOfferRecord.prototype;
const result = size.fileFinishedImporting("modules/user_offers/records/UserDiscountOfferRecord.tsx");

export default UserDiscountOfferRecord;