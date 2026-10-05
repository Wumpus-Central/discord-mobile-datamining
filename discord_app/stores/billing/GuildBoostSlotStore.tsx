// === Module 6908: GuildBoostSlotStore ===

// Module 6908 (GuildBoostSlotStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SubscriptionStore from "SubscriptionStore" /* 4534 */;
import size from "module_2" /* 2 */;

let closure_3;

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
const _false = {};
const Store = get_initializedDefault.Store;
class GuildBoostSlotStore extends Store {
  initialize() {
    const items = [SubscriptionStore];
    this.syncWith(items, handleSubscriptionStoreUpdate);
  }
  getGuildBoostSlot(arg0) {
    return closure_3[arg0];
  }
}
const prototype = GuildBoostSlotStore.prototype;
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
GuildBoostSlotStore.displayName = "GuildBoostSlotStore";
let obj = {
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
};
const guildBoostSlotStore = new GuildBoostSlotStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/billing/GuildBoostSlotStore.tsx");

export default guildBoostSlotStore;