// discord_app/stores/GuildAvailabilityStore.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import GuildStore from "GuildStore.tsx";
import size from "../../_runtime/metro/00002__.js";

function handleConnectionOpen(unavailableGuilds) {
  new Set(unavailableGuilds.unavailableGuilds);
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
const logger = new LoggerDefault("GuildAvailabilityStore");
new LoggerDefault("GuildAvailabilityStore");
const set = new Set();
const Store = get_initializedDefault.Store;
class GuildAvailabilityStore extends Store {
  initialize() {
    this.waitFor(GuildStore);
  }
  isUnavailable(guildId) {
    const hasItem = null != guildId && set.has(guildId);
    return hasItem;
  }
}
const prototype = GuildAvailabilityStore.prototype;
Object.defineProperty(prototype, "totalGuilds", {
  get: function totalGuilds() {
    return GuildStore.getGuildCount() + set.size;
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
const obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  GUILD_UNAVAILABLE: function handleGuildUnavailable(guildId) {
    if (set.has(guildId.guildId)) {
      return false;
    } else {
      const guild = GuildStore.getGuild(guildId.guildId);
      let str = "???";
      const tmp4 = null != guild && null != guild.name;
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
};
const guildAvailabilityStore = new GuildAvailabilityStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/GuildAvailabilityStore.tsx");

export default guildAvailabilityStore;
