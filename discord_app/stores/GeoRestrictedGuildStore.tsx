// === Module 13622: getGeoRestrictedGuilds ===

// Module 13622 (getGeoRestrictedGuilds)
import initializeDefault from "initialize" /* 586 */;
import dispatcherDefault from "dispatcher" /* 706 */;

let closure_0 = [];
const Store = initializeDefault.Store;
class GeoRestrictedGuildStore extends Store {
}
GeoRestrictedGuildStore.prototype["getGeoRestrictedGuilds"] = function getGeoRestrictedGuilds() {
  return closure_0;
};
GeoRestrictedGuildStore.displayName = "GeoRestrictedGuildStore";
const geoRestrictedGuildStore = new GeoRestrictedGuildStore(dispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(geoRestrictedGuilds) {
    geoRestrictedGuilds = geoRestrictedGuilds.geoRestrictedGuilds;
  },
  GUILD_DELETE: function handleDeleteGuild(guild) {
    guild = guild.guild;
    if (-1 === guild.findIndex((id) => id.id === user.id)) {
      return false;
    } else {
      guild = guild.filter((id) => id.id !== user.id);
    }
  },
  GUILD_GEO_RESTRICTED: function handleGeoRestrictGuild(guildId) {
    let found = guildId;
    found = found.filter((id) => id.id !== found.guildId);
    found.push({ id: guildId.guildId, name: guildId.name, icon: guildId.icon, unavailable: true, geo_restricted: true });
  }
});
const result = require("set").fileFinishedImporting("stores/GeoRestrictedGuildStore.tsx");

export default geoRestrictedGuildStore;