// === Module 7681: GuildBoostSlotRecord ===

// Module 7681 (GuildBoostSlotRecord)
import Record from "Record" /* 1392 */;
import size from "module_2" /* 2 */;

class GuildBoostSlotRecord extends Record {
  constructor(arg0) {
    const tmp = new GuildBoostSlotRecord(new.target, this);
    ({ id: tmp.id, subscriptionId: tmp.subscriptionId, premiumGuildSubscription: tmp.premiumGuildSubscription, canceled: tmp.canceled, cooldownEndsAt: tmp.cooldownEndsAt, subscription: tmp.subscription } = arg0);
    return tmp;
  }
  static createFromServer(premium_guild_subscription, subscription) {
    let canceled;
    let cooldown_ends_at;
    let id;
    let subscription_id;
    ({ id, subscription_id } = premium_guild_subscription);
    let tmp3 = null;
    if (null != premium_guild_subscription.premium_guild_subscription) {
      tmp3 = { id: premium_guild_subscription.premium_guild_subscription.id, guildId: premium_guild_subscription.premium_guild_subscription.guild_id };
      const obj = { id: premium_guild_subscription.premium_guild_subscription.id, guildId: premium_guild_subscription.premium_guild_subscription.guild_id };
    }
    ({ canceled, cooldown_ends_at } = premium_guild_subscription);
    if (typeof GuildBoostSlotRecord === "function") {
      const self = this;
      const self2 = this;
      const tmp6 = new GuildBoostSlotRecord(tmp, GuildBoostSlotRecord, this, id, subscription_id, tmp3, canceled, cooldown_ends_at);
      tmp6.id = id;
      tmp6.subscriptionId = subscription_id;
      tmp6.premiumGuildSubscription = tmp3;
      tmp6.canceled = canceled;
      tmp6.cooldownEndsAt = cooldown_ends_at;
      tmp6.subscription = subscription;
      return tmp6;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  isOnCooldown() {
    let tmp2 = null != this.cooldownEndsAt;
    if (tmp2) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const _Date2 = Date;
      const date = new Date(tmp.cooldownEndsAt);
      const time = date.getTime();
      tmp2 = time >= Date.now();
    }
    return tmp2;
  }
  isAvailable() {
    const self = this;
    const tmp = null == this.premiumGuildSubscription && !self.isOnCooldown();
    return tmp;
  }
}
const prototype = GuildBoostSlotRecord.prototype;
const result = size.fileFinishedImporting("records/GuildBoostSlotRecord.tsx");

export default GuildBoostSlotRecord;