// === Module 4455: GuildBoostSlotStore ===

// Module 4455 (GuildBoostSlotStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import SubscriptionStore from "SubscriptionStore" /* 4224 */;

function handleGuildBoostsUpdate(guildBoostSlot) {
  guildBoostSlot = guildBoostSlot.guildBoostSlot;
  const obj = {};
  const merged = Object.assign(closure_3);
  obj[guildBoostSlot.id] = guildBoostSlot;
  closure_3 = obj;
}
function handleSubscriptionStoreUpdate() {
  const obj = {};
  const values = Object.values(closure_3);
  for (const item10010 of values) {
    obj[item10010.id] = item10010;
    item10010.subscription = SubscriptionStore.getSubscriptionById(item10010.subscriptionId);
    continue;
  }
  closure_3 = obj;
}
let c1 = false;
let c2 = false;
let closure_3 = {};
const Store = initializeDefault.Store;
class GuildBoostSlotStore extends Store {
}
const prototype = GuildBoostSlotStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [SubscriptionStore];
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
  return closure_3[arg0];
};
GuildBoostSlotStore.displayName = "GuildBoostSlotStore";
const guildBoostSlotStore = new GuildBoostSlotStore(DispatcherDefault, {
  GUILD_BOOST_SLOTS_FETCH: function handleGuildBoostsFetch() {
    c2 = true;
  },
  GUILD_BOOST_SLOTS_FETCH_SUCCESS: function handleGuildBoostsFetchSuccess(guildBoostSlots) {
    guildBoostSlots = guildBoostSlots.guildBoostSlots;
    closure_3 = {};
    const item = guildBoostSlots.forEach((id) => {
      closure_1_3[id.id] = id;
    });
    c2 = false;
    c1 = true;
  },
  GUILD_BOOST_SLOT_UPDATE_SUCCESS: handleGuildBoostsUpdate,
  GUILD_BOOST_SLOT_CREATE: handleGuildBoostsUpdate,
  GUILD_BOOST_SLOT_UPDATE: handleGuildBoostsUpdate,
  LOGOUT: function handleLogout() {
    closure_3 = {};
    c1 = false;
    c2 = false;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/billing/GuildBoostSlotStore.tsx");

export default guildBoostSlotStore;