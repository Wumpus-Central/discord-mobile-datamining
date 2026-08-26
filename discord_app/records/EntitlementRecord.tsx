// === Module 4486: createFromServer ===

// Module 4486 (createFromServer)
import toJSDefault from "toJS" /* 1931 */;
import getPremiumPlanItemDefault from "getPremiumPlanItem" /* 4107 */;
import set from "set" /* 4491 */;
import closure_3 from "createFromServer" /* 4487 */;
import closure_4 from "createdAt" /* 1930 */;
import { EntitlementTypes } from "ME" /* 676 */;

require = arg1;
toJSDefault;
let EntitlementRecord;
class EntitlementRecord extends tmp2 {
  constructor(arg0) {
    tmp = new EntitlementRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp.id, skuId: tmp.skuId, applicationId: tmp.applicationId, user: tmp.user, userId: tmp.userId, gifterId: tmp.gifterId, type: tmp.type, branches: tmp.branches, startsAt: tmp.startsAt, endsAt: tmp.endsAt, subscriptionId: tmp.subscriptionId, subscriptionPlanId: tmp.subscriptionPlanId, parentId: tmp.parentId, consumed: tmp.consumed, giftCodeBatchId: tmp.giftCodeBatchId, giftStyle: tmp.giftStyle, guildId: tmp.guildId, deleted: tmp.deleted, sourceType: tmp.sourceType, fulfillmentStatus: tmp.fulfillmentStatus } = global);
    return tmp;
  }
}
const prototype = EntitlementRecord.prototype;
EntitlementRecord["createFromServer"] = function createFromServer(user) {
  ({ id, sku_id, application_id } = user);
  let tmp2 = null;
  if (null != user.user) {
    tmp2 = new closure_4(user.user);
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
    const fromServer = closure_3.createFromServer(user.sku);
    const tmp18 = closure_3;
  }
  let source_type = user.source_type;
  if (source_type == null) {
    source_type = null;
  }
  let fulfillment_status = user.fulfillment_status;
  if (fulfillment_status == null) {
    fulfillment_status = null;
  }
  if (typeof EntitlementRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp22 = new EntitlementRecord(str, tmp18, EntitlementRecord, new.target, id, sku_id, application_id, tmp2, user_id, gifter_user_id, type, branches, date, date1, subscription_id, id, parent_id, consumed, gift_code_batch_id, gift_style, guild_id, deleted, source_type);
  // ThrowIfThisInitialized (0x7c)
  tmp22.id = id;
  tmp22.skuId = sku_id;
  tmp22.applicationId = application_id;
  tmp22.user = tmp2;
  tmp22.userId = user_id;
  tmp22.gifterId = gifter_user_id;
  tmp22.type = type;
  tmp22.branches = branches;
  tmp22.startsAt = date;
  tmp22.endsAt = date1;
  tmp22.subscriptionId = subscription_id;
  tmp22.subscriptionPlanId = id;
  tmp22.parentId = parent_id;
  tmp22.consumed = consumed;
  tmp22.giftCodeBatchId = gift_code_batch_id;
  tmp22.giftStyle = gift_style;
  tmp22.guildId = guild_id;
  tmp22.deleted = deleted;
  tmp22.sourceType = source_type;
  tmp22.fulfillmentStatus = fulfillment_status;
  return tmp22;
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
        const value = get.get(self.skuId);
        if (null != value) {
          if (!value.premium) {
            return false;
          }
        }
        if (!obj.canInstallPremiumApplications(isPremiumWithFractionalPremiumOnly)) {
          return false;
        }
        obj = getPremiumPlanItemDefault;
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
  return this.fulfillmentStatus === set.EntitlementTenantFulfillmentStatus.FULFILLED;
};
const result = require("set").fileFinishedImporting("records/EntitlementRecord.tsx");

export default EntitlementRecord;