// === Module 2074: GuildStore ===

// Module 2074 (GuildStore)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import libdiscoreExperiments from "libdiscoreExperiments" /* 559 */;
import FavoritesConstants from "FavoritesConstants" /* 2065 */;
import GuildRecordUtilsAll from "GuildRecordUtils" /* 2066 */;
import SetUtils from "SetUtils" /* 2069 */;
import LibdiscoreStore2 from "LibdiscoreStore" /* 2075 */;
import FavoritesUtils from "FavoritesUtils" /* 2077 */;
import PlainRecord from "PlainRecord" /* 2067 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let set;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function createGuildRecordFromRust(features) {
  let date;
  let date1;
  let obj2;
  const obj = { features: obj2.toSetInplace(features.features), joinedAt: date, premiumProgressBarEnabledUserUpdatedAt: date1 };
  const merged = Object.assign(features);
  date = null;
  obj2 = SetUtils;
  if (null != features.joinedAt) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(features.joinedAt);
  }
  date1 = null;
  if (null != features.premiumProgressBarEnabledUserUpdatedAt) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date1 = new Date(features.premiumProgressBarEnabledUserUpdatedAt);
  }
  return React3(metroRequire, obj);
}
({ constructInPlace: closure_4, set: hasOwnProperty } = PlainRecord);
const LibdiscoreStore = LibdiscoreStore2.LibdiscoreStore;
({ GuildRecordTypeTag: metroRequire, updateJoinedAt: metroImportDefault, updateGameApplications: metroImportAll } = GuildRecord);
const FAVORITES_GUILD_RECORD = FavoritesConstants.FAVORITES_GUILD_RECORD;
class GuildStore extends LibdiscoreStore {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.database = applyArgumentsResult.addKVDatabase("guilds", createGuildRecordFromRust);
    applyArgumentsResult.getGuild = function getGuild(guildId) {
      if (null != guildId) {
        let value;
        const obj = FavoritesUtils;
        if (obj.isFavoritesGuildId(guildId)) {
          value = FAVORITES_GUILD_RECORD;
        } else {
          const database = require.database;
          value = database.get(guildId);
        }
        return value;
      }
    };
    let database = applyArgumentsResult.database;
    applyArgumentsResult.getGuilds = database.memoized((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      return obj;
    });
    const database2 = applyArgumentsResult.database;
    applyArgumentsResult.getGuildsArray = database2.memoized((arg0) => Object.values(arg0));
    const database3 = applyArgumentsResult.database;
    applyArgumentsResult.getGuildIds = database3.memoized((arg0) => {
      const obj = SnowflakeUtilsDefault;
      return obj.keys(arg0);
    });
    return applyArgumentsResult;
  }
  stateWrapper() {
    return this.database;
  }
  getGuildCount() {
    const database = this.database;
    return database.length();
  }
}
const prototype = GuildStore.prototype;
GuildStore.displayName = "GuildStore";
let obj = {
  BACKGROUND_SYNC(arg0, get) {
    const iter = arg0.guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let value = get.get(nextResult.id);
      let tmp5 = null != value;
      let tmp4 = value;
      if (tmp5) {
        tmp5 = "unavailable" !== tmp2.data_mode;
      }
      if (tmp5) {
        set = get.set;
        let id = tmp2.id;
        let obj = GuildRecordUtilsAll;
        let result = set(id, obj.fromBackgroundSync(tmp2, tmp4));
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
    let guilds;
    let unavailableGuilds;
    ({ guilds, unavailableGuilds } = arg0);
    const allRecords = getAllRecords.getAllRecords();
    const set1 = new Set(Object.keys(allRecords));
    const iter = guilds[Symbol.iterator]();
    const nextResult = iter.next();
    const tmp2 = set1;
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let deleteResult = set1.delete(nextResult.id);
      if (null == nextResult.properties) {
        if (null == allRecords[tmp4.id]) {
          let _Error = Error;
          let self = this;
          let str = "Guild data was missing from store, but hash was still available.";
          let self2 = this;
          let error = new Error("Guild data was missing from store, but hash was still available.");
          throw error;
        }
      }
      set = getAllRecords.set;
      let id = tmp4.id;
      let obj2 = GuildRecordUtilsAll;
      let result = set(id, obj2.fromServer(tmp4, allRecords[tmp4.id]));
      continue;
    }
    for (const item10053 of unavailableGuilds) {
      let deleteResult1 = set1.delete(item10053);
      continue;
    }
    for (const item10061 of tmp2) {
      let removeResult = getAllRecords.remove(item10061);
      continue;
    }
  },
  OVERLAY_INITIALIZE(guilds, clear) {
    let additionalFields;
    let properties;
    guilds = guilds.guilds;
    clear.clear();
    if (null != guilds) {
      const iter = guilds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        ({ properties, additionalFields } = nextResult);
        set = clear.set;
        let id = properties.id;
        let tmp8 = GuildRecordUtilsAll;
        let date = null;
        let fromGuildPropertiesWithAdditionalFields = tmp8.fromGuildPropertiesWithAdditionalFields;
        if (null != additionalFields.joinedAt) {
          let _Date = Date;
          let self = this;
          let self2 = this;
          date = new Date(additionalFields.joinedAt);
        }
        let obj = { joinedAt: date, premiumSubscriberCount: additionalFields.premiumSubscriberCount };
        let result = set(id, fromGuildPropertiesWithAdditionalFields(properties, obj));
        continue;
      }
    }
  },
  CACHE_LOADED(guilds, clear) {
    guilds = guilds.guilds;
    clear.clear();
    for (const item10009 of guilds) {
      set = clear.set;
      let id = item10009.id;
      let obj = GuildRecordUtilsAll;
      let result = set(id, obj.fromSerializedGuildRecord(item10009));
      continue;
    }
  },
  CACHE_LOADED_LAZY(guilds, clear) {
    guilds = guilds.guilds;
    if (0 !== guilds.length) {
      clear.clear();
      for (const item10011 of guilds) {
        set = clear.set;
        let id = item10011.id;
        let obj = GuildRecordUtilsAll;
        let result = set(id, obj.fromSerializedGuildRecord(item10011));
        continue;
      }
    }
  },
  GUILD_CREATE(guild, get) {
    guild = guild.guild;
    const value = get.get(guild.id);
    if (null == guild.properties) {
      if (null == value) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Guild data was missing from store, but hash was still available.");
        throw error;
      }
    }
    const id = guild.id;
    set = get.set;
    const obj = GuildRecordUtilsAll;
    const result = set(id, obj.fromServer(guild, value));
  },
  GUILD_UPDATE(guild, get) {
    guild = guild.guild;
    const value = get.get(guild.id);
    const id = guild.id;
    set = get.set;
    const obj = GuildRecordUtilsAll;
    const result = set(id, obj.fromGuild(guild, value));
  },
  GUILD_THEME_PREVIEW_SAVE_SUCCESS(guildId, get) {
    guildId = guildId.guildId;
    const guildTheme = guildId.guildTheme;
    const value = get.get(guildId);
    if (null != value) {
      const result = get.set(guildId, hasOwnProperty(value, "guildTheme", guildTheme));
    }
  },
  GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS(guildId, get) {
    guildId = guildId.guildId;
    const guildTheme = guildId.guildTheme;
    const value = get.get(guildId);
    if (null != value) {
      const result = get.set(guildId, hasOwnProperty(value, "guildTheme", guildTheme));
    }
  },
  GUILD_DELETE(guild, remove) {
    guild = guild.guild;
    if (!guild.unavailable) {
      remove.remove(guild.id);
    }
  },
  GUILD_MEMBER_ADD(user, get) {
    let guildId;
    let joinedAt;
    ({ guildId, joinedAt } = user);
    user = user.user;
    const id = AuthenticationStore.getId();
    const value = get.get(guildId);
    if (id === user.id) {
      if (null != value) {
        let date = joinedAt;
        if (typeof joinedAt === "string") {
          const _Date = Date;
          const self = this;
          const self2 = this;
          date = new Date(joinedAt);
        }
        const tmp5 = date !== value.joinedAt && null != date;
        if (tmp5) {
          const result = get.set(guildId, metroImportDefault(value, date));
        }
      }
    }
  },
  GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE(guildId, get) {
    guildId = guildId.guildId;
    const gameApplicationIds = guildId.gameApplicationIds;
    const value = get.get(guildId);
    if (null != value) {
      const result = get.set(guildId, metroImportAll(value, gameApplicationIds));
    }
  }
};
const LibdiscoreBatchStoreRefactorExperiment = libdiscoreExperiments.LibdiscoreBatchStoreRefactorExperiment;
const guildStore = new GuildStore(obj, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
let result = size.fileFinishedImporting("stores/GuildStore.tsx");

export default guildStore;