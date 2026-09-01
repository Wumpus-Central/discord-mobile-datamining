// discord_app/stores/GuildAvailabilityStore.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import closure_0 from "GuildStore.tsx";
import set from "../../_runtime/00002_set.js";

function handleConnectionOpen(unavailableGuilds) {
  set = new Set(unavailableGuilds.unavailableGuilds);
  if (unavailableGuilds.unavailableGuilds.length > 0) {
    const _HermesInternal = HermesInternal;
    logger.warn(
      "" +
        unavailableGuilds.unavailableGuilds.length +
        " guilds are unavailable on connection open: " +
        unavailableGuilds.unavailableGuilds,
    );
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
let closure_1 = new timestampDefault("GuildAvailabilityStore");
let set = new Set();
const Store = initializeDefault.Store;
class GuildAvailabilityStore extends Store {}
const prototype = GuildAvailabilityStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_0);
};
prototype["isUnavailable"] = function isUnavailable(guildId, token, selected) {
  let hasItem = null != guildId;
  if (hasItem) {
    hasItem = set.has(guildId);
  }
  return hasItem;
};
Object.defineProperty(prototype, "totalGuilds", {
  get: function totalGuilds() {
    return store.getGuildCount() + set.size;
  },
  set: undefined,
});
Object.defineProperty(prototype, "totalUnavailableGuilds", {
  get: function totalUnavailableGuilds() {
    return set.size;
  },
  set: undefined,
});
Object.defineProperty(prototype, "unavailableGuilds", {
  get: function unavailableGuilds() {
    return Array.from(set);
  },
  set: undefined,
});
GuildAvailabilityStore.displayName = "GuildAvailabilityStore";
const guildAvailabilityStore = new GuildAvailabilityStore(dispatcherDefault, {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  GUILD_UNAVAILABLE: function handleGuildUnavailable(guildId) {
    if (set.has(guildId.guildId)) {
      return false;
    } else {
      const guild = store.getGuild(guildId.guildId);
      let str = "???";
      if (tmp4) {
        str = guild.name;
      }
      const _HermesInternal = HermesInternal;
      logger.warn("Guild has gone unavailable: " + guildId.guildId + " (" + str + ")");
      set.add(guildId.guildId);
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
  },
});
const result = set.fileFinishedImporting("stores/GuildAvailabilityStore.tsx");

export default guildAvailabilityStore;
