// discord_app/stores/billing/GuildBoostSlotStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_0 from "SubscriptionStore.tsx";

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
const Store = initializeDefault.Store;
class GuildBoostSlotStore extends Store {}
const prototype = GuildBoostSlotStore.prototype;
prototype["initialize"] = function initialize() {
  const items = [closure_0];
  this.syncWith(items, handleSubscriptionStoreUpdate);
};
Object.defineProperty(prototype, "hasFetched", {
  get: function hasFetched() {
    return c1;
  },
  set: undefined,
});
Object.defineProperty(prototype, "isFetching", {
  get: function isFetching() {
    return c2;
  },
  set: undefined,
});
Object.defineProperty(prototype, "boostSlots", {
  get: function boostSlots() {
    return closure_3;
  },
  set: undefined,
});
prototype["getGuildBoostSlot"] = function getGuildBoostSlot(arg0) {
  return table[arg0];
};
GuildBoostSlotStore.displayName = "GuildBoostSlotStore";
const guildBoostSlotStore = new GuildBoostSlotStore(dispatcherDefault, {
  GUILD_BOOST_SLOTS_FETCH: function handleGuildBoostsFetch() {
    c2 = true;
  },
  GUILD_BOOST_SLOTS_FETCH_SUCCESS: function handleGuildBoostsFetchSuccess(guildBoostSlots) {
    guildBoostSlots = guildBoostSlots.guildBoostSlots;
    closure_3 = {};
    const item = guildBoostSlots.forEach((id) => {
      closure_3[id.id] = id;
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
  },
});
const result = require("set").fileFinishedImporting("stores/billing/GuildBoostSlotStore.tsx");

export default guildBoostSlotStore;
