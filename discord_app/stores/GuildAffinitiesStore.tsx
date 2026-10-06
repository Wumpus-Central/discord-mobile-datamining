// === Module 8031: GuildAffinitiesStore ===

// Module 8031 (GuildAffinitiesStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import GuildAffinitiesActionCreators from "GuildAffinitiesActionCreators" /* 8032 */;
import GuildStore from "GuildStore" /* 2074 */;
import size from "module_2" /* 2 */;

let closure_3;

const _false = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
const PersistedStore = get_initializedDefault.PersistedStore;
class GuildAffinitiesStore extends PersistedStore {
  initialize(arg0) {
    if (null != arg0) {
      closure_3 = arg0;
    }
    this.waitFor(GuildStore);
  }
  getState() {
    return closure_3;
  }
  getGuildAffinity(guild_id) {
    return closure_3.guildAffinitiesByGuildId[guild_id];
  }
}
const prototype = GuildAffinitiesStore.prototype;
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
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (Date.now() - closure_3.lastFetched > 86400000) {
      const obj = GuildAffinitiesActionCreators;
      const guildAffinities = obj.fetchGuildAffinities();
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
};
const guildAffinitiesStore = new GuildAffinitiesStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/GuildAffinitiesStore.tsx");

export default guildAffinitiesStore;