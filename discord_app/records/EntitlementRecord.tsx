// discord_app/records/EntitlementRecord.tsx
import Constants from "../Constants.tsx";
import PremiumUtilsDefault from "../utils/PremiumUtils.tsx";
import EntitlementTenantFulfillmentStatus from "../../discord_common/js/shared/shared-constants/EntitlementTenantFulfillmentStatus.tsx";
import Record from "../lib/Record.tsx";
import SKURecord from "../modules/skus/SKURecord.tsx";
import UserRecord from "UserRecord.tsx";
import size from "../../_runtime/metro/00002__.js";

const EntitlementTypes = Constants.EntitlementTypes;
class EntitlementRecord extends Record {
  constructor(arg0) {
    const tmp = new EntitlementRecord(new.target, this);
    ({
      id: tmp.id,
      skuId: tmp.skuId,
      applicationId: tmp.applicationId,
      user: tmp.user,
      userId: tmp.userId,
      gifterId: tmp.gifterId,
      type: tmp.type,
      branches: tmp.branches,
      startsAt: tmp.startsAt,
      endsAt: tmp.endsAt,
      subscriptionId: tmp.subscriptionId,
      subscriptionPlanId: tmp.subscriptionPlanId,
      parentId: tmp.parentId,
      consumed: tmp.consumed,
      giftCodeBatchId: tmp.giftCodeBatchId,
      giftStyle: tmp.giftStyle,
      guildId: tmp.guildId,
      deleted: tmp.deleted,
      sourceType: tmp.sourceType,
      fulfillmentStatus: tmp.fulfillmentStatus,
      orbsReward: tmp.orbsReward,
    } = arg0);
    return tmp;
  }
  static createFromServer(user) {
    let application_id;
    let branches;
    let deleted;
    let gift_style;
    let gifter_user_id;
    let guild_id;
    let id;
    let sku_id;
    let type;
    let user_id;
    ({ id, sku_id, application_id } = user);
    let tmp2 = null;
    if (null != user.user) {
      const self = this;
      const self2 = this;
      tmp2 = new UserRecord(user.user);
    }
    ({ user_id, gifter_user_id, type, branches } = user);
    if (branches == null) {
      branches = [];
    }
    let date = null;
    if (null != user.starts_at) {
      const _Date = Date;
      const self3 = this;
      const self4 = this;
      date = new Date(user.starts_at);
    }
    let date1 = null;
    if (null != user.ends_at) {
      const _Date2 = Date;
      const self5 = this;
      const self6 = this;
      date1 = new Date(user.ends_at);
    }
    const subscription_id = user.subscription_id;
    let id1 = null;
    if (null != user.subscription_plan) {
      id1 = user.subscription_plan.id;
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
    const metadata = user.metadata;
    let orbs_reward;
    if (metadata != null) {
      orbs_reward = metadata.orbs_reward;
    }
    if (orbs_reward == null) {
      orbs_reward = null;
    }
    if (typeof EntitlementRecord === "function") {
      const self7 = this;
      const self8 = this;
      const tmp19 = new EntitlementRecord(
        tmp4,
        EntitlementRecord,
        this,
        id,
        sku_id,
        application_id,
        tmp2,
        user_id,
        gifter_user_id,
        type,
        branches,
        date,
        date1,
        subscription_id,
        id1,
        parent_id,
        consumed,
        gift_code_batch_id,
        gift_style,
        guild_id,
        deleted,
        source_type,
        fulfillment_status,
        orbs_reward,
      );
      tmp19.id = id;
      tmp19.skuId = sku_id;
      tmp19.applicationId = application_id;
      tmp19.user = tmp2;
      tmp19.userId = user_id;
      tmp19.gifterId = gifter_user_id;
      tmp19.type = type;
      tmp19.branches = branches;
      tmp19.startsAt = date;
      tmp19.endsAt = date1;
      tmp19.subscriptionId = subscription_id;
      tmp19.subscriptionPlanId = id1;
      tmp19.parentId = parent_id;
      tmp19.consumed = consumed;
      tmp19.giftCodeBatchId = gift_code_batch_id;
      tmp19.giftStyle = gift_style;
      tmp19.guildId = guild_id;
      tmp19.deleted = deleted;
      tmp19.sourceType = source_type;
      tmp19.fulfillmentStatus = fulfillment_status;
      tmp19.orbsReward = orbs_reward;
      return tmp19;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  isValid(isPremiumWithFractionalPremiumOnly, get) {
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
          const obj = PremiumUtilsDefault;
          if (!obj.canInstallPremiumApplications(isPremiumWithFractionalPremiumOnly)) {
            return false;
          }
        }
        const _Date = Date;
        const self2 = this;
        const self3 = this;
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
  }
  isFulfilled() {
    return this.fulfillmentStatus === EntitlementTenantFulfillmentStatus.EntitlementTenantFulfillmentStatus.FULFILLED;
  }
  isFulfillmentFailed() {
    return (
      this.fulfillmentStatus ===
      EntitlementTenantFulfillmentStatus.EntitlementTenantFulfillmentStatus.FULFILLMENT_FAILED
    );
  }
}
Object.defineProperty(EntitlementRecord.prototype, "isGiftable", {
  get: function isGiftable() {
    return this.type === EntitlementTypes.USER_GIFT && null == this.gifterId;
  },
  set: undefined,
});
const result = size.fileFinishedImporting("records/EntitlementRecord.tsx");

export default EntitlementRecord;
