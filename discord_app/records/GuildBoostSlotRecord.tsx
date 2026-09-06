// === Module 4460: GuildBoostSlotRecord ===

// Module 4460 (GuildBoostSlotRecord)
import Record from "Record" /* 1386 */;

let GuildBoostSlotRecord;
class GuildBoostSlotRecord extends tmp2 {
  constructor(arg0) {
    tmp = new GuildBoostSlotRecord(new.target, new.target);
    ({ id: tmp.id, subscriptionId: tmp.subscriptionId, premiumGuildSubscription: tmp.premiumGuildSubscription, canceled: tmp.canceled, cooldownEndsAt: tmp.cooldownEndsAt, subscription: tmp.subscription } = global);
    return tmp;
  }
}
const prototype = GuildBoostSlotRecord.prototype;
GuildBoostSlotRecord["createFromServer"] = function createFromServer(premium_guild_subscription, subscription) {
  ({ id, subscription_id } = premium_guild_subscription);
  let tmp3 = null;
  if (null != premium_guild_subscription.premium_guild_subscription) {
    const obj = { id: premium_guild_subscription.premium_guild_subscription.id, guildId: premium_guild_subscription.premium_guild_subscription.guild_id };
    tmp3 = obj;
  }
  ({ canceled, cooldown_ends_at } = premium_guild_subscription);
  if (typeof GuildBoostSlotRecord === "function") {
    const tmp8 = new GuildBoostSlotRecord(tmp, tmp2, new.target, id, subscription_id, tmp3, canceled, cooldown_ends_at);
    tmp8.id = id;
    tmp8.subscriptionId = subscription_id;
    tmp8.premiumGuildSubscription = tmp3;
    tmp8.canceled = canceled;
    tmp8.cooldownEndsAt = cooldown_ends_at;
    tmp8.subscription = subscription;
    return tmp8;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
prototype["isOnCooldown"] = function isOnCooldown() {
  let tmp2 = null != this.cooldownEndsAt;
  if (tmp2) {
    const _Date = Date;
    const date = new Date(tmp.cooldownEndsAt);
    const _Date2 = Date;
    const time = date.getTime();
    tmp2 = time >= Date.now();
  }
  return tmp2;
};
prototype["isAvailable"] = function isAvailable() {
  const self = this;
  return null == this.premiumGuildSubscription && !self.isOnCooldown();
};
const size = fn(2);
const result = size.fileFinishedImporting("records/GuildBoostSlotRecord.tsx");

export default GuildBoostSlotRecord;