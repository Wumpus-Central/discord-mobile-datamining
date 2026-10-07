// discord_app/stores/GeoRestrictedGuildStore.tsx
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";

let found = [];
const Store = initializeDefault.Store;
class GeoRestrictedGuildStore extends Store {}
GeoRestrictedGuildStore.prototype["getGeoRestrictedGuilds"] = function getGeoRestrictedGuilds() {
  return found;
};
GeoRestrictedGuildStore.displayName = "GeoRestrictedGuildStore";
const geoRestrictedGuildStore = new GeoRestrictedGuildStore(DispatcherDefault, {
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
    found = found.filter((id) => id.id !== guildId.guildId);
    found.push({
      id: guildId.guildId,
      name: guildId.name,
      icon: guildId.icon,
      unavailable: true,
      geo_restricted: true,
    });
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/GeoRestrictedGuildStore.tsx");

export default geoRestrictedGuildStore;
