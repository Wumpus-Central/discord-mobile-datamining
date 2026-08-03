// === Module 12880: getGeoRestrictedGuilds ===

// Module 12880 (getGeoRestrictedGuilds)
import { Store } from "initialize";

let closure_0 = [];
class GeoRestrictedGuildStore extends Store {
}
GeoRestrictedGuildStore.prototype["getGeoRestrictedGuilds"] = function getGeoRestrictedGuilds() {
  return closure_0;
};
GeoRestrictedGuildStore.displayName = "GeoRestrictedGuildStore";
const geoRestrictedGuildStore = new GeoRestrictedGuildStore(require("dispatcher"), {
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