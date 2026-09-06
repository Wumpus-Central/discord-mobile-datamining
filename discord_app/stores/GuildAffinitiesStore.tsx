// === Module 8345: GuildAffinitiesStore ===

// Module 8345 (GuildAffinitiesStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildAffinitiesActionCreators from "GuildAffinitiesActionCreators" /* 8346 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
let closure_3 = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
const PersistedStore = initializeDefault.PersistedStore;
class GuildAffinitiesStore extends PersistedStore {
}
const prototype = GuildAffinitiesStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    closure_3 = arg0;
  }
  this.waitFor(GuildStore);
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
const guildAffinitiesStore = new GuildAffinitiesStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (Date.now() - closure_3.lastFetched > 86400000) {
      const guildAffinities = GuildAffinitiesActionCreators.fetchGuildAffinities();
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
      closure_1_3.guildAffinitiesByGuildId[guild_id] = obj;
      const guildAffinities = closure_1_3.guildAffinities;
      guildAffinities.push(obj);
    });
  },
  LOGOUT: function handleLogout() {
    closure_3 = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/GuildAffinitiesStore.tsx");

export default guildAffinitiesStore;