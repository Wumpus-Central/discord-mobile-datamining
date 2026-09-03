// === Module 7984: createFromServer ===

// Module 7984 (createFromServer)
import toJSDefault from "toJS" /* 1935 */;
import closure_0 from "createFromServer" /* 7206 */;

toJSDefault;
let UserDiscountOfferRecord;
class UserDiscountOfferRecord extends tmp2 {
  constructor(arg0) {
    tmp = new UserDiscountOfferRecord(new.target, new.target, global);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp.id, discountId: tmp.discountId, discount: tmp.discount, userId: tmp.userId, appliedAt } = global);
    if (appliedAt == null) {
      appliedAt = null;
    }
    tmp.appliedAt = appliedAt;
    deletedAt = global.deletedAt;
    if (deletedAt == null) {
      deletedAt = null;
    }
    tmp.deletedAt = deletedAt;
    expiresAt = global.expiresAt;
    if (expiresAt == null) {
      expiresAt = null;
    }
    tmp.expiresAt = expiresAt;
    return tmp;
  }
}
const prototype = UserDiscountOfferRecord.prototype;
UserDiscountOfferRecord["createFromServer"] = function createFromServer(discount) {
  ({ id, discount_id } = discount);
  const fromServer = closure_0.createFromServer(discount.discount);
  const user_id = discount.user_id;
  let date = null;
  if (null != discount.applied_at) {
    let _Date = Date;
    date = new Date(discount.applied_at);
  }
  let date1 = null;
  if (null != discount.deleted_at) {
    let _Date2 = Date;
    _Date = new.target;
    date1 = new Date(discount.deleted_at);
  }
  let date2 = null;
  if (null != discount.expires_at) {
    _Date2 = Date;
    _Date = new.target;
    date2 = new Date(discount.expires_at);
  }
  if (typeof UserDiscountOfferRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp13 = new UserDiscountOfferRecord(str, _Date2, _Date, UserDiscountOfferRecord, new.target, id, discount_id, fromServer, user_id, date);
  // ThrowIfThisInitialized (0x7c)
  tmp13.id = id;
  tmp13.discountId = discount_id;
  tmp13.discount = fromServer;
  tmp13.userId = user_id;
  if (date == null) {
    date = null;
  }
  tmp13.appliedAt = date;
  if (date1 == null) {
    date1 = null;
  }
  tmp13.deletedAt = date1;
  if (date2 == null) {
    date2 = null;
  }
  tmp13.expiresAt = date2;
  return tmp13;
};
prototype["hasExpired"] = function hasExpired() {
  let tmp2 = null != this.expiresAt;
  if (tmp2) {
    const _Date = Date;
    const expiresAt = tmp.expiresAt;
    const timestamp = Date.now();
    tmp2 = timestamp > expiresAt.getTime();
  }
  return tmp2;
};
prototype["isApplied"] = function isApplied() {
  return null != this.appliedAt;
};
prototype["isDeleted"] = function isDeleted() {
  return null != this.deletedAt;
};
prototype["hasAcknowledged"] = function hasAcknowledged() {
  return null != this.expiresAt;
};
const result = require("set").fileFinishedImporting("modules/user_offers/records/UserDiscountOfferRecord.tsx");

export default UserDiscountOfferRecord;