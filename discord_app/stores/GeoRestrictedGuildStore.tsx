// === Module 13556: GeoRestrictedGuildStore ===

// Module 13556 (GeoRestrictedGuildStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

let found = [];
const Store = get_initializedDefault.Store;
class GeoRestrictedGuildStore extends Store {
  getGeoRestrictedGuilds() {
    return found;
  }
}
const prototype = GeoRestrictedGuildStore.prototype;
GeoRestrictedGuildStore.displayName = "GeoRestrictedGuildStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen(geoRestrictedGuilds) {
    found = geoRestrictedGuilds.geoRestrictedGuilds;
  },
  GUILD_DELETE: function handleDeleteGuild(guild) {
    guild = guild.guild;
    if (-1 === found.findIndex((id) => id.id === guild.id)) {
      return false;
    } else {
      found = found.filter((id) => id.id !== guild.id);
    }
  },
  GUILD_GEO_RESTRICTED: function handleGeoRestrictGuild(guildId) {
    let closure_0 = guildId;
    found = found.filter((id) => id.id !== guildId.guildId);
    const obj = { id: guildId.guildId, name: guildId.name, icon: guildId.icon, unavailable: true, geo_restricted: true };
    found.push(obj);
  }
};
const geoRestrictedGuildStore = new GeoRestrictedGuildStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/GeoRestrictedGuildStore.tsx");

export default geoRestrictedGuildStore;