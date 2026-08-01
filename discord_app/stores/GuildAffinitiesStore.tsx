// === Module 8184: initialize ===

// Module 8184 (initialize)
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { PersistedStore } from "initialize";

const require = arg1;
let closure_3 = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
class GuildAffinitiesStore extends PersistedStore {
}
const prototype = GuildAffinitiesStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  if (null != arg0) {
    let closure_3 = arg0;
  }
  this.waitFor(createGuildRecordFromRust);
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
const guildAffinitiesStore = new GuildAffinitiesStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    if (Date.now() - closure_3.lastFetched > 86400000) {
      const guildAffinities = require(8185) /* fetchGuildAffinities */.fetchGuildAffinities();
      const obj = require(8185) /* fetchGuildAffinities */;
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
    let closure_3 = { guildAffinitiesByGuildId: {}, guildAffinities: [], lastFetched: 0 };
  }
});
const result = require("initialize").fileFinishedImporting("stores/GuildAffinitiesStore.tsx");

export default guildAffinitiesStore;