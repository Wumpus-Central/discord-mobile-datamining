// === Module 4272: createFromServer ===

// Module 4272 (createFromServer)
import toJSDefault from "toJS" /* 1931 */;

toJSDefault;
let GuildBoostSlotRecord;
class GuildBoostSlotRecord extends tmp2 {
  constructor(arg0) {
    tmp = new GuildBoostSlotRecord(new.target, new.target);
    // ThrowIfThisInitialized (0x7c)
    ({ id: tmp.id, subscriptionId: tmp.subscriptionId, premiumGuildSubscription: tmp.premiumGuildSubscription, canceled: tmp.canceled, cooldownEndsAt: tmp.cooldownEndsAt, subscription: tmp.subscription } = global);
    return tmp;
  }
}
const prototype = GuildBoostSlotRecord.prototype;
GuildBoostSlotRecord["createFromServer"] = function createFromServer(premium_guild_subscription, subscription) {
  ({ id, subscription_id } = premium_guild_subscription);
  let tmp2 = null;
  if (null != premium_guild_subscription.premium_guild_subscription) {
    const obj = { id: null, guildId: null };
    obj[0] = premium_guild_subscription.premium_guild_subscription.id;
    obj[1] = premium_guild_subscription.premium_guild_subscription.guild_id;
    tmp2 = obj;
  }
  ({ canceled, cooldown_ends_at } = premium_guild_subscription);
  if (typeof GuildBoostSlotRecord !== "function") {
    HermesBuiltin.throwTypeError();
  }
  const tmp3 = new GuildBoostSlotRecord("Trying to call a non-function", GuildBoostSlotRecord, new.target, id, subscription_id, tmp2, canceled, cooldown_ends_at);
  // ThrowIfThisInitialized (0x7c)
  tmp3.id = id;
  tmp3.subscriptionId = subscription_id;
  tmp3.premiumGuildSubscription = tmp2;
  tmp3.canceled = canceled;
  tmp3.cooldownEndsAt = cooldown_ends_at;
  tmp3.subscription = subscription;
  return tmp3;
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
const result = require("set").fileFinishedImporting("records/GuildBoostSlotRecord.tsx");

export default GuildBoostSlotRecord;