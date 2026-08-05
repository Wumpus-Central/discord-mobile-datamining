// discord_app/modules/user_offers/records/UserDiscountOfferRecord.tsx
import "toJS";
import GuildFeatures from "GuildFeatures";

let DiscountUserUsageLimitIntervalTypes;
let SubscriptionIntervalTypes;
({ SubscriptionIntervalTypes, DiscountUserUsageLimitIntervalTypes } = GuildFeatures);
let closure_0 = { [DiscountUserUsageLimitIntervalTypes.DAY]: SubscriptionIntervalTypes.DAY, [DiscountUserUsageLimitIntervalTypes.WEEK]: SubscriptionIntervalTypes.DAY, [DiscountUserUsageLimitIntervalTypes.MONTH]: SubscriptionIntervalTypes.MONTH, [DiscountUserUsageLimitIntervalTypes.YEAR]: SubscriptionIntervalTypes.YEAR };
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
  let discount_id;
  let id;
  ({ id, discount_id } = discount);
  const obj = { id: discount.discount.id, planIds: discount.discount.plan_ids, userUsageLimitInterval: discount.discount.user_usage_limit_interval, userUsageLimitIntervalCount: discount.discount.user_usage_limit_interval_count, userUsageLimit: discount.discount.user_usage_limit, amount: discount.discount.amount };
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
  const tmp12 = new UserDiscountOfferRecord(str, _Date2, _Date, UserDiscountOfferRecord, new.target, id, discount_id, obj, user_id, date);
  // ThrowIfThisInitialized (0x7c)
  tmp12.id = id;
  tmp12.discountId = discount_id;
  tmp12.discount = obj;
  tmp12.userId = user_id;
  if (date == null) {
    date = null;
  }
  tmp12.appliedAt = date;
  if (date1 == null) {
    date1 = null;
  }
  tmp12.deletedAt = date1;
  if (date2 == null) {
    date2 = null;
  }
  tmp12.expiresAt = date2;
  return tmp12;
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
prototype["getFullIntervalCount"] = function getFullIntervalCount() {
  let num = 0;
  if (null != this.discount) {
    num = this.discount.userUsageLimit;
  }
  return num;
};
prototype["getDiscountInterval"] = function getDiscountInterval() {
  return this.discount.userUsageLimitInterval;
};
prototype["getApplicableSubscriptionInterval"] = function getApplicableSubscriptionInterval() {
  return table[this.getDiscountInterval(this)];
};
prototype["getIsMultiIntervalDiscount"] = function getIsMultiIntervalDiscount() {
  return this.getFullIntervalCount() > 1;
};
prototype["getApproximateDiscountAmountOff"] = function getApproximateDiscountAmountOff(arg0) {
  const discount = this.discount;
  let amount;
  if (discount != null) {
    amount = discount.amount;
  }
  if (null == amount) {
    return null;
  } else {
    const _parseFloat = parseFloat;
    const parsed = parseFloat(this.discount.amount);
    const _Number = Number;
    let rounded = null;
    if (!Number.isNaN(parsed)) {
      const _Math = Math;
      rounded = Math.round(arg0 * (1 - parsed / 100));
    }
    return rounded;
  }
};
const result = require("set").fileFinishedImporting("modules/user_offers/records/UserDiscountOfferRecord.tsx");

export default UserDiscountOfferRecord;