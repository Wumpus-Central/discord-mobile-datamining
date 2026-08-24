// === Module 9052: initialize ===

// Module 9052 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import fetchGuildAffinities from "fetchGuildAffinities" /* 9053 */;
import closure_2 from "createGuildRecordFromRust" /* 1910 */;

require = arg1;
let closure_3 = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
const PersistedStore = initializeDefault.PersistedStore;
class GuildAffinitiesStore extends PersistedStore {
}
const prototype = GuildAffinitiesStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_3 = arg0;
  }
  this.waitFor(closure_2);
};
prototype["getState"] = function getState() {
  return closure_3;
};
prototype["getGuildAffinity"] = function getGuildAffinity(guild_id) {
  return closure_3.guildAffinitiesByGuildId[guild_id];
};
Object.defineProperty(prototype, "affinities", {
  get: function affinities() {
    return closure_3.guildAffinities;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasRequestResolved", {
  get: function hasRequestResolved() {
    return 0 !== closure_3.lastFetched;
  },
  set: undefined
});
GuildAffinitiesStore.displayName = "GuildAffinitiesStore";
GuildAffinitiesStore.persistKey = "GuildAffinitiesStore";
const guildAffinitiesStore = new GuildAffinitiesStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (Date.now() - closure_3.lastFetched > 86400000) {
      const guildAffinities = fetchGuildAffinities.fetchGuildAffinities();
      const obj = fetchGuildAffinities;
    }
    return false;
  },
  LOAD_GUILD_AFFINITIES_SUCCESS: function handleLoadGuildAffinitiesSuccess(guildAffinities) {
    guildAffinities = guildAffinities.guildAffinities;
    closure_3.guildAffinities = [];
    closure_3.guildAffinitiesByGuildId = {};
    closure_3.lastFetched = Date.now();
    const item = guildAffinities.forEach((guild_id, index) => {
      guild_id = guild_id.guild_id;
      const obj = { score: guild_id.affinity, guildId: guild_id, index };
      closure_3.guildAffinitiesByGuildId[guild_id] = obj;
      const guildAffinities = closure_3.guildAffinities;
      guildAffinities.push(obj);
    });
  },
  LOGOUT: function handleLogout() {
    closure_3 = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
  }
});
const result = require("set").fileFinishedImporting("stores/GuildAffinitiesStore.tsx");

export default guildAffinitiesStore;