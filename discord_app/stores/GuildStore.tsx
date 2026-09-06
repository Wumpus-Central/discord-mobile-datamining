// === Module 1979: GuildStore ===

// Module 1979 (GuildStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import FavoritesConstants from "FavoritesConstants" /* 1970 */;
import GuildRecordUtilsAll from "GuildRecordUtils" /* 1971 */;
import SetUtils from "SetUtils" /* 1974 */;
import LibdiscoreStore2 from "LibdiscoreStore" /* 1980 */;
import libdiscoreExperiments from "libdiscoreExperiments" /* 1983 */;
import PlainRecord from "PlainRecord" /* 1972 */;
import GuildRecord from "GuildRecord" /* 1975 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

function createGuildRecordFromRust(features) {
  const obj = {};
  const merged = Object.assign(features);
  obj.features = SetUtils.toSetInplace(features.features);
  let date = null;
  if (null != features.joinedAt) {
    const _Date = Date;
    date = new Date(features.joinedAt);
  }
  obj.joinedAt = date;
  let date1 = null;
  if (null != features.premiumProgressBarEnabledUserUpdatedAt) {
    const _Date2 = Date;
    date1 = new Date(features.premiumProgressBarEnabledUserUpdatedAt);
  }
  obj.premiumProgressBarEnabledUserUpdatedAt = date1;
  return React4(timestampProducer, obj);
}
({ constructInPlace: closure_4, set: hasOwnProperty } = PlainRecord);
const LibdiscoreStore = LibdiscoreStore2.LibdiscoreStore;
({ GuildRecordTypeTag: metroRequire, updateJoinedAt: closure_7, updateGameApplications: closure_8 } = GuildRecord);
const FAVORITES_GUILD_RECORD = FavoritesConstants.FAVORITES_GUILD_RECORD;
class GuildStore extends LibdiscoreStore {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.database = applyArgumentsResult.addKVDatabase("guilds", createGuildRecordFromRust);
    applyArgumentsResult.getGuild = function getGuild(guildId) {
      if (null != guildId) {
        if (obj.isFavoritesGuildId(guildId)) {
          value = FAVORITES_GUILD_RECORD;
        } else {
          const database = applyArgumentsResult.database;
          value = database.get(guildId);
        }
        return value;
      }
    };
    database = applyArgumentsResult.database;
    applyArgumentsResult.getGuilds = database.memoized((arg0) => {
      const merged = Object.assign(arg0);
      return {};
    });
    database2 = applyArgumentsResult.database;
    applyArgumentsResult.getGuildsArray = database2.memoized((arg0) => Object.values(arg0));
    database3 = applyArgumentsResult.database;
    applyArgumentsResult.getGuildIds = database3.memoized((arg0) => SnowflakeUtilsDefault.keys(arg0));
    return applyArgumentsResult;
  }
}
const prototype = GuildStore.prototype;
prototype["stateWrapper"] = function stateWrapper() {
  return this.database;
};
prototype["getGuildCount"] = function getGuildCount() {
  const database = this.database;
  return database.length();
};
GuildStore.displayName = "GuildStore";
const LibdiscoreBatchStoreRefactorExperiment = libdiscoreExperiments.LibdiscoreBatchStoreRefactorExperiment;
const guildStore = new GuildStore({
  BACKGROUND_SYNC(arg0, get) {
    const iter = arg0.guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      value = get.get(nextResult.id);
      let tmp5 = null != value;
      let tmp4 = value;
      if (tmp5) {
        tmp5 = "unavailable" !== tmp2.data_mode;
      }
      if (tmp5) {
        let obj = GuildRecordUtilsAll;
        let result = get.set(tmp2.id, obj.fromBackgroundSync(tmp2, tmp4));
      }
      continue;
    }
  },
  LOGOUT(arg0, clear) {
    clear.clear();
  },
  RESET_SOCKET(arg0, clear) {
    clear.clear();
  },
  CONNECTION_OPEN(arg0, getAllRecords) {
    ({ guilds, unavailableGuilds } = arg0);
    const allRecords = getAllRecords.getAllRecords();
    const set = new Set(Object.keys(allRecords));
    const iter = guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let deleteResult = set.delete(nextResult.id);
      if (null == nextResult.properties) {
        if (null == allRecords[tmp4.id]) {
          let _Error = Error;
          let tmp11 = new.target;
          let str = "Guild data was missing from store, but hash was still available.";
          let tmp12 = new.target;
          let error = new Error("Guild data was missing from store, but hash was still available.");
          throw error;
        }
      }
      let obj2 = GuildRecordUtilsAll;
      let result = getAllRecords.set(tmp4.id, obj2.fromServer(tmp4, allRecords[tmp4.id]));
      continue;
    }
    for (const item10053 of unavailableGuilds) {
      let deleteResult1 = set.delete(item10053);
      continue;
    }
    for (const item10061 of tmp2) {
      let removeResult = arg1.remove(item10061);
      continue;
    }
    const tmp2 = set;
  },
  OVERLAY_INITIALIZE(guilds, clear) {
    guilds = guilds.guilds;
    clear.clear();
    if (null != guilds) {
      const iter = guilds[Symbol.iterator]();
      while (iter !== undefined) {
        ({ properties, additionalFields } = nextResult);
        let obj = GuildRecordUtilsAll;
        let date = null;
        if (null != additionalFields.joinedAt) {
          let _Date = Date;
          let tmp10 = new.target;
          let tmp11 = new.target;
          date = new Date(additionalFields.joinedAt);
        }
        obj = { joinedAt: date, premiumSubscriberCount: additionalFields.premiumSubscriberCount };
        let result = clear.set(properties.id, obj.fromGuildPropertiesWithAdditionalFields(properties, obj));
        continue;
      }
      nextResult = iter.next();
    }
  },
  CACHE_LOADED(arg0, clear) {
    clear.clear();
    for (const item10009 of tmp) {
      let obj = GuildRecordUtilsAll;
      let result = arg1.set(item10009.id, obj.fromSerializedGuildRecord(item10009));
      continue;
    }
  },
  CACHE_LOADED_LAZY(guilds, clear) {
    guilds = guilds.guilds;
    if (0 !== guilds.length) {
      clear.clear();
      for (const item10011 of guilds) {
        let obj = GuildRecordUtilsAll;
        let result = arg1.set(item10011.id, obj.fromSerializedGuildRecord(item10011));
        continue;
      }
    }
  },
  GUILD_CREATE(guild, get) {
    guild = guild.guild;
    value = get.get(guild.id);
    if (null == guild.properties) {
      if (null == value) {
        const _Error = Error;
        const error = new Error("Guild data was missing from store, but hash was still available.");
        throw error;
      }
    }
    const result = get.set(guild.id, GuildRecordUtilsAll.fromServer(guild, value));
  },
  GUILD_UPDATE(guild, get) {
    guild = guild.guild;
    value = get.get(guild.id);
    const result = get.set(guild.id, GuildRecordUtilsAll.fromGuild(guild, value));
  },
  GUILD_THEME_PREVIEW_SAVE_SUCCESS(guildId, get) {
    guildId = guildId.guildId;
    value = get.get(guildId);
    if (null != value) {
      const result = get.set(guildId, hasOwnProperty(value, "guildTheme", guildId.guildTheme));
    }
  },
  GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS(guildId, get) {
    guildId = guildId.guildId;
    value = get.get(guildId);
    if (null != value) {
      const result = get.set(guildId, hasOwnProperty(value, "guildTheme", guildId.guildTheme));
    }
  },
  GUILD_DELETE(guild, remove) {
    guild = guild.guild;
    if (!guild.unavailable) {
      remove.remove(guild.id);
    }
  },
  GUILD_MEMBER_ADD(user, get) {
    ({ guildId, joinedAt } = user);
    const id = AuthenticationStore.getId();
    value = get.get(guildId);
    if (id === user.user.id) {
      if (null != value) {
        let date = joinedAt;
        if (typeof joinedAt === "string") {
          const _Date = Date;
          date = new Date(joinedAt);
        }
        if (tmp5) {
          const result = get.set(guildId, React5(value, date));
        }
        tmp5 = date !== value.joinedAt && null != date;
      }
    }
  },
  GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE(guildId, get) {
    guildId = guildId.guildId;
    value = get.get(guildId);
    if (null != value) {
      const result = get.set(guildId, React6(value, guildId.gameApplicationIds));
    }
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
let result = size.fileFinishedImporting("stores/GuildStore.tsx");

export default guildStore;