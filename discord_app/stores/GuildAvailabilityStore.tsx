// === Module 4902: GuildAvailabilityStore ===

// Module 4902 (GuildAvailabilityStore)
import LoggerDefault from "Logger" /* 3 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import GuildStore from "GuildStore" /* 1979 */;

function handleConnectionOpen(unavailableGuilds) {
  new Set(unavailableGuilds.unavailableGuilds);
  if (unavailableGuilds.unavailableGuilds.length > 0) {
    const _HermesInternal = HermesInternal;
    logger.warn("" + unavailableGuilds.unavailableGuilds.length + " guilds are unavailable on connection open: " + unavailableGuilds.unavailableGuilds);
  }
}
function handleGuild(guild) {
  if (set.has(guild.guild.id)) {
    set.delete(guild.guild.id);
    const _HermesInternal = HermesInternal;
    logger.info("Guild has become available: " + guild.guild.id);
  } else {
    return false;
  }
}
const logger = new LoggerDefault("GuildAvailabilityStore");
const set = new Set();
const Store = initializeDefault.Store;
class GuildAvailabilityStore extends Store {
}
const prototype = GuildAvailabilityStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildStore);
};
prototype["isUnavailable"] = function isUnavailable(guildId) {
  let hasItem = null != guildId;
  if (hasItem) {
    hasItem = set.has(guildId);
  }
  return hasItem;
};
Object.defineProperty(prototype, "totalGuilds", {
  get: function totalGuilds() {
    return GuildStore.getGuildCount() + set.size;
  },
  set: undefined
});
Object.defineProperty(prototype, "totalUnavailableGuilds", {
  get: function totalUnavailableGuilds() {
    return set.size;
  },
  set: undefined
});
Object.defineProperty(prototype, "unavailableGuilds", {
  get: function unavailableGuilds() {
    return Array.from(set);
  },
  set: undefined
});
GuildAvailabilityStore.displayName = "GuildAvailabilityStore";
const guildAvailabilityStore = new GuildAvailabilityStore(DispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  GUILD_UNAVAILABLE: function handleGuildUnavailable(guildId) {
    if (set.has(guildId.guildId)) {
      return false;
    } else {
      const guild = GuildStore.getGuild(guildId.guildId);
      let str = "???";
      if (tmp4) {
        str = guild.name;
      }
      const _HermesInternal = HermesInternal;
      logger.warn("Guild has gone unavailable: " + guildId.guildId + " (" + str + ")");
      set.add(guildId.guildId);
      tmp4 = null != guild && null != guild.name;
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    if (true !== guild.guild.unavailable) {
      set.delete(guild.guild.id);
    }
  },
  GUILD_CREATE: handleGuild,
  GUILD_UPDATE: handleGuild,
  GUILD_GEO_RESTRICTED: function handleGuildGeoRestrict(guildId) {
    if (set.has(guildId.guildId)) {
      set.delete(guildId.guildId);
    } else {
      return false;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/GuildAvailabilityStore.tsx");

export default guildAvailabilityStore;