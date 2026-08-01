// === Module 4086: handleGuildBoostsUpdate ===

// Module 4086 (handleGuildBoostsUpdate)
import reset from "reset";
import { Store } from "initialize";

function handleGuildBoostsUpdate(guildBoostSlot) {
  guildBoostSlot = guildBoostSlot.guildBoostSlot;
  const obj = {};
  const merged = Object.assign(obj);
  obj[guildBoostSlot.id] = guildBoostSlot;
}
function handleSubscriptionStoreUpdate() {
  const obj = {};
  const values = Object.values(obj);
  for (const item10010 of values) {
    obj[item10010.id] = item10010;
    let tmp2 = subscriptionById;
    item10010.subscription = subscriptionById.getSubscriptionById(item10010.subscriptionId);
    continue;
  }
}
let c1 = false;
let c2 = false;
let closure_3 = {};
class GuildBoostSlotStore extends Store {
}
const prototype = GuildBoostSlotStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [reset];
  this.syncWith(items, handleSubscriptionStoreUpdate);
};
Object.defineProperty(prototype, "hasFetched", {
  get: function hasFetched() {
    return c1;
  },
  set: undefined
});
Object.defineProperty(prototype, "isFetching", {
  get: function isFetching() {
    return c2;
  },
  set: undefined
});
Object.defineProperty(prototype, "boostSlots", {
  get: function boostSlots() {
    return closure_3;
  },
  set: undefined
});
prototype["getGuildBoostSlot"] = function getGuildBoostSlot(arg0) {
  return table[arg0];
};
GuildBoostSlotStore.displayName = "GuildBoostSlotStore";
const guildBoostSlotStore = new GuildBoostSlotStore(require("dispatcher"), {
  GUILD_BOOST_SLOTS_FETCH: function handleGuildBoostsFetch() {
    let c2 = true;
  },
  GUILD_BOOST_SLOTS_FETCH_SUCCESS: function handleGuildBoostsFetchSuccess(guildBoostSlots) {
    guildBoostSlots = guildBoostSlots.guildBoostSlots;
    let closure_3 = {};
    const item = guildBoostSlots.forEach((id) => {
      closure_3[id.id] = id;
    });
    let c2 = false;
    let c1 = true;
  },
  GUILD_BOOST_SLOT_UPDATE_SUCCESS: handleGuildBoostsUpdate,
  GUILD_BOOST_SLOT_CREATE: handleGuildBoostsUpdate,
  GUILD_BOOST_SLOT_UPDATE: handleGuildBoostsUpdate,
  LOGOUT: function handleLogout() {
    let closure_3 = {};
    let c1 = false;
    let c2 = false;
  }
});
const result = require("dispatcher").fileFinishedImporting("stores/billing/GuildBoostSlotStore.tsx");

export default guildBoostSlotStore;