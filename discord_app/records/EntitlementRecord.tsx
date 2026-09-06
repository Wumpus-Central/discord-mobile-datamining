// === Module 7395: EntitlementRecord ===

// Module 7395 (EntitlementRecord)
import PremiumUtilsDefault from "PremiumUtils" /* 4218 */;
import EntitlementTenantFulfillmentStatus from "EntitlementTenantFulfillmentStatus" /* 7396 */;
import Record from "Record" /* 1386 */;
import SKURecord from "SKURecord" /* 5511 */;
import UserRecord from "UserRecord" /* 1385 */;

require = fn;
const EntitlementTypes = fn(1074).EntitlementTypes;
let EntitlementRecord;
class EntitlementRecord extends tmp2 {
  constructor(arg0) {
    tmp = new EntitlementRecord(new.target, new.target);
    ({ id: tmp.id, skuId: tmp.skuId, applicationId: tmp.applicationId, user: tmp.user, userId: tmp.userId, gifterId: tmp.gifterId, type: tmp.type, branches: tmp.branches, startsAt: tmp.startsAt, endsAt: tmp.endsAt, subscriptionId: tmp.subscriptionId, subscriptionPlanId: tmp.subscriptionPlanId, parentId: tmp.parentId, consumed: tmp.consumed, giftCodeBatchId: tmp.giftCodeBatchId, giftStyle: tmp.giftStyle, guildId: tmp.guildId, deleted: tmp.deleted, sourceType: tmp.sourceType, fulfillmentStatus: tmp.fulfillmentStatus } = global);
    return tmp;
  }
}
const prototype = EntitlementRecord.prototype;
EntitlementRecord["createFromServer"] = function createFromServer(user) {
  ({ id, sku_id, application_id } = user);
  let tmp2 = null;
  if (null != user.user) {
    tmp2 = new UserRecord(user.user);
  }
  ({ user_id, gifter_user_id, type, branches } = user);
  if (branches == null) {
    branches = [];
  }
  let date = null;
  if (null != user.starts_at) {
    const _Date = Date;
    date = new Date(user.starts_at);
  }
  let date1 = null;
  if (null != user.ends_at) {
    const _Date2 = Date;
    date1 = new Date(user.ends_at);
  }
  const subscription_id = user.subscription_id;
  id = null;
  if (null != user.subscription_plan) {
    id = user.subscription_plan.id;
  }
  let parent_id = null;
  if (null != user.parent_id) {
    parent_id = user.parent_id;
  }
  let consumed = null;
  if (null != user.consumed) {
    consumed = user.consumed;
  }
  let gift_code_batch_id = user.gift_code_batch_id;
  if (gift_code_batch_id == null) {
    gift_code_batch_id = null;
  }
  ({ gift_style, guild_id, deleted } = user);
  if (null != user.sku) {
    const fromServer = SKURecord.createFromServer(user.sku);
  }
  let source_type = user.source_type;
  if (source_type == null) {
    source_type = null;
  }
  let fulfillment_status = user.fulfillment_status;
  if (fulfillment_status == null) {
    fulfillment_status = null;
  }
  if (typeof EntitlementRecord === "function") {
    const tmp26 = new EntitlementRecord(tmp4, SKURecord, EntitlementRecord, new.target, id, sku_id, application_id, tmp2, user_id, gifter_user_id, type, branches, date, date1, subscription_id, id, parent_id, consumed, gift_code_batch_id, gift_style, guild_id, deleted, source_type);
    tmp26.id = id;
    tmp26.skuId = sku_id;
    tmp26.applicationId = application_id;
    tmp26.user = tmp2;
    tmp26.userId = user_id;
    tmp26.gifterId = gifter_user_id;
    tmp26.type = type;
    tmp26.branches = branches;
    tmp26.startsAt = date;
    tmp26.endsAt = date1;
    tmp26.subscriptionId = subscription_id;
    tmp26.subscriptionPlanId = id;
    tmp26.parentId = parent_id;
    tmp26.consumed = consumed;
    tmp26.giftCodeBatchId = gift_code_batch_id;
    tmp26.giftStyle = gift_style;
    tmp26.guildId = guild_id;
    tmp26.deleted = deleted;
    tmp26.sourceType = source_type;
    tmp26.fulfillmentStatus = fulfillment_status;
    return tmp26;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
Object.defineProperty(prototype, "isGiftable", {
  get: function isGiftable() {
    let tmp = this.type === EntitlementTypes.USER_GIFT;
    if (tmp) {
      tmp = null == this.gifterId;
    }
    return tmp;
  },
  set: undefined
});
prototype["isValid"] = function isValid(isPremiumWithFractionalPremiumOnly, get) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  const self = this;
  if (!this.isGiftable) {
    if (!self.deleted) {
      if (self.type === EntitlementTypes.PREMIUM_SUBSCRIPTION) {
        value = get.get(self.skuId);
        if (null != value) {
          if (!value.premium) {
            return false;
          }
        }
        if (!obj.canInstallPremiumApplications(isPremiumWithFractionalPremiumOnly)) {
          return false;
        }
        obj = PremiumUtilsDefault;
      }
      const _Date = Date;
      const date = new Date();
      if (null != self.startsAt) {
        if (date < self.startsAt) {
          return false;
        }
      }
      if (null != self.endsAt) {
        if (date >= self.endsAt) {
          return false;
        }
      }
      if (null != tmp) {
        if (0 === self.branches.length) {
          if (self.applicationId !== tmp) {
            return false;
          }
        } else {
          const branches = self.branches;
          if (!branches.includes(tmp)) {
            return false;
          }
        }
      }
      return true;
    }
  }
  return false;
};
prototype["isFulfilled"] = function isFulfilled() {
  return this.fulfillmentStatus === EntitlementTenantFulfillmentStatus.EntitlementTenantFulfillmentStatus.FULFILLED;
};
prototype["isFulfillmentFailed"] = function isFulfillmentFailed() {
  return this.fulfillmentStatus === EntitlementTenantFulfillmentStatus.EntitlementTenantFulfillmentStatus.FULFILLMENT_FAILED;
};
const size = fn(2);
const result = size.fileFinishedImporting("records/EntitlementRecord.tsx");

export default EntitlementRecord;